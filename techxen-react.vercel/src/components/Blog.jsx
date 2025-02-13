import React, { useEffect, useState } from "react";
import "../index-CNfx030l.css";
import {API_URL,IMAGE_URL} from  '../../../admin/src/url'
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/post/blog`); 
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs.slice(0, 3));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <div>
                <span className="span">
                  <img
                    src="https://techxen-react.vercel.app/assets/img/icons/span1.png"
                    alt=""
                  />{" "}
                  Blog &amp; Latest News
                </span>
                <h2 className="title tg-element-title">Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div className="col-lg-4" key={index}>
                <div
                  className="blog-box"
                  data-aos="zoom-in-up"
                  data-aos-duration="1100"
                >
                  <div className="image image-anime">
                    <img
                      src={`${IMAGE_URL}/src/images${blog.imageUrl}`} 
                      alt={blog.title}
                    />
                  </div>
                  <div className="heading">
                    <div className="tags">
                      <a href="/blog">
                        <img
                          src="https://techxen-react.vercel.app/assets/img/icons/blog-icon2.png"
                          alt=""
                        />{" "}
                        {new Date(blog.date).toLocaleDateString()} 
                      </a>
                    </div>
                    <h4>
                      <a href={`/blog-details/${blog.slug}`}>
                        {blog.title} 
                      </a>
                    </h4>
                    <a className="learn" href={`/blog-details/${blog.slug}`}>
                      Learn More{" "}
                      <span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available.</p> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
