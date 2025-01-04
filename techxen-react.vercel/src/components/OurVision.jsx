import React from "react";
import "../index-CNfx030l.css";
import Icon1 from '../assets/Icon/icon-network.png'
import Icon2 from '../assets/Icon/icon-it-service.png'
import Image from '../assets/Image8.png'
const OurVision = () => {
  return (
    <div className="solution about-solution sp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="images">
              <div className="row">
                <div className="col-lg-12">
                  <div className="image image-anime">
                    <img
                      src={Image}
                      alt=""
                    />
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="heading1">
              <span className="span">
                <img
                  src="https://techxen-react.vercel.app/assets/img/icons/span1.png"
                  alt=""
                />{" "}
                Our Vision
              </span>
              <h2>Driving Innovation: Our Vision at TechXen</h2>
              <div className="space16"></div>
              <p>
                At TechXen, our vision is to be the leading force driving
                digital transformation and innovation worldwide. We envision a
                future where businesses of all sizes have the tools and
                expertise they need to thrive in an increasingly digital world.
              </p>
              <div className="item-box">
                <div className="icon">
                  <img
                      src={Icon1}
                      alt=""
                    />
                </div>
                <div className="">
                  <h3>
                    <a>Network Infrastructure Solutions</a>
                  </h3>
                  <div className="space10"></div>
                  <p>
                    Build a reliable and secure network infrastructure that{" "}
                    <br /> supports your business operations enables seamless
                  </p>
                </div>
              </div>
              <div className="item-box">
                <div className="icon">
                    <img
                      src={Icon2}
                      alt=""
                    />
                </div>
                <div className="">
                  <h3>
                    <a>Managed It Services</a>
                  </h3>
                  <div className="space10"></div>
                  <p>
                    Focus on your core business activities while we take <br />{" "}
                    care of your IT needs with our managed IT services.
                  </p>
                </div>
              </div>
              <div className="space30"></div>
              <div className="">
                <a className="theme-btn1" href="/contact">
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

export default OurVision;
