import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MediaQuerie.css';
import "../index-CNfx030l.css";
import Icon1 from '../assets/Icon/icon-smm-50.png'
import Icon2 from '../assets/Icon/icon-Graphic-50.png'
import Icon3 from '../assets/Icon/icon-App-50.png'
import Icon4 from '../assets/Icon/icon-Ecom-50.png'
import Icon5 from '../assets/Icon/icon-Web-50.png'
import Icon from '../assets/icon.png'
const Services = () => {
    
    return (
        <div className="service  sp">
            <Container style={{ position: 'relative' }}>
                <Row  >
                    <Col xs='8' className='m-auto text-center'  >
                        <div className="heading1">
                            <div>
                                <span className="span">
                                    <img src={Icon} alt="" />
                                    Our Services
                                </span>
                                <h2 className="title tg-element-title">
                                    Empower Your Business With Our Comprehensive Technology &amp; IT Solutions
                                </h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div style={{ height: '30px' }}></div>
                <Row>
                    <Col xs='6'>
                    <div className="single-box">
                            <div className="icon">
                                <img src={Icon5} alt="" />
                            </div>
                            <div className="heading1">
                                <h4><a href="/service/Web-Development">Web Developnment</a></h4>
                                <div style={{ height: '16px' }}></div>
                                <p>Our web development services emphasize creating responsive, scalable, and secure websites. Using modern frameworks and best practices, we ensure your online presence is visually appealing and highly functional.</p>
                                <div style={{ height: '16px' }} ></div>
                                <a className="learn" href="/service/Web-Development">Learn More <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"></path></svg></span></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs='6'>
                    <div className="single-box">
                        <div className="icon"><img src={Icon3} alt=""/></div>
                            <div className="heading1">
                                <h4><a href="/service/App-Development">App Development </a></h4>
                                <div style={{ height: '16px' }}></div>
                                <p>We focus on developing intuitive and robust mobile applications for both iOS and Android. Our development team uses the latest technologies to ensure smooth performance and a captivating user experience.</p>
                                <div style={{ height: '16px' }} ></div>
                                <a className="learn" href="/service/App-Development">Learn More <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"></path></svg></span></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs='4'>
                        <div className="single-box">
                            <div className="icon">
                                <img src={Icon4} alt="" />
                            </div>
                            <div className="heading1">
                                <h4><a href="/service/E-commerce-Development">E-commerce Development</a></h4>
                                <div style={{ height: '16px' }}></div>
                                <p>Unlock the full potential of online sales with our comprehensive e-commerce solutions. We build secure, user-friendly e-commerce platforms integrated with payment gateways, inventory management, and marketing tools.</p>
                                <div style={{ height: '16px' }} ></div>
                                <a className="learn" href="/service/E-commerce-Development">Learn More <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"></path></svg></span></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs='4'>
                    <div className="single-box">
                            <div className="icon">
                                <img src={Icon2} alt="" />
                            </div>
                            <div className="heading1">
                                <h4><a href="/service/Graphic-Designing">Graphic Designing</a></h4>
                                <div style={{ height: '16px' }}></div>
                                <p>Make a lasting impression with eye-catching graphics and visuals. Our talented designers create custom logos, banners, infographics, and more to elevate your brand identity and enhance your digital marketing efforts.</p>
                                <div style={{ height: '16px' }} ></div>
                                <a className="learn" href="/service/Graphic-Designing">Learn More <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"></path></svg></span></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs='4'>
                    <div className="single-box">
                            <div className="icon">
                                <img src={Icon1} alt="" />
                            </div>
                            <div className="heading1">
                                <h4><a href="/service/Social-Media">Social Media Marketing</a></h4>
                                <div style={{ height: '16px' }}></div>
                                <p>Leverage the power of social media to connect with your audience and build your brand. Our social media marketing services include content creation, community management, and targeted advertising campaigns across all major platforms. </p>
                                <div style={{ height: '16px' }} ></div>
                                <a className="learn" href="/service/Social-Media">Learn More <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"></path></svg></span></a>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services