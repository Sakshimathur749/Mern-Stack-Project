import React, { useState } from 'react'
import "../index-CNfx030l.css";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCross, faXmark } from '@fortawesome/free-solid-svg-icons';

const DigitalCard = () => {
    const [showPricing, setShowPricing] = useState(true);
    const togglePricing = () => {
      setShowPricing(!showPricing);
    };
  return (
    <div className="pricing sp">
      <div className="container">
        <div className="row" style={{ display: "flex", flexDirection: "row" }}>
          <div class="col-lg-6">
            <div class="heading1">
              <span
                class="span"
                data-aos="zoom-in-left"
                data-aos-duration="700"
              >
                <img
                  src="https://techxen-react.vercel.app/assets/img/icons/span1.png"
                  alt=""
                />
                Digital card Service
              </span>
              <h2 class="title tg-element-title">
              Smart and Sustainable Digital Business Cards
              </h2>
              <div class="space16"></div>
              <p data-aos="fade-right" data-aos-duration="700">
                Transform your business's online presence with our professional
                Digital Card service. Designed specifically for startups and
                small businesses, our service helps you create an easy-to-share,
                professional digital card that ensures you stand out. Enhance
                customer engagement by providing instant access to your contact
                details, social media, and other key information. With a focus
                on convenience and professionalism, our Digital Card service
                makes networking and connecting with potential clients seamless.
                Affordable and scalable, it's the perfect tool to help your
                business grow and make a lasting impression.
              </p>
            </div>
            <div class="space30"></div>
            <div class="" data-aos="fade-right" data-aos-duration="800">
              <a class="theme-btn1" href="/contact">
                Discover More{" "}
                <span>
                  <i class="bi bi-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6" style={{justifyItems:'center'}}>
            <div className=" project-slider cs_slider_gap_30">
              <div className="slick-slider slick-initialized">
                <div className="slick-list">
                  <div
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "468px" }}
                  >
                    <div>
                      <div
                        className="single-slider"
                        tabIndex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="slider-img">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/work/project-img2.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space50"></div>
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
                <h2>Explore Our Flexible Pricing Plans</h2>
                {/* <div><a className='theme-btn1' onClick={togglePricing} style={{padding:'8px'}}>Digital Visiting Card</a></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1100">
            <div className="single-pricing-box">
              <p className="title">Basic </p>
              <div className="space30"></div>
              <h2>₹15,000</h2>
              <p className="pera">
                Ideal for startups and small businesses looking to boost online
                presence and customer engagement with a Digital Card service.{" "}
              </p>
              <div className="border"></div>
              <h4>Featured Included:</h4>
              <ul className="list">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Personalized digital visiting card design
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Name, business details, and contact information
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Social media links (up to 3 platforms)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Enquiry form integration
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Downloadable PDF version
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Delivery time: 2-3 days
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Product/service listing (up to 10 items)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  WhatsApp direct chat button
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  FAQ section for common queries
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Custom theme and branding colors
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Analytics for clicks and inquiries
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Unlimited product/service listing
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Interactive enquiry form with email notification
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Embedded map location (Google Maps)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Image gallery or product showcase (up to 10 images)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Advanced design customization
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Free 1-month update support
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Annual Maintenance & Updates
                </li>
              </ul>
              <div className="space30"></div>
              <div className="button" style={{ textAlign: "center" }}>
                <a
                  className="theme-btn1"
                  style={{ margin: "0px", display: "block" }}
                  href="/"
                >
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
              <p className="title">Advance </p>
              <div className="space30"></div>
              <p
                className="pera"
                style={{ paddingBottom: "0px", lineHeight: "0px" }}
              >
                Starting form
              </p>
              <h2 style={{ marginTop: "15px" }}>₹25,000</h2>
              <p className="pera">
                Ideal for startups and small businesses looking to enhance their
                online presence and customer engagement with a Advance Digital
                Card service{" "}
              </p>
              <div className="border"></div>
              <h4>Featured Included:</h4>
              <ul className="list">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Personalized digital visiting card design
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Name, business details, and contact information
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Social media links (up to 3 platforms)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Enquiry form integration
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Downloadable PDF version
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Product/service listing (up to 10 items)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  WhatsApp direct chat button
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  FAQ section for common queries
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Custom theme and branding colors
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Analytics for clicks and inquiries
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Delivery time: 3-5 days
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Unlimited product/service listing
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Interactive enquiry form with email notification
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Embedded map location (Google Maps)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Image gallery or product showcase (up to 10 images)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Advanced design customization
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Free 1-month update support
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXmark}
                    height={20}
                    width={20}
                    color="red"
                  />{" "}
                  Annual Maintenance & Updates
                </li>
              </ul>
              <div className="space30"></div>
              <div className="button" style={{ textAlign: "center" }}>
                <a
                  className="theme-btn1"
                  style={{ margin: "0px", display: "block" }}
                  href="/"
                >
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
              <p className="title">Premium </p>
              <div className="space30"></div>
              <p
                className="pera"
                style={{ paddingBottom: "0px", lineHeight: "0px" }}
              >
                Starting form
              </p>
              <h2 style={{ marginTop: "15px" }}>₹30,000</h2>
              <p className="pera">
                Ideal for startups and small businesses aiming to boost online
                presence and customer engagement with a professional Digital
                Card service.{" "}
              </p>
              <div className="border"></div>
              <h4>Featured Included:</h4>
              <ul className="list">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Personalized digital visiting card design
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Name, business details, and contact information
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Social media links (up to 3 platforms)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Enquiry form integration
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Downloadable PDF version
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Product/service listing (up to 10 items)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  WhatsApp direct chat button
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  FAQ section for common queries
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Custom theme and branding colors
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Analytics for clicks and inquiries
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Delivery time: 5-7 days
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Unlimited product/service listing
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Interactive enquiry form with email notification
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Embedded map location (Google Maps)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Image gallery or product showcase (up to 10 images)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Advanced design customization
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Free 1-month update support
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    height={20}
                    width={20}
                    color="#0E38B1"
                  />{" "}
                  Annual Maintenance & Updates
                </li>
              </ul>
              <div className="space30"></div>
              <div className="button" style={{ textAlign: "center" }}>
                <a
                  className="theme-btn1"
                  style={{ margin: "0px", display: "block" }}
                  href="/"
                >
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
}

export default DigitalCard