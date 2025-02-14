import React, { useState } from "react";
import "../../index-CNfx030l.css";
import "../../App.css";
import WebsiteImage from '../../assets/ServicesImage/Web-Development.png'
import { Col, Container } from "react-bootstrap";
const Webdev = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is web development?",
      answer:"Web development involves building and maintaining websites and web applications. It includes tasks like website design, coding, content management, and database integration to create fully functional and user-friendly websites.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:"The timeline for web development depends on the complexity of the website. A simple website can take a few weeks, while more complex sites with custom features or e-commerce functionality can take several months to complete.",
    },
    {
      question: "How much does web development cost?",
      answer:"The cost of web development varies widely depending on the website’s size, design complexity, and required features. Basic websites may start at a few thousand dollars, while more advanced projects could cost tens of thousands of dollars.",
    },
    {
      question: "What technologies are used in web development?",
      answer:"Web development typically uses technologies such as HTML, CSS, JavaScript, and backend programming languages like PHP, Python. For dynamic sites, frameworks like React may also be used to improve functionality and performance.",
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
                      src={WebsiteImage}
                      alt="" className="pb-4"
                      style={{ height:"500px", width:"600px" }}
                    />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>Website Developnment</h2>
                    <div className="space16"></div>
                    <p>
                      {" "}
                      We specialize in crafting exceptional websites that help
                      businesses thrive in a digital-first world. Our team of
                      experienced designers and developers works to create
                      custom solutions that enhance user experience, increase
                      conversion rates, reduce bounce rates, and ensure fast,
                      mobile-friendly websites.
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
                        <h5>Our Web Development Process</h5>
                        <div className="space16"></div>
                        <p>
                          In today’s rapidly evolving digital landscape,
                          businesses need to stay ahead by embracing the latest
                          technologies. We offer a comprehensive web development
                          solution designed to meet your unique requirements.
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
                            audience to craft the ideal solution.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Feasibility Study:</span>
                            Evaluating the technical and functional feasibility
                            of the project.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Design:</span>
                            Creating responsive, engaging designs that reflect
                            your brand and enhance user interaction.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Development:</span>
                            Building secure, scalable, and optimized websites
                            using the latest technologies.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Testing:</span>
                            Thorough testing to ensure functionality,
                            user-friendliness, and a bug-free experience.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Ongoing Maintenance:</span>
                            Ongoing Maintenance: Regular updates and support to
                            ensure your website’s performance and security.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space50"></div>
                    <div className="row">
                      <div className="heading1">
                        <h5>Our Web Development Approach</h5>
                        <div className="space16"></div>
                      </div>
                      <div
                        className="col-lg-10 pt-3 pr-0 pb-0 pl-3"
                      >
                        <div
                          className="text fw-semibold"
                          style={{ fontSize: "20px" }}
                        >
                          Custom Features for Enhanced User Engagement
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          We design websites with advanced features that boost
                          user interaction and drive conversions:{" "}
                        </p>
                        <ol className="expart-list">
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Unique Layouts that captivate users and encourage
                            interaction.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Mobile Optimization ensuring your website is
                            accessible on any device for a broader audience.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Integrated Payment Gateways offering secure and easy
                            online transactions.
                          </li>
                        </ol>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-6">
                        <div
                          className="text fw-semibold"
                          style={{ fontSize: "20px" }}
                        >
                          Responsive Design
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            lineHeight:'26px',
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          With mobile devices driving over 60% of global web
                          traffic, we ensure your website is fully responsive,
                          providing a seamless and user-friendly experience
                          across all screen sizes, from mobile phones to
                          desktops.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="text fw-semibold"
                          style={{ fontSize: "20px" }}
                        >
                          Cost-Effective Web Development
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            lineHeight:'26px',
                            fontWeight: "300",
                          }}
                        >
                          As a leading IT solutions provider in Jodhpur, we
                          deliver top-quality web development services at
                          competitive rates. Backed by over 10 years of
                          experience, we create reliable and affordable
                          solutions that align with your business objectives.
                        </p>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-8">
                        <div
                          className="text fw-semibold"
                          style={{ fontSize: "20px"}}
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
                          We leverage advanced technologies to build secure,
                          scalable, and high-performance websites:
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Frontend:</span>HTML, CSS,
                            JavaScript, React, laravel
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Backend:</span> Node.js, PHP,
                            Next.js, Express.js
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Database:</span> MySQL,
                            MongoDB,
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

export default Webdev;