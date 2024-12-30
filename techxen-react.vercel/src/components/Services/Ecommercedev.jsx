import React, { useState } from "react";
import "../../index-CNfx030l.css";
import "../../App.css";
import EcommerceImage from '../../assets/ServicesImage/Ecommerce-Devlopment.png'
import { Col, Container } from "react-bootstrap";
const Ecommercedev = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is ecommerce development?",
      answer:"Ecommerce development involves creating and maintaining online stores or marketplaces, including designing the website, setting up payment gateways, integrating inventory systems, and ensuring the site is secure and user-friendly for customers.",
    },
    {
      question: "How long does it take to develop an ecommerce website?",
      answer:"The development time for an ecommerce website varies depending on the complexity and features required, but it typically takes between 2 to 6 months to complete, from initial planning to launch.",
    },
    {
      question: "How much does it cost to develop an ecommerce website?",
      answer:"The cost of ecommerce development can range from a few thousand to several hundred thousand dollars, depending on factors such as the platform (Shopify, WooCommerce, custom-built), design complexity, payment systems, and the size of the product catalog.",
    },
    {
      question: "What features should an ecommerce website have?",
      answer:"Key features of an ecommerce website include a user-friendly interface, secure payment options, responsive design for mobile, inventory management, product search functionality, customer reviews, and integration with shipping carriers for order tracking.",
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
                      src={EcommerceImage}
                      alt=""
                      style={{ paddingBottom: "30px",height:"500px", width:"600px" }}
                    />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>A Premier E-Commerce Development Company in Jodhpur</h2>
                    <div className="space16"></div>
                    <p>
                      {" "}
                      We specialize in building outstanding e-commerce platforms
                      that empower businesses to succeed in the digital
                      marketplace. Our team of skilled designers and developers
                      creates custom e-commerce solutions that enhance user
                      experience, streamline customer pathways, increase
                      conversion rates, and ensure fast, secure, and
                      mobile-friendly online stores.
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
                        <h5>Our E-Commerce Development Process</h5>
                        <div className="space16"></div>
                        <p>
                          In today’s competitive online market, businesses must
                          leverage advanced technologies to stay ahead. We offer
                          a comprehensive e-commerce development solution
                          designed to meet your specific business needs.
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                              Requirement Gathering & Analysis:
                            </span>
                            Understanding your business goals and target
                            audience to design the perfect e-commerce platform.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Feasibility Study:</span>
                            Evaluating the technical and functional practicality
                            of the e-commerce project.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Design:</span>
                            Creating responsive, visually appealing designs that
                            reflect your brand and optimize the shopping
                            experience.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Development:</span>
                            Building secure, scalable, and high-performance
                            e-commerce websites with the latest technologies.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Testing:</span>
                            Conducting thorough testing to ensure seamless
                            functionality, secure transactions, and a smooth
                            user experience.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Ongoing Maintenance:</span>
                            Providing continuous updates and support to ensure
                            your e-commerce platform remains secure, fast, and
                            fully functional.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space50"></div>
                    <div className="row">
                      <div className="heading1">
                        <h5>Our E-Commerce Development Approach</h5>
                        <div className="space16"></div>
                      </div>
                      <div
                        className="col-lg-10"
                        style={{ padding: "20px 0px 0px 20px" }}
                      >
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Custom Features for Enhanced customer interaction
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          We design e-commerce websites with advanced features
                          that boost user interaction and drive sales:{" "}
                        </p>
                        <ol className="expart-list">
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Unique Layouts that captivate shoppers and encourage
                            conversions.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Mobile Optimization ensuring your store is
                            accessible and functional on any device.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Integrated Payment Gateways providing secure,
                            seamless online transactions.
                          </li>
                        </ol>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-6">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
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
                          With mobile devices accounting for over 60% of global
                          e-commerce traffic, we ensure your online store is
                          fully responsive. This provides a smooth,
                          user-friendly shopping experience on any screen
                          size—from smartphones to desktops.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Cost-Effective E-Commerce Development
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
                          As a trusted e-commerce development provider in
                          Jodhpur, we deliver high-quality online store
                          solutions at competitive prices. With a deep
                          understanding of the industry and a focus on
                          innovation, we create reliable, scalable, and
                          affordable e-commerce platforms that align with your
                          business goals.
                        </p>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-8">
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
                          We use the latest technologies to build secure, scalable, and high-performance e-commerce platforms:
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Frontend:</span>HTML, CSS, JavaScript, React, laravel
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Backend:</span> Node.js, PHP, Next.js, Express.js
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Database:</span> MySQL, MongoDB,
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

export default Ecommercedev;