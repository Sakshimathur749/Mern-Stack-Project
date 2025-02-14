import React from "react";
import "../index-CNfx030l.css";
import "../App.css"
import DevexaLogo from '../assets/Devexalogo.png'
import Phone from '../assets/Icon/icon-phone.png'
import Email from '../assets/Icon/icon-email.png'
import Website from '../assets/Icon/icon-website.png'
const Footer = () => {
  return (
    <div className="footer1 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo">
                <a href="/">
                  <img
                    src={DevexaLogo}
                    alt=""
                  />
                </a>
              </div>
              <div className="space20"></div>
              <div className="heading1">
                <p>
                  At Devexa IT Solutions, we are dedicated to delivering
                  innovative technology solutions tailored to meet the unique
                  needs of businesses like yours.{" "}
                </p>
              </div>
              <ul className="social-icon">
                <li>
                  <a >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a >
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a >
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a >
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
                  <a href="/services">Our Services</a>
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
                    src={Phone}
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
                    src={Email}
                    alt=""
                  />
                </div>
                <div className="pera">
                  <a href="mailto:info@devexa.solutions">info@devexa.solutions</a>
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img
                    src={Website}
                    alt=""
                  />
                </div>
                <div className="pera">
                  <a href="www.devexa.solutions">www.devexa.solutions</a>
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
                <p>Copyright @2024 Devexa.All Rights Reserved</p>
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
