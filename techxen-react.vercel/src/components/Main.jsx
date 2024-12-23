import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../App.css";
import "../index-CNfx030l.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Main = () => {
  return (
    <section className="hero1"
      style={{
        backgroundImage:
          "url(https://techxen-react.vercel.app/assets/img/bg/hero1-bg.png)",
       
      }}
    >
      <Container>
        <Row>
          <Col xs="5" style={{ alignSelf: "center" }}>
            <div className="main-headding">
              <span
                className="span"
                data-aos="zoom-in-left"
                data-aos-duration="700"
              >
                <img
                  src="https://techxen-react.vercel.app/assets/img/icons/span1.png"
                  alt=""
                />{" "}
                TechXen Technology &amp; It Solution
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
                <span className="play-btn">
                  <span>
                    <i className="bi bi-play"></i>
                  </span>{" "}
                  Watch Demo Video
                </span>
              </div>
            </div>
          </Col>
          <Col xs="7" className="mb120">
            <div className="hero1-all-images">
              <div className="mainimage1">
                <Image
                  src="https://techxen-react.vercel.app/assets/img/hero/hero1-image1.png"
                  alt="Image 1"
                />
              </div>
              <div className="mainimage2">
                <Image
                  src="https://techxen-react.vercel.app/assets/img/hero/hero1-image2.png"
                  alt="Image 2"
                />
              </div>
              <div className="mainimage3 shape-animaiton3 prelative">
                <Image
                  src="https://techxen-react.vercel.app/assets/img/hero/hero1-image3.png"
                  alt="Image 3"
                />
              </div>
              <div className="mainimage4 shape-animaiton3 ">
                <Image
                  src="https://techxen-react.vercel.app/assets/img/hero/hero1-image4.png"
                  alt="Image 4"
                />
              </div>
              <div className="shape1">
                <Image
                  src="https://techxen-react.vercel.app/assets/img/shapes/header1-shape1.png"
                  alt="Shape 1"
                />
              </div>
              <div className="shape2">
                <Image
                  src="https://techxen-react.vercel.app/assets/img/shapes/header1-shape2.png"
                  alt="Shape 2"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
