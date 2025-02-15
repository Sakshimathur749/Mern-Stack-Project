import React from "react";
import "../index-CNfx030l.css";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image1 from '../assets/Image6.png'
import Icon from '../assets/icon.png'
const OurService = () => {
  return (
    <div className="about2 about-page-sec sp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6  order-2 order-lg-1">
            <div className="about2-images">
              <div className="image2 image-anime">
                <img
                  src={Image1}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 details-post-area order-1 order-lg-2">
            <div className="heading1">
              <span
                className="span"
                data-aos="zoom-in-left"
                data-aos-duration="700"
              >
                <img
                  src={Icon}
                  alt=""
                />{" "}
                Our Service
              </span>
              <h2 className="title tg-element-title">
                Empower Your Business With Our Comprehensive IT Solutions
              </h2>
              <div className="space16"></div>
              <p data-aos="fade-up-left" data-aos-duration="700">
                We offer innovative IT solutions that help grow your business
                and strengthen your digital presence. Our services improve
                efficiency, simplify operations, and deliver results. Partner
                with us to keep your business ahead in today’s fast-moving
                digital world.
              </p>
              <div className="heading1">
                <ul
                  className="expart-list"
                >
                  <li >
                    <FontAwesomeIcon icon={faCircleCheck} color="blue" />{" "}
                    <span className="text">Innovative IT Solutions:</span> Boosting efficiency and driving growth.
                  </li>
                  <li >
                    <FontAwesomeIcon icon={faCircleCheck} color="blue" />{" "}
                    <span className="text">Wide-Ranging Services:</span> Specializing in web development, SEO, e-commerce, and more.
                  </li>
                  <li >
                    <FontAwesomeIcon icon={faCircleCheck} color="blue" /> {''}
                    <span className="text">Business Growth:</span> Enhancing online presence and maximizing business potential.
                  </li>
                </ul>
              </div>
              <div className="space30"></div>
              <div
                className="button"
                data-aos="fade-up-left"
                data-aos-duration="800"
              >
                <a className="theme-btn1" href="/getquotes">
                  Get A Quote{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
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

export default OurService;