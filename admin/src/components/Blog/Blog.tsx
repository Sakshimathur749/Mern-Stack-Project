import React, { useEffect, useRef, useState } from 'react'
import 'quill/dist/quill.snow.css'; 
import Quill from 'quill';
import './Blog.css'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
const Blog: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
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
    
      try {
        const endpoint = editingBlogId
          ? `http://localhost:5000/api/post/blog/${editingBlogId}`
          : 'http://localhost:5000/api/post/blog';
    
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
        });
    
        setShowModal(true);
        setIsEdit(false);
    
        setTitle('');
        setCategory('');
        setContent('');
        setImage(null); // Reset image state
        setImageUrl(''); // Reset imageUrl (clear image preview)
        
        const imageInput = document.getElementById('image') as HTMLInputElement;
        if (imageInput) imageInput.value = ''; // Clear file input
        
        quillRef.current?.setContents([]); // Clear the editor content
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

      {/* Error Message */}
      {message && message.type === 'error' && (
        <div className='ErrorMessage' >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
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
            htmlFor="title"
          >
            Title:
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
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              handleInputChange();
            }}
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

      {/* <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <ModalHeader>
          <h3>{isEdit ? "Edit Blog Post" : "Success"}</h3>
        </ModalHeader>
        <ModalBody>
          <div
            style={{
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              textAlign: 'center',
              borderRadius: '4px',
              marginBottom: '20px',
            }}
          >
            <h4>{isEdit ? "Blog Post Successfully Updated!" : "Blog Post Successfully Submitted!"}</h4>
            <p>
              {isEdit
                ? "Your blog post has been successfully updated. You can edit or cancel it at any time."
                : "Your blog post has been successfully created. You can edit or cancel it at any time."}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          {isEdit ? (
            <button
              onClick={handleSaveEdit} 
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                width: '20%',
                margin: '10px 20px',
                padding: '12px 20px',
                fontSize: '18px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleSubmit}  // Call handleSubmit when creating a new blog
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                width: '20%',
                margin: '10px 20px',
                padding: '12px 20px',
                fontSize: '18px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Save
            </button>
          )}
          <button
            onClick={() => setShowModal(false)}
            style={{
              backgroundColor: 'gray',
              width: '20%',
              color: 'white',
              margin: '10px 20px',
              padding: '12px 20px',
              fontSize: '18px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
}

export default Blog