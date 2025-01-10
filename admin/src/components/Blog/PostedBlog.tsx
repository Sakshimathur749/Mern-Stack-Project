import React, { useEffect, useState } from 'react';
import 'quill/dist/quill.snow.css';
import './Blog.css';
import { blog } from '../../types/blog';
import { useNavigate } from 'react-router-dom';

const PostedBlog = () => {
  const [blogs, setBlogs] = useState<blog[]>([]); 
  const [error, setError] = useState<string | null>(null);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false); 
  const [message, setMessage] = useState<{ type: string, text: string } | null>(null); 
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/post/blog', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        
        const sortedBlogs = data.sort((a: blog, b: blog) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setBlogs(sortedBlogs); 
        } catch (error: any) {
        setMessage({ type: 'error', text: 'Failed to fetch data' }); 
        setError(error.message || 'Something went wrong');
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null); 
      }, 1000);
    return () => clearTimeout(timer);
    }
  }, [message]);

  const handleEdit = (id: string) => {
    navigate(`/edit-blog/${id}`);  
  };

  const toggleDeletePopup = (id: string) => {
    setSelectedBlogId(id);  
    setShowDeletePopup(true); 
  };

  const handleDelete = async () => {
    if (selectedBlogId) {
      try {
        const response = await fetch(`http://localhost:5000/api/post/blog/${selectedBlogId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete blog');
        }

        setBlogs(blogs.filter(blog => blog._id !== selectedBlogId));
        setMessage({ type: 'success', text: 'Blog successfully deleted!' }); 
        setShowDeletePopup(false); 
        setSelectedBlogId(null);  
        navigate('/blogs');  
      } catch (error) {
        setError('Failed to delete blog');
        setShowDeletePopup(false); 
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();  
  };

  return (
    <div className="posted-blog-container mt-5">
      {message && message.type === 'success' && (
        <div className='successMessage'>
          {message.text}
        </div>
      )}
      {message && message.type === 'error' && (
        <div className='ErrorMessage'>
          {message.text}
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      <table className="blog-table">
        <thead>
          <tr>
            <th className="table-header">Title</th>
            <th className="table-header">Date</th>
            <th className="table-header">Category</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr key={b._id} className="table-row">
              <td className="table-data">{b.title}</td>
              <td className="table-data">{formatDate(b.date)}</td> 
              <td className="table-data">{b.category}</td>
              <td className="table-data">
                <button
                  className="btn-edit"
                  onClick={() => handleEdit(b._id)}  >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => toggleDeletePopup(b._id)} 
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeletePopup && (
        <div className="delete-popup">
          <div className="popup-content">
            <h3>Are you sure you want to delete this blog?</h3>
            <button onClick={handleDelete} className="btn-confirm-delete">
              Yes
            </button>
            <button onClick={() => setShowDeletePopup(false)} className="btn-cancel-delete">
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostedBlog;
