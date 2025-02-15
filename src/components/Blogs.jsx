import React, { useEffect, useState } from "react";
import "../index-CNfx030l.css";
import { Link } from "react-router-dom";
import './MediaQuerie.css'
import Calendar from '../assets/Icon/icons-calendar.png'
import Category from '../assets/Icon/icon-category.png'
import {API_URL, IMAGE_URL} from  '../../admin/src/url'
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/post/blog`); 
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
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleReadMore = (id) => {
    setExpandedBlogId(id);
  };
  const removeHtmlTags = (content) => {
    return content.replace(/<[^>]+>/g, ''); 
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
            <div className="col-lg-6" key={blog.slug}>
              <div className="blog2-box">
                <div className="image">
                <img src={`${IMAGE_URL}/src/images${blog.imageUrl}` || "default-image.jpg"} alt={blog.title} />
                </div>

                <div className="heading1 ">
                  <div className="tags">
                    <a href="/blog-details" className="date">
                      <img
                        src={Calendar}
                        alt=""
                      />{" "}
                      {new Date(blog.date).toLocaleDateString()} 
                    </a>
                    <a href="/blog-details" className="date outhor">
                    <img
                              src={Category}
                              alt=""
                            />{" "}
                      {blog.category}
                    </a>
                  </div>
                  <h4>
                    <a href={`/blog-details/${blog.slug}`}>
                      {blog.title}
                    </a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                  {removeHtmlTags(blog.content).length > 150 
                      ? expandedBlogId === blog.slug 
                        ? removeHtmlTags(blog.content)
                        : removeHtmlTags(blog.content).substring(0, 150) + '...' 
                      : removeHtmlTags(blog.content)} 
                  </p>
                  <div className="space16"></div>
                  <a className="learn" href={`/blog-details/${blog.slug}`}>
                    <Link to={`/blog-details/${blog.slug}`} className="pr-2 darkslategray" >
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