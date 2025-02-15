import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../App.css";
import "../index-CNfx030l.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeroImage from '../assets/Hero.png'
import HeroBgImage from '../assets/hero-bg.png'
import Icon from '../assets/icon.png'
const Main = () => {
  return (
    <section className="hero1"
      style={{
        backgroundImage:
          `url(${HeroBgImage})`,
      }}
    >
      <Container>
        <Row>
          <Col xs="5" className="align-self-center">
            <div className="main-headding">
              <span
                className="span"
                data-aos="zoom-in-left"
                data-aos-duration="700"
              >
                <img
                  src={Icon}
                  alt=""
                />{" "}
                 Devexa &amp; It Solution
              </span>
              <h1 className="title tg-element-title">
                Empowering Your Digital Future with Innovative{" "}
                <span className="after">IT Solutions</span>
              </h1>
              <div className="space16"></div>
              <p>
                Welcome to the future of IT solutions. We specialize in creating
                innovative websites, seamless mobile apps, and powerful
                eCommerce platforms. Our creative designs are flexible to engage
                and captivate your audience, driving your business forward.
                Let’s turn your vision into a digital experience that delivers
                real results.
              </p>
              <div className="space30"></div>
              <div className="buttons">
                <a className="theme-btn1" href="/contact">
                  Get Started Now{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </Col>
          <Col xs="7">
            <div className="hero1-all-images">
              <div className="image3 ">
              <Image src={HeroImage} alt="hero Image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
