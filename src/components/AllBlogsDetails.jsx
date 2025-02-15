import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../index-CNfx030l.css";
import "../App.css"
import Calendar from '../assets/Icon/icons-calendar.png'
import Category from '../assets/Icon/icon-category.png'
import {API_URL,IMAGE_URL} from  '../../admin/src/url'
const AllBlogsDetails = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]); 
  const [recentBlogs, setRecentBlogs] = useState([]); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true); 
        const response = await fetch(`${API_URL}/api/post/blog/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }

        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData(); 
  }, [slug]); 
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/post/blog`); 
        if (!response.ok) {
          throw new Error('Failed to fetch all blogs');
        }
        const data = await response.json();
        setAllBlogs(data);
        const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date)); 
        setRecentBlogs(sortedBlogs.slice(0, 5)); 
      } catch (error) {
        console.error(error.message || 'Failed to fetch all blogs');
      }
    };

    fetchAllBlogs();
  }, []); 
  const createMarkup = (content) => {
    return { __html: content }; 
  };
  useEffect(() => {
    if (blogData) {
      document.title = blogData.title ? `${blogData.title} | My Blog` : "Blog Details";
    }
  }, [blogData]);

  if (loading) {
    return <div>Loading blog details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }


  
  return (
    <div className="service-details-area-all">
    <div className="space50"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 details-right-space">
          <div className="service-details-post">
            <article>
            {blogData ? (
                  <div className="details-post-area">
                    <div className="image">
                      <img
                        src={`${IMAGE_URL}/src/images${blogData.imageUrl}` || '/path/to/default-image.jpg'} 
                        alt={blogData.title}
                      />
                    </div>
                    <div className="social-users">
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              src={Calendar}
                              alt=""
                            />{" "}
                            {new Date(blogData.date).toLocaleDateString()}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src={Category}
                              alt=""
                            />{" "}
                            {blogData.category}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="space30"></div>
                    <div className="heading1">
                      <h2>{blogData.title || 'No Title Available'}</h2>
                      <div className="space16"></div>
                      <div dangerouslySetInnerHTML={createMarkup(blogData.content)} />
                    </div>
                  </div>
                ) : (
                  <div>No blogData data available.</div>
                )}
            </article>
            <div className="space50"></div>
          </div>
        </div>
        <div className="col-lg-4">
          {/* <div className="sidebar-box-area mb-40">
            <h3>Search by Keyword</h3>
            <div className="search">
              <input type="text" placeholder="Type keyword here" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  />
              <div className="button">
                <button>
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div> */}
          <div className="sidebar-box-area sidebar-bg mb-40">
            <h3>Recent Blogs</h3>
            <div className="sidebar-blog-boxs">
            {recentBlogs.length > 0 ? (
                  recentBlogs.map((blog) => (
                    <Link to={`/blog-details/${blog._id}`} key={blog._id} className="sidebar-blogs-link">
                    <div className="sidebar-blogs">
                      <div className="image">
                        <img
                          src={`${IMAGE_URL}/src/images${blog.imageUrl || "/assets/img/blog/blog-details-sidebar1.png"}`} // Replace with blog image or fallback image
                          alt={blog.title}
                        />
                      </div>
                      <div className="heading">
                        <a href="#" className="date">
                        <img
                        src={Calendar}
                        alt=""
                      />{" "}
                          {new Date(blog.date).toLocaleDateString()}
                        </a>
                        <h5>
                          <a href={`/blog/${blog._id}`}>{blog.title}</a>
                        </h5>
                      </div>
                    </div>
                    </Link>
                  ))
                ) : (
                  <div>No recent blogs available.</div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default AllBlogsDetails;