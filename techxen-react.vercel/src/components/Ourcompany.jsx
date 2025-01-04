import React from 'react'
import { Button, Col, Container, FormCheck, Image, Row } from 'react-bootstrap'
import '../App.css'
import './MediaQuerie.css';
import "../index-CNfx030l.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import OurCompanyImage from '../assets/Image1.png'


const Ourcompany = () => {
    return (
        <section className="about1 sp">
            <Container>
                <Row >
                    <Col xs='6' className='justify-align-center'>
                        <div className="about-image ">
                            {/* <div className="image-1">
                                <img src="https://techxen-react.vercel.app/assets/img/about/about1-img1.png" alt="" />
                            </div>
                            <div className="image-2 image-anime">
                                <img src="https://techxen-react.vercel.app/assets/img/about/about1-img2.png" alt="" />
                            </div> */}
                            <div >
                                <img src={OurCompanyImage} style={{marginTop:'80px'}} alt=""/>
                            </div>
                            {/* <div className="icon-box">
                                <img src="https://techxen-react.vercel.app/assets/img/icons/about1-shape-icon.png" alt="" />
                                <h4>24/7 Support</h4>
                                <p>TechXen Technology &amp; It Solution</p>
                            </div> */}
                        </div>
                    </Col>
                    <Col xs="6" style={{paddingRight:'0px'}}>
                       <div className="heading1">
                       <span
                            className="span"
                            data-aos="zoom-in-left"
                            data-aos-duration="700"
                        >
                            <Image src="https://techxen-react.vercel.app/assets/img/icons/span1.png" alt="" fluid />
                            About Our Company
                        </span>
                        <h2 className="title tg-element-title">
                        Our Visionary Solutions for a Digital Future
                        </h2>
                        <div className="space16"></div>
                        <p>
                        At our company, we specialize in transforming your ideas into reality through a comprehensive suite of services that includes app development, website development, and e-commerce solutions. We also offer innovative digital card services, seamless Amazon domestic and international support, eye-catching graphic design, and effective SEO strategies to enhance your online presence.
                        </p>
                        <ul className="list" data-aos="fade-left" data-aos-duration="1100" >
                            <li><FontAwesomeIcon icon={faCircleCheck} color='blue'/> Customized app and website development to meet your unique business needs.</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} color='blue'/> E-commerce solutions to help you thrive in the digital marketplace.</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} color='blue'/> Full suite of services including digital cards, Amazon support, graphic design, and SEO optimization.</li>
                        </ul>
                        <a className="theme-btn1" href="/about">Discover More <span><FontAwesomeIcon icon={faArrowRight} color='white'/></span></a>
                       </div>
                    </Col>
                </Row>
        </Container>
        </section>
    )
}

export default Ourcompany