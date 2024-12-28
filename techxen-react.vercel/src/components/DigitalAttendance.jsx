import React , { useState } from 'react'
import "../index-CNfx030l.css";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCross, faXmark } from '@fortawesome/free-solid-svg-icons';

const DigtialAttendance = () => {
  const [showPricing, setShowPricing] = useState(true);
  const togglePricing = () => {
    setShowPricing(!showPricing);
  };
  return (
    <div className="pricing sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 heading1">
          <p>Transform your business's operations with our professional Employee Attendance System. Designed specifically for startups and small businesses, our system helps you easily track employee attendance, ensuring efficiency and accuracy. Enhance management by providing real-time data on working hours, leaves, and attendance trends. With a focus on convenience and professionalism, our Employee Attendance System streamlines workforce management, saving time and reducing errors. Affordable and scalable, it's the perfect tool to help your business improve productivity and maintain a smooth workflow.</p>
          </div>
        </div>
        <div className="space50"></div>
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <div>
                <span className="span">
                  <img src="https://techxen-react.vercel.app/assets/img/icons/span1.png" alt="" /> Our Pricing
                  Plan
                </span>
                 <div><a  onClick={togglePricing} className='theme-btn1' style={{padding:'8px'}}>Employee Attendance System</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        {showPricing && (
        <div className="row justify-content-center">
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1100">
            <div className="single-pricing-box">
              <p className="title" style={{fontWeight:'800'}}>Basic </p>
              <div className="space30"></div>
              <h2>₹15,000</h2>
              <p className="pera">
              Ideal for startups and small businesses looking to boost online presence and customer engagement with a Employee Attendance System.{" "}
              </p>
              <div className="border"></div>
              <h4>Featured Included:</h4>
              <ul className="list">
                <li><FontAwesomeIcon icon={faCheckCircle}  height={20} width={20} color='#0E38B1'/>{" "}5 page static website</li>
                <li><FontAwesomeIcon icon={faCheckCircle}  height={20} width={20} color='#0E38B1'/>{" "}Mobile friendly design</li>
                <li><FontAwesomeIcon icon={faCheckCircle}  height={20} width={20} color='#0E38B1'/>{" "}Basic contact form</li>
                <li><FontAwesomeIcon icon={faCheckCircle}  height={20} width={20} color='#0E38B1'/>{" "}Social media integration</li>
                <li><FontAwesomeIcon icon={faCheckCircle}  height={20} width={20} color='#0E38B1'/>{" "}Delivery time: 7 days</li>
                <li><FontAwesomeIcon icon={faXmark}  height={20} width={20} color='red'/>{" "}SEO friendly design</li>
                <li><FontAwesomeIcon icon={faXmark}  height={20} width={20} color='red'/>{" "}Analytics &amp; reporting</li>
                <li><FontAwesomeIcon icon={faXmark}  height={20} width={20} color='red'/>{" "}Email integration</li>
                <li><FontAwesomeIcon icon={faXmark}  height={20} width={20} color='red'/>{" "}Maintenance support </li>
              </ul>
              <div className="space30"></div>
              <div className="button" style={{textAlign:'center'}}>
                <a className="theme-btn1" style={{margin:'0px', display:'block'}} href="/">
                  Buy Now{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default DigtialAttendance