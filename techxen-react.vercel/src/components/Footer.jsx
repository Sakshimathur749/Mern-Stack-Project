import React from "react";
import "../index-CNfx030l.css";

const 
Footer = () => {
  return (
    <div className="footer1 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo">
                <a href="">
                  <img
                    src="https://techxen-react.vercel.app/assets/img/logo/footer-logo1.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="space20"></div>
              <div className="heading1">
                <p>
                  At TechXen IT Solutions, we are dedicated to delivering
                  innovative technology solutions tailored to meet the unique
                  needs of businesses like yours.{" "}
                </p>
              </div>
              <ul className="social-icon">
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Service We Offer</h3>
              <ul className="menu-list">
                <li>
                  <a href="/service/Web-Development">
                  Web Development
                  </a>
                </li>
                <li>
                  <a href="/service/Digital-Card">
                  Digital Card Services
                  </a>
                </li>
                <li>
                  <a href="/service/E-commerce-Development">E-commerce Development</a>
                </li>
                <li>
                  <a href="/service/SEO">
                  SEO
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>
              <ul className="menu-list">
                <li>
                  <a href="/about">About Us </a>
                </li>
                <li>
                  <a href="/service">Our Services</a>
                </li>
                <li>
                  <a href="/blog">Blog &amp; News</a>
                </li>
                <li>
                  <a href="/career">Career</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>
              <div className="contact-box">
                <div className="icon">
                  <img
                    src="https://techxen-react.vercel.app/assets/img/icons/footer1-icon2.png"
                    alt=""
                  />
                </div>
                <div className="pera">
                  <a href="/contact">+91 86907 31436</a>
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img
                    src="https://techxen-react.vercel.app/assets/img/icons/footer1-icon3.png"
                    alt=""
                  />
                </div>
                <div className="pera">
                  <a href="mailto:admin@techxen.org">admin@techxen.org</a>
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img
                    src="https://techxen-react.vercel.app/assets/img/icons/footer1-icon4.png"
                    alt=""
                  />
                </div>
                <div className="pera">
                  <a href="mailto:admin@techxen.org">www.techxen.org</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space40"></div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>Copyright @2024 TechXen.All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                <a href="/terms_and_condition">Terms &amp; Conditions</a>
                <a href="/privacy_policy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
