import React, { useEffect, useRef, useState } from 'react'
import 'quill/dist/quill.snow.css'; 
import Quill from 'quill';
import './Blog.css';
import{ API_URL }from '../../url.ts'
const Blog: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [slug, setSlug] = useState<string>(''); 
    const [content, setContent] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [error, setErrorMessage] = useState<string>('');
    const [showModal, setShowModal] = useState(false);
     const [message, setMessage] = useState<{ type: string, text: string } | null>(null);  
    const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
    const [isEdit, setIsEdit] = useState(false);
    const quillRef = useRef<Quill | null>(null);
    const [formData, setFormData] = useState({
      title: '',
      category: '',
      content: '',
      imageUrl: '',
      slug: '', 
    });

    useEffect(() => {
      quillRef.current = new Quill('#editor', {
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
      quillRef.current.on('text-change', () => {
          setContent(quillRef.current?.root.innerHTML || ''); 
        });
        if (message && message.type === 'success') {
          setTimeout(() => setMessage(null), 3000);
        } 
    }, [message])

    const generateSlug = (title: string) => {
      return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')  
        .replace(/\s+/g, '-')      
        .replace(/-+/g, '-');      
    };
  
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
      setSlug(generateSlug(e.target.value));  
    };
  
    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSlug(e.target.value); 
    };
    const handleImageChange = (e:any) => {
      const file = e.target.files[0];
      if(file){
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }};
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!title || !content || !category || !image) {
        setErrorMessage('All fields are required.');
        return;
      }
      const dataTosend = new FormData();
      dataTosend.append('title', title);
      dataTosend.append('category', category);
      dataTosend.append('content', content);
      dataTosend.append('image', image);
      dataTosend.append('slug', slug);  
      try {
        const endpoint = editingBlogId
          ? `${API_URL}/api/post/blog/${editingBlogId}`
          : `${API_URL}/api/post/blog`;
    
        const method = editingBlogId ? 'PUT' : 'POST';
        const response = await fetch(endpoint, {
          method: method,
          body: dataTosend,
        });
    
        const data = await response.json();
        console.log(data)
        if (data.imageUrl) {
          setImageUrl(data.imageUrl); 
        }
        setMessage({ type: 'success', text: 'Blog post successfully created!' });
      
    
        setFormData({
          title,
          category,
          content,
          imageUrl: data.imageUrl || '',
          slug: data.slug || '',
        });
    
        setShowModal(true);
        setIsEdit(false);
        setSlug(''); 
        setTitle('');
        setCategory('');
        setImage(null); 
        setImageUrl('');
        const imageInput = document.getElementById('image') as HTMLInputElement;
        if (imageInput) imageInput.value = ''; 
        quillRef.current?.setContents([]); 
      } catch (error) {
        setErrorMessage('Failed to create blog post');
      }
    };
    
      const handleInputChange = () => {
        setErrorMessage('');
    };    

  return (
    <div
      className="blog-upload-page"
      style={{
        width: '60%',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          fontSize: '25px',
          textAlign: 'center',
          fontWeight: '600',
          padding: '10px 0px',
          color: '#333',
        }}
      >
        Create a New Blog
      </h2>
      {message && message.type === 'success' && (
        <div className='successMessage'    >
          {message.text}
        </div>
      )}
      {message && message.type === 'error' && (
        <div className='ErrorMessage' >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '30px' }}>
        <label style={{ fontSize: '20px', fontWeight: '400', padding: '10px', display: 'block', marginBottom: '8px', color: '#333' }} htmlFor="title">Title:</label>
          <input
            style={{ padding: '10px 20px', width: '100%', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#333', backgroundColor: '#fff', transition: 'all 0.3s ease' }}
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label style={{ fontSize: '20px', fontWeight: '400', padding: '10px', display: 'block', marginBottom: '8px', color: '#333' }} htmlFor="slug">Slug:</label>
          <input
            style={{ padding: '10px 20px', width: '100%', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#333', backgroundColor: '#fff', transition: 'all 0.3s ease' }}
            type="text"
            id="slug"
            value={slug}
            onChange={handleSlugChange}
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
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleInputChange();
            }}
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Business">Business</option>
          </select>
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
            htmlFor="image"
          >
            Image:
          </label>
          <input
            style={{
              padding: '10px 20px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              color: '#333',
              backgroundColor: '#fff',
              transition: 'all 0.3s ease',
            }}
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />{imageUrl && <img src={imageUrl} alt="Image preview" />}
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
            htmlFor="content"
          >
            Content:
          </label>
          <div id="editor"></div>
        </div>
        {error && <p className="error">{error}</p>}
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px 20px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '20px',
            transition: 'backgroundColor 0.3s ease',
          }}
        >
          Create Blog Post
        </button>
      </form>
    </div>
  );
}

export default Blog