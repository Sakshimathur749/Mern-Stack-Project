import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "../index-CNfx030l.css";
import "../App.css"

const AllBlogsDetails = () => {
  const { id } = useParams(); // Extract the blog id from URL params
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true); // Set loading to true when starting fetch
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
        setBlogData(data); // Set the fetched blog data
      } catch (error) {
        setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchBlogData(); // Call the function to fetch data
  }, [id]); // Re-run this effect when `id` changes
  const createMarkup = (content) => {
    return { __html: content }; // This will allow HTML to render in the component
  };
  // Change the document title dynamically based on the blog data
  useEffect(() => {
    if (blogData) {
      document.title = blogData.title ? `${blogData.title} | My Blog` : "Blog Details";
    }
  }, [blogData]);

  if (loading) {
    return <div>Loading blog details...</div>; // Show loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if something goes wrong
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
                        src={`http://localhost:5173/src/images${blogData.imageUrl}` || '/path/to/default-image.jpg'} // Use default image if imageUrl is not present
                        alt={blogData.title}
                      />
                    </div>
                    <div className="social-users">
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              src="https://techxen-react.vercel.app/assets/img/icons/user-icon2.png"
                              alt=""
                            />{" "}
                            {new Date(blogData.date).toLocaleDateString()}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://techxen-react.vercel.app/assets/img/icons/user-icon3.png"
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
                  <div>No blogData data available.</div> // Fallback in case there's no data
                )}
            </article>
            <div className="space50"></div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-box-area mb-40">
            <h3>Search by Keyword</h3>
            <div className="search">
              <input type="text" placeholder="Type keyword here" />
              <div className="button">
                <button>
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="sidebar-box-area sidebar-bg mb-40">
            <h3>Recent Blogs</h3>
            <div className="sidebar-blog-boxs">
              {/* Recent blog sidebar items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default AllBlogsDetails;