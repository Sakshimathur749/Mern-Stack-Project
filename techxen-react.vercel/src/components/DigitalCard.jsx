import React, { useState } from 'react'
import "../index-CNfx030l.css";
import "../App.css";
import Image1 from '../assets/DigitalCardImage1.png'
import Image2 from '../assets/DigitalCardImage2.png'
import Image3 from '../assets/DigitalCardImage3.png'
import Image4 from '../assets/DigitalCardImage4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination , Autoplay , Navigation} from 'swiper/modules';

const DigitalCard = () => {
    const [showPricing, setShowPricing] = useState(true);
    const togglePricing = () => {
      setShowPricing(!showPricing);
    };
    
  return (
    <div>
      <div className="work sp">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="col-lg-6">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img
                    src="https://techxen-react.vercel.app/assets/img/icons/span1.png"
                    alt=""
                  />
                  Digital card Service
                </span>
                <h2 className="title tg-element-title">
                  Smart and Sustainable Digital Business Cards
                </h2>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="700">
                  Transform your business's online presence with our
                  professional Digital Card service. Designed specifically for
                  startups and small businesses, our service enables you to
                  create an easy-to-share, highly professional digital card that
                  helps your business stand out in a competitive market. Whether
                  you're a startup looking to make an impactful first impression
                  or a small business aiming to streamline communication, our
                  service offers an innovative and effective solution. With just
                  a tap, your customers can access your contact details,
                  website, social media profiles, and other key business
                  information instantly, ensuring that you’re always within
                  reach.
                </p>
                <div className="space20"></div>
                <p data-aos="fade-right" data-aos-duration="700">
                  Our Digital Card service focuses on convenience, efficiency,
                  and professionalism, making networking and connecting with
                  potential clients seamless. Say goodbye to traditional paper
                  cards that can be easily lost or forgotten, and embrace a
                  modern, eco-friendly solution. Affordable and scalable, our
                  digital card service grows with your business needs, offering
                  flexibility and easy updates whenever you need them. This tool
                  is the perfect way to enhance customer engagement, build
                  stronger relationships, and make a lasting impression in the
                  digital world.
                </p>
              </div>
              <div className="space30"></div>
              <div className="" data-aos="fade-right" data-aos-duration="800">
                <a className="theme-btn1" href="/contact">
                  Discover More{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6" style={{ alignSelf: "center" }}>
              <div className="work-images">
                <div className="row align-items-center">
                  <div className="d-none d-lg-block" style={{flexWrap:'wrap' , }}>
                    <img src={Image1} alt="Image 1" style={{ width: "46%", margin:'20px 10px' }} />
                    <img src={Image2} alt="Image 2" style={{ width: "46%", margin:'20px 10px' }} />
                    <img src={Image3} alt="Image 3" style={{ width: "46%",  margin:'20px 10px' }} />
                    <img src={Image4} alt="Image 4" style={{ width: "46%",  margin:'20px 10px'}} />
                  </div>
                  <div className="d-block d-lg-none">
                    <Swiper
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                    type: "bullets",
                    el: ".custom-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active",
                      }} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Pagination,Autoplay, Navigation]}
                      className="mySwiper"
                      breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        480: { slidesPerView: 1, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                      }}
                    >
                      <SwiperSlide
                        style={{ alignSelf: "center", textAlign: "center" }}
                      >
                        <img src={Image1} />
                      </SwiperSlide>
                      <SwiperSlide
                        style={{ alignSelf: "center", textAlign: "center" }}
                      >
                        <img src={Image2} />
                      </SwiperSlide>
                      <SwiperSlide
                        style={{ alignSelf: "center", textAlign: "center" }}
                      >
                        <img src={Image3} />
                      </SwiperSlide>
                      <SwiperSlide
                        style={{ alignSelf: "center", textAlign: "center" }}
                      >
                        <img src={Image4} />
                      </SwiperSlide>
                    </Swiper>
                    <div
                  className="custom-pagination"
                  style={{ padding: "15px 0px" ,textAlign:'center' }}
                ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service pricing sp">
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
                  <h2>Explore Our Flexible Pricing Plans</h2>
                  {/* <div><a className='theme-btn1' onClick={togglePricing} style={{padding:'8px'}}>Digital Visiting Card</a></div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <div className="single-pricing-box">
                <p className="title">Basic </p>
                <div className="space30"></div>
                <h2>₹15,000</h2>
                <p className="pera">
                  Ideal for startups and small businesses looking to boost
                  online presence and customer engagement with a Digital Card
                  service.{" "}
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
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
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
                  Ideal for startups and small businesses looking to enhance
                  their online presence and customer engagement with a Advance
                  Digital Card service{" "}
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
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
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
    </div>
  );
}

export default DigitalCard