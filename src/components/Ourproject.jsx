import React, { useRef } from "react";
import Slider from "react-slick";
import "../index-CNfx030l.css";
import "../App.css";

const Ourproject = () => {
    let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="project sp">
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
                  Our Project
                </span>
                <h2 className="title tg-element-title">
                  Driving Success Through Innovative IT Solution Project
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          <div className="project-slider cs_slider_gap_30">
            <div className="slick-slider slick-initialized" dir="ltr">
              <div className="slick-list">
                <div
                  className="slick-track  "
                >
                    <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="slick-slide slick-cloned" style={{ width: "432px" }} >
                    <div>
                      <div  className="single-slider"  style={{ width: "100%", display: "inline-block" }}>
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img1.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" style={{ width: "432px" }}>
                    <div>
                      <div className="single-slider" style={{ width: "100%", display: "inline-block" }}  >
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img2.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" style={{ width: "432px" }} >
                    <div>
                      <div className="single-slider" style={{ width: "100%", display: "inline-block" }} >
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img3.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" style={{ outline: "none", width: "432px" }}>
                    <div>
                      <div className="single-slider"  style={{ width: "100%", display: "inline-block" }} >
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img4.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" style={{ outline: "none", width: "432px" }}>
                    <div>
                      <div className="single-slider" style={{ width: "100%", display: "inline-block" }}  >
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img5.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide"  style={{ outline: "none", width: "432px" }}>
                    <div>
                      <div className="single-slider" style={{ width: "100%", display: "inline-block" }} >
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img6.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide"  style={{ outline: "none", width: "432px" }}>
                    <div>
                      <div className="single-slider" style={{ width: "100%", display: "inline-block" }}>
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img7.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div  className="slick-slide" style={{ outline: "none", width: "432px" }}>
                    <div>
                      <div className="single-slider"  style={{ width: "100%", display: "inline-block" }}>
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img8.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-active slick-current" style={{ outline: "none", width: "432px" }}>
                    <div>
                      <div className="single-slider"  style={{ width: "100%", display: "inline-block" }}>
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/others/project-page-img9.png"
                            alt=""
                          />
                        </div>
                        <div className="heading">
                          <h3>
                            <a href="/project/project-details">
                              Enterprise Resource Planning Implementation
                            </a>
                          </h3>
                          <a className="learn" href="/project/project-details">
                            Learn More{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                    </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourproject;
