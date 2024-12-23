import React from 'react'
import "../index-CNfx030l.css";
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const History = () => {
  return (
    <div className="solution about-solution ">
      <div className="space50"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 order-1 order-lg-2">
            <div className="heading1">
              <span className="span">
                <img
                  src="https://techxen-react.vercel.app/assets/img/icons/span1.png"
                  alt=""
                />{" "}
                About Us
              </span>
              <h2>Our Journey: Innovation at Every Step</h2>
              <div className="space16"></div>
              <p>
                From humble beginnings to becoming industry leaders, our journey
                has been shaped by our passion for technology and innovation. We
                started with a simple mission: to solve complex problems with
                customized IT solutions. Over the years, we've expanded our
                reach, constantly pushing the boundaries of what's possible.
                From launching our first groundbreaking product to becoming a
                global name in IT, we’ve made a lasting impact on businesses
                worldwide. Explore the milestones that define who we are and how
                we’ve led the charge in delivering cutting-edge solutions.
              </p>
              <div className="space30"></div>
              <div className="">
                <a className="theme-btn1">
                  Learn More {" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="images">
              <div className="row">
                <div className="col-lg-12">
                  <div className="image">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/about/visiton-img1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space50"></div>
    </div>
  );
}

export default History
