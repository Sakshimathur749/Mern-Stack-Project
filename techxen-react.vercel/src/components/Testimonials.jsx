import React, { useState } from "react";
import "../index-CNfx030l.css";
import '../App.css';
import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonial sp testimonial_area1">
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
                  Testimonials
                </span>
                <h2 className="title tg-element-title">
                  Discover What Our Clients Have <br /> To Say About Us
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row _relative">
          <div className="tes1-slider">
          <Carousel  activeIndex={index} nextIcon={true} onSelect={handleSelect}>
          <Carousel.Item  >
            <div className="tes1-single-slider">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="right-side">
                    <h4>What Our Clients Are Saying</h4>
                    <p>
                      The team at TechXen went above and beyond to understand our business needs and deliver a tailored IT solution that exceeded our expectations. Their expertise and dedication, and we couldn't be happier with the results.
                    </p>
                    <div className="bottom-area">
                      <div className="img">
                        <img
                          src="https://techxen-react.vercel.app/assets/img/testimonial/tes1-smoll-img.png"
                          alt=""
                        />
                      </div>
                      <div className="heading">
                        <h5>
                          <a>Kelly Williamson</a>
                        </h5>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="left-side">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/testimonial/tes1-big-img.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="tes1-single-slider">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="right-side">
                    <h4>What Our Clients Are Saying</h4>
                    <p>
                      The team at TechXen went above and beyond to understand our business needs and deliver a tailored IT solution that exceeded our expectations. Their expertise and dedication, and we couldn't be happier with the results.
                    </p>
                    <div className="bottom-area">
                      <div className="img">
                        <img
                          src="https://techxen-react.vercel.app/assets/img/testimonial/tes1-smoll-img.png"
                          alt=""
                        />
                      </div>
                      <div className="heading">
                        <h5>
                          <a>Kelly Williamson</a>
                        </h5>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="left-side">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/testimonial/tes1-big-img.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="tes1-single-slider">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="right-side">
                    <h4>What Our Clients Are Saying</h4>
                    <p>
                      The team at TechXen went above and beyond to understand our business needs and deliver a tailored IT solution that exceeded our expectations. Their expertise and dedication, and we couldn't be happier with the results.
                    </p>
                    <div className="bottom-area">
                      <div className="img">
                        <img
                          src="https://techxen-react.vercel.app/assets/img/testimonial/tes1-smoll-img.png"
                          alt=""
                        />
                      </div>
                      <div className="heading">
                        <h5>
                          <a>Kelly Williamson</a>
                        </h5>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="left-side">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/testimonial/tes1-big-img.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;