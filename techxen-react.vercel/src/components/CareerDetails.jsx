import React from "react";
import "../index-CNfx030l.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CareerDetails = () => {
  return (
    <div className="sp servcie2 service-page-sec">
      <Container>
        <Row>
          <div className="heading1">
            <h2 style={{fontSize:'45px'}}>Come To Join Our Experienced Team</h2>
            <div className="space16"></div>
            <p>
              Adiyogi Technosoft helps you to get a job in your matching career.
              We offer relevant and skillful opportunities to be part of
              Jodhpur’s leading company. We also ensure about healthy and the
              best possible work environment for our people.
            </p>
          </div>
        </Row>
        <div className="space50"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <Link to='/service/Web-Development'><div className="">
                <div className="servcie2-box">
                  <div className="icon" style={{margin: '10px auto',justifyItems:'center',alignContent:'center',width: '70px',height:'60px',backgroundColor: 'white',padding:'4px'}}>
                    <img
                      src="https://techxen-react.vercel.app/assets/img/logo/header-logo1.png"
                      alt="" 
                    />
                  </div>
                  <a className="arrow">
                    <Link to="/service/Web-Development">
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </a>
                  <div className="heading1">
                    <h4 style={{textAlign:'center'}}>
                      <a href="/service/Web-Development">Web Developnment</a>
                    </h4>
                    <div className="space16"></div>
                    <p style={{textAlign:'center'}}>
                      Job Type: Full Time <br/> Opening Date : 18-12-24
                    </p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to='/service/App-Development'>
              <div className="">
                <div className="servcie2-box">
                  <div className="icon" style={{margin: '10px auto',justifyItems:'center',alignContent:'center',width: '70px',height:'60px',backgroundColor: 'white',padding:'4px'}}>
                    <img
                      src="https://techxen-react.vercel.app/assets/img/logo/header-logo1.png"
                      alt="" 
                    />
                  </div>
                  <a className="arrow">
                    <Link to="/service/App-Development">
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </a>
                  <div className="heading1">
                    <h4 style={{textAlign:'center'}}>
                      <a href="/service/App-Development">App Developnment</a>
                    </h4>
                    <div className="space16"></div>
                    <p style={{textAlign:'center'}}>
                      Job Type: Full Time <br/> Opening Date : 18-12-24
                    </p>
                  </div>
                </div>
              </div></Link>
              
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to='/service/SEO'>
              <div className="">
                <div className="servcie2-box">
                  <div className="icon" style={{margin: '10px auto',justifyItems:'center',alignContent:'center',width: '70px',height:'60px',backgroundColor: 'white',padding:'4px'}}>
                    <img
                      src="https://techxen-react.vercel.app/assets/img/logo/header-logo1.png"
                      alt="" 
                    />
                  </div>
                  <a className="arrow">
                    <Link to="/service/SEO">
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </a>
                  <div className="heading1">
                    <h4 style={{textAlign:'center'}}>
                      <a href="/service/SEO">SEO</a>
                    </h4>
                    <div className="space16"></div>
                    <p style={{textAlign:'center'}}>
                      Job Type: Full Time <br/> Opening Date : 18-12-24
                    </p>
                  </div>
                </div>
              </div></Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareerDetails;
