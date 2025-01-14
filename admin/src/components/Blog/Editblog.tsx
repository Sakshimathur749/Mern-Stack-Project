import React, { useEffect, useState, useRef } from 'react';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';
import { useParams, useNavigate} from 'react-router-dom';
import './Blog.css';

interface QuillEditorDiv extends HTMLDivElement {
  __quill?: Quill;
}

const EditBlog = () => {
  const [blog, setBlog] = useState<{
    title: string;
    category: string;
    content: string;
    slug:string;
    imageUrl: string | File;
  }>({
    title: '',
    category: '',
    content: '',
    slug:'',
    imageUrl: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const editorRef = useRef<QuillEditorDiv | null>(null);  
  useEffect(() => {
    if (!id) {
      console.error('id is undefined or invalid!');
      return;
    }
  
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/post/blog/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
  
        const data = await response.json();
        setBlog({
          ...data,
          imageUrl: data.imageUrl ? `http://localhost:5173/src/images${data.imageUrl}` : '',
        });
      } catch (error: any) {
        setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id]);
  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setBlog({ ...blog, imageUrl: file });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', blog.title);
    formData.append('slug', blog.slug);
    formData.append('category', blog.category);
    formData.append('content', blog.content);
    if (blog.imageUrl instanceof File) {
      formData.append('image', blog.imageUrl);
    } else {
      formData.append('imageUrl', blog.imageUrl);
    }
    try {
      const response = await fetch(`http://localhost:5000/api/post/blog/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update blog');
      }
      

      navigate('/blogs');
    } catch (error) {
      setError('Failed to update blog');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  useEffect(() => {
    if (editorRef.current && !editorRef.current.__quill) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            ['image'],
            ['table'],
          ],
        },
      });

      editorRef.current.__quill = quill;
      quill.root.innerHTML = blog.content;
      quill.on('text-change', () => {
        setBlog((prevBlog) => ({
          ...prevBlog,
          content: quill.root.innerHTML,
        }));
      });
    }
  }, [blog.content]);  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-blog-container">
      <h2 className='text-title-md2 font-semibold text-black dark:text-white' style={{padding:'25px 0px'}}>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label
            style={{
              fontSize: '20px',
              fontWeight: '400',
              padding: '10px',
              display: 'block',
              marginBottom: '8px',
              color: '#333',
            }}
          >
            Category:
          </label>
          <select
            id="category"
            style={{
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              color: '#333',
              backgroundColor: '#fff',
              transition: 'all 0.3s ease',
              outline: 'none',
            }}
            value={blog.category}     onChange={(e) => {
              setBlog({ ...blog, category: e.target.value }); }}
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="form-group">
          <label>Content</label>
          <div ref={editorRef} id="editor"></div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
          />
 {blog.imageUrl instanceof File ? (
            <img src={URL.createObjectURL(blog.imageUrl)} alt="Image Preview" width="100" />
          ) : (
            blog.imageUrl && <img src={blog.imageUrl} alt="Image Preview" width="100" />
          )}
        </div>

        <button type="submit" className="btn-save">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
