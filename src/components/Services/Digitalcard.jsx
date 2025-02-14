import React, { useState } from "react";
import "../../index-CNfx030l.css";
import "../../App.css";
import DigitalCard from '../../assets/ServicesImage/Digital-card.png';
import { Col, Container } from "react-bootstrap";
const Digitalcard = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is a digital card service?",
      answer:"A digital card service allows businesses or individuals to create, manage, and use virtual cards for online purchases, subscriptions, and transactions without the need for a physical card.",
    },
    {
      question: "How do digital cards work?",
      answer:"Digital cards function by generating a unique card number linked to your account, which can be used for online payments, tracking, and managing spending, often with features like virtual limits or expiration dates.",
    },
    {
      question: "Are digital cards secure for online transactions?",
      answer:"Yes, digital cards offer enhanced security through features like encryption, one-time use numbers, and virtual card details that prevent fraud during online transactions.",
    },
    {
      question: "Can digital cards be used internationally?",
      answer:"Most digital cards can be used internationally for online purchases, but it depends on the card provider and whether the card supports cross-border transactions.",
    },
  ];
  return (
    <div className="service-details-area-all ">
      <div className="space50"></div>
      <Container fluid className="service-details">
        <div className="row">
          <Col lg="10" className=" m-auto">
            <div className="service-details-post">
              <article>
                <div className="details-post-area">
                  <div className="image">
                    <img
                      src={DigitalCard}
                      alt="" className="pb-4"
                      style={{ height:"500px", width:"600px" }}
                    />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>
                    A Premier Digital Card Service Provider in Jodhpur
                    </h2>
                    <div className="space16"></div>
                    <p>
                      {" "}
                      We specialize in creating innovative digital card solutions that enable businesses to enhance customer experiences and improve transactions. Our team of skilled professionals offers customized digital card services designed to meet your specific needs, ensuring seamless user experiences, high security, and instant access to digital cards. From virtual business cards to digital gift cards, we help you connect with your customers efficiently, boost interaction, and enhance brand loyalty with cutting-edge, secure, and user-friendly solutions.
                    </p>
                  </div>
                </div>
              </article>
              <div className="space50"></div>
              <article>
                <div className="details-post-area">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading1">
                        <h5> Our Digital Card Service Process</h5>
                        <div className="space16"></div>
                        <p>
                        In today’s digital age, businesses need to offer seamless and innovative solutions to stay ahead. We provide comprehensive digital card services designed to meet your specific needs and enhance your brand’s digital presence.
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                              Requirement Gathering & Analysis:
                            </span>
                            Understanding your business needs and target audience to design the perfect digital card solution.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Feasibility Study:
                            </span>
                            Evaluating the practicality of your digital card project, ensuring it aligns with your goals and user expectations.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Design:</span>
                            Crafting visually appealing and user-friendly digital card designs that reflect your brand identity and engage your audience.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Development:
                            </span>
                            Creating secure, scalable, and customized digital card solutions with the latest technology to ensure best performance.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                              Testing :
                            </span>
                            Thorough testing of digital cards to ensure functionality, security, and a smooth user experience.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Ongoing Maintenance:
                            </span>
                            Providing continuous updates and support to ensure your digital card service remains secure, effective, and up to date.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space50"></div>
                    <div className="row">
                      <div className="heading1">
                        <h5>Our Digital Card Service Approach</h5>
                        <div className="space16"></div>
                      </div>
                      <div
                        className="col-lg-10 pt-3 pr-0 pb-0 pl-3"
                      >
                        <div    className="text fw-semibold"
                        style={{ fontSize: "20px" }}
                        >
                          Custom Features for Enhanced User Interaction
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                            lineHeight:'26px',
                          }}
                        >
                          We design digital cards with advanced features to increase user interaction and conversions:{" "}
                        </p>
                        <ol className="expart-list">
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Personalized Designs that engage users and encourage interaction.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Mobile Optimization, ensuring your digital cards are accessible and optimized on any device for a broader audience.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Integrated Payment Options offering secure and smooth transaction experiences for users.
                          </li>
                        </ol>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-6">
                        <div    className="text fw-semibold"
                        style={{ fontSize: "20px" }}
                        >
                          Responsive Design
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                            lineHeight:'26px',
                          }}
                        >
                          With the majority of users accessing digital services from mobile devices, we ensure your digital card designs are fully responsive, offering a seamless and engaging experience across all screen sizes, from smartphones to desktops.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Cost-Effective Digital Card Solutions
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                            lineHeight:'26px',
                          }}
                        >
                          As a trusted provider in digital card services, we offer high-quality solutions at competitive rates. Our expert team is dedicated to creating reliable and affordable digital card services that align with your business goals and meet customer needs.
                        </p>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-10">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Technology Stack
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          {" "}
                          We leverage modern technologies to create scalable, secure, and high-performance digital card services:
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Frontend:
                            </span>
                            HTML, CSS, JavaScript, React
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Backend:
                            </span>{" "}
                            Node.js, PHP, Express.js
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Database:
                            </span>{" "}
                            MongoDB, MySQL
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <div className="faq-area-all sp">
                <div className="heading1">
                  <h5>Frequently Asked Question</h5>
                </div>
                <div className="space20"></div>
                <div
                  className="accordion accordion1 accordion-flush"
                  id="accordionFlushExample"
                >
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`accordion-item ${
                        openIndex === index ? "active" : ""
                      }`}
                    >
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className={`accordion-button ${
                            openIndex === index ? "" : "collapsed"
                          }`}
                          aria-expanded={openIndex === index ? "true" : "false"}
                          aria-controls={`flush-collapse${index}`}
                          onClick={() => handleToggle(index)}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      {openIndex === index && (
                        <div
                          id={`flush-collapse${index}`}
                          className={`accordion-collapse collapse ${
                            openIndex === index ? "show" : ""
                          }`}
                          aria-labelledby={`flush-heading${index}`}
                        >
                          <p className="accordion-body ">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Digitalcard;
