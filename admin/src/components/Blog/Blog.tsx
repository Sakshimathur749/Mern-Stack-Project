import React, { useState } from 'react'
import './Blog.css'
const Blog: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [error, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);
    if (image) formData.append('image', image);
    try {
      const response = await fetch('http://localhost:5000/api/post/blog', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setSuccessMessage(data.message);
      setTitle('');
      setCategory('');
      setContent('');
      setImage(null);
    } catch (error) {
      setErrorMessage('Failed to create blog post');
    }
      };
  return (
    <div className="blog-upload-page" style={{width:'60%', margin: '0 auto',  backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{fontSize: '25px',textAlign:'center',fontWeight: '600',padding:'10px 0px',color:'#333' }}>Create a New Blog</h2>
      {error && <p style={{ fontSize:'18px',fontWeight:'bold',marginTop:'15px', textAlign: 'center', color: 'red' }}>{error}</p>}
      {successMessage && <p style={{fontSize:'18px',fontWeight:'bold',marginTop:'15px', textAlign: 'center',color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '30px',}}>
          <label style={{fontSize: '20px', fontWeight: '400', padding: '10px', display: 'block',marginBottom: '8px',color: '#333'}} htmlFor="title">Title:</label>
          <input style={{padding: '10px 20px',  width: '100%', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px',color: '#333', backgroundColor: '#fff', transition: 'all 0.3s ease'}}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div style={{marginBottom: '30px'}}>
          <label style={{fontSize: '20px', fontWeight: '400', padding: '10px', display: 'block',marginBottom: '8px',color: '#333'}}>Category:</label>
          <input style={{padding: '10px 20px',  width: '100%', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px',color: '#333', backgroundColor: '#fff', transition: 'all 0.3s ease'}}
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div style={{marginBottom: '30px'}}>
          <label style={{fontSize: '20px', fontWeight: '400', padding: '10px', display: 'block',marginBottom: '8px',color: '#333'}} htmlFor="image">Image:</label>
          <input style={{padding: '10px 20px',  width: '100%', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px',color: '#333', backgroundColor: '#fff', transition: 'all 0.3s ease'}}
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          />
        </div>

        <div style={{marginBottom: '30px'}}>
          <label style={{fontSize: '20px', fontWeight: '400', padding: '10px', display: 'block',marginBottom: '8px',color: '#333'}} htmlFor="content">Content:</label>
          <textarea style={{padding: '10px 20px',  width: '100%', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px',color: '#333', backgroundColor: '#fff', transition: 'all 0.3s ease', resize: 'vertical',height: '150px'}}
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            cols={10}
            required
          />
        </div>
        <button type="submit" style={{backgroundColor: '#4CAF50', color: 'white', padding: '12px 20px',fontSize: '18px',border: 'none',borderRadius: '4px', cursor: 'pointer',width: '100%', marginTop: '20px',transition: 'backgroundColor 0.3s ease'}}>Create Blog Post</button>
      </form>
    </div>
  )
}

export default Blog