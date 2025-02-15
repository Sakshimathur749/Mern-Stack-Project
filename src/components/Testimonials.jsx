import React, { useState } from "react";
import "../index-CNfx030l.css";
import '../App.css';
import { Carousel } from "react-bootstrap";
import Icon from '../assets/icon.png'
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
                    src={Icon}
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
          <div className="tes1-slider mt-2">
          <Carousel  activeIndex={index} nextIcon={true} onSelect={handleSelect}>
          <Carousel.Item  >
            <div className="tes1-single-slider">
              <div className="row align-items-center justify-content-center gap-3">
                <div className="col-lg-5" style={{width:'46%',backgroundColor:'#fff',padding:'50px',borderRadius:'30px'}}>
                  <div className="right-side">
                    <p>
                    We are extremely pleased with the website developed for RajasthanSpices.com. The team not only delivered a visually stunning and user-friendly platform but also ensured that it meets all our business needs. Thanks to their expertise, we’ve seen a noticeable improvement in user engagement and sales. The experience was seamless, and we couldn’t be happier with the results!
                    </p>
                    <div className="bottom-area">
                      <div className="heading">
                        <h5>
                          <a>Ramesh Kumar</a>
                        </h5>
                        <p>CEO, Rajasthan Spices Supplier</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5" style={{width:'46%',backgroundColor:'#fff',padding:'50px',borderRadius:'30px'}}>
                  <div className="right-side">
                    <p>
                    We are extremely pleased with the website developed for LoanBuddha. The team provided an intuitive, easy-to-navigate platform that perfectly aligns with our goals. The seamless design, coupled with the enhanced functionality, has helped improve our user experience and streamline the loan application process. The results have been outstanding, and we are grateful for their expertise
                    </p>
                    <div className="bottom-area">
                      <div className="heading">
                        <h5>
                          <a>Sunil Gupta</a>
                        </h5>
                        <p>Co-Founder, LoanBuddha</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item  >
            <div className="tes1-single-slider">
              <div className="row align-items-center justify-content-center gap-3">
                <div className="col-lg-5" style={{width:'46%',backgroundColor:'#fff',padding:'50px',borderRadius:'30px'}}>
                  <div className="right-side">
                    <p>
                    We are extremely pleased with the website developed for RajasthanSpices.com. The team not only delivered a visually stunning and user-friendly platform but also ensured that it meets all our business needs. Thanks to their expertise, we’ve seen a noticeable improvement in user engagement and sales. The experience was seamless, and we couldn’t be happier with the results!
                    </p>
                    <div className="bottom-area">
                      <div className="heading">
                        <h5>
                          <a>Ramesh Kumar</a>
                        </h5>
                        <p>CEO, Rajasthan Spices Supplier</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5" style={{width:'46%',backgroundColor:'#fff',padding:'50px',borderRadius:'30px'}}>
                  <div className="right-side">
                    <p>
                    We are extremely pleased with the website developed for LoanBuddha. The team provided an intuitive, easy-to-navigate platform that perfectly aligns with our goals. The seamless design, coupled with the enhanced functionality, has helped improve our user experience and streamline the loan application process. The results have been outstanding, and we are grateful for their expertise
                    </p>
                    <div className="bottom-area">
                      <div className="heading">
                        <h5>
                          <a>Sunil Gupta</a>
                        </h5>
                        <p>Co-Founder, LoanBuddha</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item  >
            <div className="tes1-single-slider">
              <div className="row align-items-center justify-content-center gap-3">
                <div className="col-lg-5" style={{width:'46%',backgroundColor:'#fff',padding:'50px',borderRadius:'30px'}}>
                  <div className="right-side">
                    <p>
                    We are extremely pleased with the website developed for RajasthanSpices.com. The team not only delivered a visually stunning and user-friendly platform but also ensured that it meets all our business needs. Thanks to their expertise, we’ve seen a noticeable improvement in user engagement and sales. The experience was seamless, and we couldn’t be happier with the results!
                    </p>
                    <div className="bottom-area">
                      <div className="heading">
                        <h5>
                          <a>Ramesh Kumar</a>
                        </h5>
                        <p>CEO, Rajasthan Spices Supplier</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5" style={{width:'46%',backgroundColor:'#fff',padding:'50px',borderRadius:'30px'}}>
                  <div className="right-side">
                    <p>
                    We are extremely pleased with the website developed for LoanBuddha. The team provided an intuitive, easy-to-navigate platform that perfectly aligns with our goals. The seamless design, coupled with the enhanced functionality, has helped improve our user experience and streamline the loan application process. The results have been outstanding, and we are grateful for their expertise
                    </p>
                    <div className="bottom-area">
                      <div className="heading">
                        <h5>
                          <a>Sunil Gupta</a>
                        </h5>
                        <p>Co-Founder, LoanBuddha</p>
                      </div>
                    </div>
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