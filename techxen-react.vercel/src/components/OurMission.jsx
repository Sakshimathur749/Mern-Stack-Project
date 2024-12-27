import React from "react";
import "../index-CNfx030l.css";
import Image from '../assets/Image7.png'

const OurMission = () => {
  return (
    <div className="solution sp bg1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span">
                <img
                  src="https://techxen-react.vercel.app/assets/img/icons/span1.png"
                  alt=""
                />{" "}
                Our Mission
              </span>
              <h2>Transforming Businesses with Innovative IT Strategies</h2>
              <div className="space16"></div>
              <p>
                Our mission is to empower businesses with innovative, reliable
                IT solutions that drive growth and streamline operations. We are
                dedicated to enhancing digital presence and delivering impactful
                results through the latest technology and expert services.
              </p>
              <div className="space16"></div>
              <p>
              We focus on delivering solutions that exceed our clients'
                expectations. By prioritizing long-term success, we provide
                businesses with the strategies and support needed to grow,
                innovate, and thrive in a constantly changing digital landscape.
              </p>
              <div className="space30"></div>
              <div className="">
                <a className="theme-btn1" href="/getquotes">
                  Get A Quote{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="solution-images">
              <div className="image2 image-anime">
                <img
                  src={Image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
