import React , { useState } from 'react'
import "../index-CNfx030l.css";
import Image1 from '../assets/AttendanceImage1.png'
import Image2 from '../assets/AttendanceImage2.png'
import Image3 from '../assets/AttendanceImage3.png'
import Image4 from '../assets/AttendanceImage4.png'
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination , Autoplay , Navigation} from 'swiper/modules';

const DigtialAttendance = () => {
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
                  Digital Attendance System
                </span>
                <h2 className="title tg-element-title">
                  The Future of Attendance Management Is Digital
                </h2>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="700">
                  Transform your business's attendance management with our
                  professional Digital Attendance System. Designed specifically
                  for startups and small businesses, our system enables you to
                  track and manage attendance easily, accurately, and securely.
                  Whether you're a startup looking to streamline your HR
                  processes or a small business aiming to boost efficiency, our
                  solution offers an innovative and effective approach. With
                  just a few clicks, your team or employees can clock in, and
                  you can access real-time attendance data, track work hours,
                  and manage leaves, ensuring you're always on top of attendance
                  management.
                </p>
                <div className="space20"></div>
                <p data-aos="fade-right" data-aos-duration="700">
                  Our Digital Attendance System focuses on convenience,
                  accuracy, and security, making employee management and
                  attendance tracking seamless. Say goodbye to manual attendance
                  systems that are prone to errors and time-consuming processes,
                  and embrace a modern, automated solution. Affordable and
                  scalable, our system grows with your business, offering
                  flexibility and easy updates whenever needed. This tool is the
                  perfect way to enhance productivity, improve time tracking,
                  and make a lasting impact on your HR practices in the digital
                  age.
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
            <div className="col-lg-6">
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
                  {/* <div><a  onClick={togglePricing} className='theme-btn1' style={{padding:'8px'}}>Employee Attendance System</a></div> */}
                  <h2>Explore Our Flexible Pricing Plans</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <div className="single-pricing-box">
                <p className="title" style={{ fontWeight: "800" }}>
                  Basic{" "}
                </p>
                <div className="space30"></div>
                <h2>₹15,000</h2>
                <p className="pera">
                  Ideal for startups and small businesses looking to boost
                  online presence and customer engagement with a Employee
                  Attendance System.{" "}
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
                    All features from the Advanced plan
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      height={20}
                      width={20}
                      color="#0E38B1"
                    />{" "}
                    Seamless integration with HRMS and ERP systems for automated
                    data flow
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      height={20}
                      width={20}
                      color="#0E38B1"
                    />{" "}
                    Employee self-service portal for managing attendance and
                    leave requests
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      height={20}
                      width={20}
                      color="#0E38B1"
                    />{" "}
                    Automated generation of attendance reports, overtime
                    calculations
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      height={20}
                      width={20}
                      color="#0E38B1"
                    />{" "}
                    Mobile app for real-time attendance tracking, check-ins, and
                    leave applications
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      height={20}
                      width={20}
                      color="#0E38B1"
                    />{" "}
                    Advanced analytics and insights, offering managers a clear
                    view of employee attendance trends
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faXmark}
                      height={20}
                      width={20}
                      color="red"
                    />{" "}
                    Customizable leave policies and workflows for different
                    employee types
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faXmark}
                      height={20}
                      width={20}
                      color="red"
                    />{" "}
                    24/7 support & maintenance with dedicated account manager
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faXmark}
                      height={20}
                      width={20}
                      color="red"
                    />{" "}
                    Flexible shift scheduling, automated overtime tracking, and
                    custom reports
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

export default DigtialAttendance