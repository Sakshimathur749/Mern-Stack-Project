import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import "../index-CNfx030l.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Icon1 from '../assets/Icon/icon-wifi.png'
import Icon2 from '../assets/Icon/icon-cloud.png'
import Image1 from '../assets/Image2.png'
import Image2 from '../assets/Image3.png'
import Image3 from '../assets/Image4.png'
import Image4 from '../assets/Image5.png'
import Icon from '../assets/icon.png'
const ItSolution = () => {
  return (
    <section className='work sp'>
      <Container>
        <Row className='align-items-center'>
          <Col xs='6'>
            <div className="heading1 ">
              <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                <img src={Icon} alt="" />Best It Solution
              </span>
              <h2 className="title tg-element-title">Elevate your business with our comprehensive IT solutions</h2>
              <div className="h16"></div>
              <p data-aos="fade-right" data-aos-duration="700">Transform your business with innovative solutions that enhance your digital presence and fuel growth. We combine creativity and technology to deliver customized platforms and global support for your unique needs.</p>
              <div className="single-items" data-aos="fade-right" data-aos-duration="700">
                <div>
                  <div className="icon"><img src={Icon1} alt="" /></div>
                </div>
                <div ><h4><a>Network Infrastructure Solutions</a></h4>
                  <div className="h10"></div>
                  <p>Build a reliable and secure network infrastructure that supports your business operations enables seamless</p>
                </div>
              </div>
              <div className="single-items" data-aos="fade-right" data-aos-duration="700">
                <div >
                  <div className="icon"><img src={Icon2} alt="" /></div>
                </div>
                <div >
                  <h4><a>Managed It Services</a></h4>
                  <div className="h10"></div>
                  <p>Focus on your core business activities while we take care of your IT needs with our managed IT services.</p>
                </div>
              </div>
              <div className='h26'></div>
              <a className="theme-btn1" href="/about">Discover More <span><FontAwesomeIcon icon={faArrowRight} color='white'/></span></a>
            </div>
          </Col>
          <Col xs='6'>
            <div className="position-relative">
              <div className="row align-items-center">
                <div className="col-md-6 flex flex-column gap-4">
                  <div className="image image-anime"><img src={Image1} alt="" /></div>
                  <div className="image image-anime"><img src={Image2} alt="" /></div>
                </div>
                <div className="col-md-6">
                  <div className="image image-anime"><img src={Image3} alt="" /></div>
                </div>
              </div>
              <img src={Image4} alt="" className="bg-image shape-animaiton4" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ItSolution