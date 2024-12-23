import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import "../index-CNfx030l.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ItSolution = () => {
  return (
    <section className='work sp'>
      <Container>
        <Row className='align-items-center'>
          <Col xs='6'>
            <div className="heading1 ">
              <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                <img src="https://techxen-react.vercel.app/assets/img/icons/span1.png" alt="" />Best It Solution
              </span>
              <h2 className="title tg-element-title">Elevate your business with our comprehensive IT solutions</h2>
              <div style={{ height: '16px' }}></div>
              <p data-aos="fade-right" data-aos-duration="700">Transform your business with innovative solutions that enhance your digital presence and fuel growth. We combine creativity and technology to deliver customized platforms and global support for your unique needs.</p>
              <div className="single-items" data-aos="fade-right" data-aos-duration="700">
                <div>
                  <div className="icon"><img src="https://techxen-react.vercel.app/assets/img/icons/work-iocn1.png" alt="" /></div>
                </div>
                <div ><h4><a>Network Infrastructure Solutions</a></h4>
                  <div style={{ height: '10px' }}></div>
                  <p>Build a reliable and secure network infrastructure that supports your business operations enables seamless</p>
                </div>
              </div>
              <div className="single-items" data-aos="fade-right" data-aos-duration="700">
                <div >
                  <div className="icon"><img src="https://techxen-react.vercel.app/assets/img/icons/work-iocn2.png" alt="" /></div>
                </div>
                <div >
                  <h4><a>Managed It Services</a></h4>
                  <div style={{ height: '10px' }}></div>
                  <p>Focus on your core business activities while we take care of your IT needs with our managed IT services.</p>
                </div>
              </div>
              <div style={{ height: '26px' }}></div>
              <a className="theme-btn1" href="/about">Discover More <span><FontAwesomeIcon icon={faArrowRight} color='white'/></span></a>
            </div>
          </Col>
          <Col xs='6'>
            <div className="position-relative">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="image image-anime"><img src="https://techxen-react.vercel.app/assets/img/work/work-img1.png" alt="" /></div>
                  <div className="image image-anime"><img src="https://techxen-react.vercel.app/assets/img/work/work-img3.png" alt="" /></div>
                </div>
                <div className="col-md-6">
                  <div className="image image-anime"><img src="https://techxen-react.vercel.app/assets/img/work/work-img2.png" alt="" /></div>
                </div>
              </div>
              <img src="https://techxen-react.vercel.app/assets/img/bg/work-bg.png" alt="" className="bg-image shape-animaiton4" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ItSolution