import React from "react";
import "../index-CNfx030l.css";
import { Link } from "react-router-dom";
import './MediaQuerie.css'

const Blogs = () => {
  return (
    <div className="blog blog-page sp">
      <div className="space50"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="blog2-box ">
              <div className="image">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog2-img2.png"
                  alt=""
                />
              </div>
              <div className="heading1 card1">
                <div className="tags">
                  <a href="/blog-details" className="date">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                      alt=""
                    />{" "}
                    10/02/2024
                  </a>
                  <a href="/blog-details" className="date outhor">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/user.png"
                      alt=""
                    />{" "}
                    Ben Cutting
                  </a>
                </div>
                <h4>
                  <a href="/blog-details">
                    The Importance of Cybersecurity
                  </a>
                </h4>
                <div className="space16"></div>
                <p>
                  We explore the growing trend of remote work and its
                  implications for cybersecurity.
                </p>
                <div className="space16"></div>
                <a className="learn" href="/blog-details">
                  <Link to="/blog-details" style={{color:'darkslategray',paddingRight:'10px'}}>Read More </Link>
                  <span>
                    <i className="bi bi-arrow-right" ></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="blog2-box">
              <div className="image">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog2-img1.png"
                  alt=""
                />
              </div>
              <div className="heading1 card1">
                <div className="tags">
                  <a href="#" className="date">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                      alt=""
                    />{" "}
                    10/02/2024
                  </a>
                  <a href="#" className="date outhor">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/user.png"
                      alt=""
                    />{" "}
                    Ben Cutting
                  </a>
                </div>
                <h4>
                  <a href="/blog/blog-details">The Future of Cloud Computing</a>
                </h4>
                <div className="space16"></div>
                <p>
                  We take a deep dive into the future of cloud computing and
                  discuss emerging trends and predictions that the industry.
                </p>
                <div className="space16"></div>
                <a className="learn" href="/blog/blog-details">
                  <Link to="/blog-details" style={{color:'darkslategray',paddingRight:'10px'}}>Read More </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog2-box">
              <div className="image">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog2-img3.png"
                  alt=""
                />
              </div>
              <div className="heading1 card1">
                <div className="tags">
                  <a href="#" className="date">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                      alt=""
                    />{" "}
                    10/02/2024
                  </a>
                  <a href="#" className="date outhor">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/user.png"
                      alt=""
                    />{" "}
                    Ben Cutting
                  </a>
                </div>
                <h4>
                  <a href="/blog/blog-details">
                    Embracing Remote Collaboration Tools
                  </a>
                </h4>
                <div className="space16"></div>
                <p>
                  We explore the growing trend of remote work and its
                  implications for cybersecurity.
                </p>
                <div className="space16"></div>
                <a className="learn" href="/blog/blog-details">
                  <Link to="/blog-details" style={{color:'darkslategray',paddingRight:'10px'}}>Read More </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog2-box">
              <div className="image">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog2-img4.png"
                  alt=""
                />
              </div>
              <div className="heading1 card1">
                <div className="tags">
                  <a href="#" className="date">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                      alt=""
                    />{" "}
                    10/02/2024
                  </a>
                  <a href="#" className="date outhor">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/user.png"
                      alt=""
                    />{" "}
                    Ben Cutting
                  </a>
                </div>
                <h4>
                  <a href="/blog/blog-details">
                    Stay Up-to-Date With Technology
                  </a>
                </h4>
                <div className="space16"></div>
                <p>
                  We take a deep dive into the future of cloud computing and
                  discuss emerging trends and predictions that the industry.
                </p>
                <div className="space16"></div>
                <a className="learn" href="/blog/blog-details">
                  <Link to="/blog-details" style={{color:'darkslategray',paddingRight:'10px'}}>Read More </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog2-box">
              <div className="image">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog2-img5.png"
                  alt=""
                />
              </div>
              <div className="heading1 card1">
                <div className="tags">
                  <a href="#" className="date">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                      alt=""
                    />{" "}
                    10/02/2024
                  </a>
                  <a href="#" className="date outhor">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/user.png"
                      alt=""
                    />{" "}
                    Ben Cutting
                  </a>
                </div>
                <h4>
                  <a href="/blog/blog-details">
                    Discover How Organisations Like Yours..
                  </a>
                </h4>
                <div className="space16"></div>
                <p>
                  We explore the growing trend of remote work and its
                  implications for cybersecurity.
                </p>
                <div className="space16"></div>
                <a className="learn" href="/blog/blog-details">
                  <Link to="/blog-details" style={{color:'darkslategray',paddingRight:'10px'}}>Read More </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog2-box">
              <div className="image">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog2-img6.png"
                  alt=""
                />
              </div>
              <div className="heading1 card1">
                <div className="tags">
                  <a href="#" className="date">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                      alt=""
                    />{" "}
                    10/02/2024
                  </a>
                  <a href="#" className="date outhor">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/user.png"
                      alt=""
                    />{" "}
                    Ben Cutting
                  </a>
                </div>
                <h4>
                  <a href="/blog/blog-details">Protecting Sensitive Data</a>
                </h4>
                <div className="space16"></div>
                <p>
                  We take a deep dive into the future of cloud computing and
                  discuss emerging trends and predictions that the industry.
                </p>
                <div className="space16"></div>
                <a className="learn" href="/blog/blog-details">
                  <Link to="/blog-details" style={{color:'darkslategray' ,paddingRight:'10px'}}>Read More </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog2-box">
              <div className="image">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog2-img7.png"
                  alt=""
                />
              </div>
              <div className="heading1 card1">
                <div className="tags">
                  <a href="#" className="date">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                      alt=""
                    />{" "}
                    10/02/2024
                  </a>
                  <a href="#" className="date outhor">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/user.png"
                      alt=""
                    />{" "}
                    Ben Cutting
                  </a>
                </div>
                <h4>
                  <a href="/blog/blog-details">Preventing Cyber Attacks</a>
                </h4>
                <div className="space16"></div>
                <p>
                  We explore the growing trend of remote work and its
                  implications for cybersecurity.
                </p>
                <div className="space16"></div>
                <a className="learn" href="/blog/blog-details">
                  <Link to="/blog-details" style={{color:'darkslategray',paddingRight:'10px'}}>Read More </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog2-box">
              <div className="image">
                <img
                  src="https://techxen-react.vercel.app/assets/img/blog/blog2-img8.png"
                  alt=""
                />
              </div>
              <div className="heading1 card1">
                <div className="tags">
                  <a href="#" className="date">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                      alt=""
                    />{" "}
                    10/02/2024
                  </a>
                  <a href="#" className="date outhor">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/icons/user.png"
                      alt=""
                    />{" "}
                    Ben Cutting
                  </a>
                </div>
                <h4>
                  <a href="/blog/blog-details">
                    Maintaining Regulatory Compliance
                  </a>
                </h4>
                <div className="space16"></div>
                <p>
                  We take a deep dive into the future of cloud computing and
                  discuss emerging trends and predictions that the industry.
                </p>
                <div className="space16"></div>
                <a className="learn" href="/blog/blog-details">
                  <Link to="/blog-details" style={{color:'darkslategray' ,paddingRight:'10px'}}>Read More </Link>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
