import React, { useEffect, useState } from "react";
import "../index-CNfx030l.css";
import { Link } from "react-router-dom";
import './MediaQuerie.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/post/blog'); 
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data); 
        console.log(data)
        setLoading(false); 
      } catch (err) {
        setError('Failed to load blogs'); 
        setLoading(false); 
      }
    };

    fetchBlogs();
  }, []); 
  const [expandedBlogId, setExpandedBlogId] = useState(null); // Track which blog is expanded

  const handleReadMore = (id) => {
    setExpandedBlogId(id); // Toggle the expanded state for the specific blog
  };
  const removeHtmlTags = (content) => {
    return content.replace(/<[^>]+>/g, ''); // Regular expression to remove all HTML tags
  };


  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
 <div className="blog blog-page sp">
      <div className="space50"></div>
      <div className="container">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-6" key={blog._id}>
              <div className="blog2-box">
                <div className="image">
                <img src={`http://localhost:5173/src/images${blog.imageUrl}` || "default-image.jpg"} alt={blog.title} />
                </div>

                <div className="heading1 ">
                  <div className="tags">
                    <a href="/blog-details" className="date">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                        alt=""
                      />{" "}
                      {new Date(blog.date).toLocaleDateString()} 
                    </a>
                    <a href="/blog-details" className="date outhor">
                    <img
                              src="https://techxen-react.vercel.app/assets/img/icons/user-icon3.png"
                              alt=""
                            />{" "}
                      {blog.category}
                    </a>
                  </div>
                  <h4>
                    <a href={`/blog-details/${blog._id}`}>
                      {blog.title}
                    </a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                  {removeHtmlTags(blog.content).length > 150 
                      ? expandedBlogId === blog._id 
                        ? removeHtmlTags(blog.content) // Show full content if expanded
                        : removeHtmlTags(blog.content).substring(0, 150) + '...' // Truncate if not expanded
                      : removeHtmlTags(blog.content)} 
                  </p>
                  <div className="space16"></div>
                  <a className="learn" href={`/blog-details/${blog._id}`}>
                    <Link to={`/blog-details/${blog._id}`} style={{ color: 'darkslategray', paddingRight: '10px' }}>
                      Read More
                    </Link>
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;