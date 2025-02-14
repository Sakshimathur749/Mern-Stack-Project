import React from 'react'
import "../index-CNfx030l.css";
import Image1 from '../assets/Icon/icon-DigitalCard.png'
import Image2 from '../assets/Icon/icon-system-information.png'

const Products = () => {
  return (
    <div className="service sp " style={{backgroundColor:'#ffff'}}>
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
                  Our Projects
                </span>
                <h2 className="title tg-element-title">We deliver customized IT solutions for client success.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-box">
              <div
                className="icon"
                style={{ height: "60px", width: "60px", lineHeight: "60px" }}
              >
                <img src={Image1} alt="" />
              </div>
              <div className="heading1">
                <h4>
                  <a
                    href="/products/Digital_Card" className='fw-semibold'
                    style={{ lineHeight: "21px" }}
                  >
                    Digital Visiting Card
                  </a>
                </h4>
                <div className="space16"></div>
                <p>
                  {" "}
                  The digital visiting card offers instant access to all details
                  with a tap. Seamlessly share and update information, making
                  networking more efficient.
                </p>
                <div className="space16"></div>
                <div className='text-end'>
                  <a
                    className="learn  ms-auto text-decoration-underline"
                    href="/products/Digital_Card"
                  >
                    Visit{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-box">
              <div
                className="icon"
                style={{ height: "60px", width: "60px", lineHeight: "60px" }}
              >
                <img src={Image2} alt="" />
              </div>
              <div className="heading1">
                <h4>
                  <a
                    href="/products/Digital_Attendance_System" className='fw-semibold'
                    style={{ lineHeight: "21px" }}
                  >
                    Employee attendance system
                  </a>
                </h4>
                <div className="space16"></div>
                <p>
                  {" "}
                  Manage employee attendance with real-time tracking, seamless
                  check-ins, and accurate reporting to streamline workflows and
                  boost productivity.
                </p>
                <div className="space16"></div>
                <div className='text-end'>
                  <a
                    href="/products/Digital_Attendance_System"
                    className="learn  ms-auto text-decoration-underline"
                  >
                    Visit{" "}
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

export default Products