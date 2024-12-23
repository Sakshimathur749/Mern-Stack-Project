import React from "react";
import "../index-CNfx030l.css";

const Blog = () => {
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
          <div className="col-lg-4">
            <div
              className="blog-box"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <div className="image image-anime">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog-img1.png"
                  alt=""
                />
              </div>
              <div className="heading">
                <div className="tags">
                  <a href="/blog">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/blog-icon1.png"
                      alt=""
                    />{" "}
                    John William
                  </a>
                  <a href="/blog">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/blog-icon2.png"
                      alt=""
                    />{" "}
                    Feb 25, 24
                  </a>
                </div>
                <h4>
                  <a href="/blog-details">
                    Demystifying Blockchain: How It is Revolutionising
                    Industries.
                  </a>
                </h4>
                <a className="learn" href="/blog-details">
                  Learn More{" "}
                  <span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-box" data-aos="zoom-in-up" data-aos-duration="900">
              <div className="image image-anime">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog-img2.png"
                  alt=""
                />
              </div>
              <div className="heading">
                <div className="tags">
                  <a href="/blog">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/blog-icon1.png"
                      alt=""
                    />{" "}
                    John William
                  </a>
                  <a href="/blog">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/blog-icon2.png"
                      alt=""
                    />{" "}
                    Feb 25, 24
                  </a>
                </div>
                <h4>
                  <a href="/blog-details">
                    Cybersecurity Essentials: Protecting Your Business{" "}
                  </a>
                </h4>
                <a className="learn" href="/blog-details">
                  {" "}
                  Learn More{" "}
                  <span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-box" data-aos="zoom-in-up" data-aos-duration="700">
              <div className="image image-anime">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog-img3.png"
                  alt=""
                />
              </div>
              <div className="heading">
                <div className="tags">
                  <a href="/blog">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/blog-icon1.png"
                      alt=""
                    />{" "}
                    John William
                  </a>
                  <a href="/blog">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/blog-icon2.png"
                      alt=""
                    />{" "}
                    Feb 25, 24
                  </a>
                </div>
                <h4>
                  <a href="/blog-details">
                    The Future of Work: Embracing Remote Collaboration Tools
                  </a>
                </h4>
                <a className="learn" href="/blog-details">
                  {" "}
                  Learn More{" "}
                  <span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
