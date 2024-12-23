import React from "react";
import'../App.css';
import "../index-CNfx030l.css";
const PrincingPlan = () => {
  return (
    <div className="pricing sp">
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
                  Our Pricing Plan
                </span>
                <h2 className="title tg-element-title">
                  Explore Our Flexible Pricing Plans
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1100">
            <div className="single-pricing-box">
              <p className="title">Basic Plan</p>
              <h2>
                $9.9<span>/ month</span>
              </h2>
              <p className="pera">
                Ideal for startups and small businesses looking get started
                essential IT services.{" "}
              </p>
              <div className="border"></div>
              <h4>Featured Included:</h4>
              <ul className="list">
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Network Monitoring
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Helpdesk Support (Limited Hours)
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Basic Cybersecurity Protection
                </li>
              </ul>
              <div className="space30"></div>
              <div className="button2">
                <a className="theme-btn1" style={{width:'89%',textAlign:'center'}} href="/">
                  Buy Now{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1100">
            <div className="single-pricing-box active">
              <div className="most-popular">
                <p>Most Popular</p>
              </div>
              <p className="title">Standard Plan</p>
              <h2>
                $19.9<span>/ month</span>
              </h2>
              <p className="pera">
                Perfect for growing businesses that require additional features
                and support.{" "}
              </p>
              <div className="border"></div>
              <h4>Featured Included:</h4>
              <ul className="list">
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  24/7 Network Monitoring
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Dedicated Helpdesk Support
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Advance Cybersecurity Protection
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Cloud Backup &amp; Recovery
                </li>
              </ul>
              <div className="space30"></div>
              <div className="button2">
                <a className="theme-btn1" style={{width:'89%',textAlign:'center',backgroundColor:'#fff', color:'#0E38B1'}} href="/">
                  Buy Now{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1100">
            <div className="single-pricing-box">
              <p className="title">Premium Plan</p>
              <h2>
                $9.9<span>/ month</span>
              </h2>
              <p className="pera">
                Tailored for larger enterprises with complex IT needs and
                stringent security.{" "}
              </p>
              <div className="border"></div>
              <h4>Featured Included:</h4>
              <ul className="list">
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Customised Network Monitoring
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Priority Helpdesk Support
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Comprehensive Cybersecurity Suite
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Disaster Recovery Planning &amp; Testing
                </li>
                <li>
                  <span>
                    <i className="bi bi-check-lg"></i>
                  </span>{" "}
                  Onsite Support (as needed)
                </li>
              </ul>
              <div className="space30"></div>
              <div className="button2">
                <a className="theme-btn1" style={{width:'89%',textAlign:'center'}} href="/">
                  Buy Now{" "}
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

export default PrincingPlan;
