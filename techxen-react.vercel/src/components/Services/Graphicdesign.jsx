import React, { useState } from "react";
import "../../index-CNfx030l.css";
import "../../App.css";
import Graphicdesigning from '../../assets/ServicesImage/Graphic-designing.png';
import { Col, Container } from "react-bootstrap";
const Graphicdesign = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is graphic designing?",
      answer:"Graphic designing involves creating visual content to communicate messages effectively. This includes designing logos, brochures, websites, advertisements, and social media visuals using tools like Adobe Photoshop, Illustrator, and other design software.",
    },
    {
      question: "How long does it take to complete a graphic design project?",
      answer:"The timeline for a graphic design project can vary based on its complexity and scope. Simple projects like logos may take a few days, while more complex projects such as branding or websites may take several weeks.",
    },
    {
      question: "What are the costs associated with graphic design services?",
      answer:"The cost of graphic design services varies depending on factors such as project complexity, the designer’s experience, and the type of service required. On average, it can range from $100 to $10,000 or more for larger projects like brand identity development.",
    },
    {
      question: "What should I provide to a graphic designer to start a project?",
      answer:"To begin a graphic design project, it's helpful to provide a clear brief outlining your goals, target audience, design preferences, brand guidelines, and any specific ideas or examples you have in mind for the design.",
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
                      src={Graphicdesigning}
                      alt=""
                      style={{ paddingBottom: "30px",height:"500px", width:"600px" }}
                    />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>A Premier Graphic Designing Company in Jodhpur</h2>
                    <div className="space16"></div>
                    <p>{" "}
                    We specialize in creating stunning visual designs that help businesses stand out in a crowded market. Our team of skilled designers works to craft unique and impactful designs that enhance brand identity, improve customer interaction, and ensure your message connects with your target audience. Whether it's logos, brochures, or digital marketing materials, we deliver high-quality, visually attractive designs that capture attention and create a memorable impression.
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
                        <h5> Our Graphic Designing Process</h5>
                        <div className="space16"></div>
                        <p> In today’s visual-first digital world, businesses need to stand out with outstanding design. We offer a comprehensive graphic design solution crafted to meet your brand's unique needs.</p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Requirement Gathering & Analysis:
                            </span>
                            Understanding your brand’s vision, goals, and target audience to create the perfect design strategy.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Feasibility Study:</span>
                            Analyzing the design concepts and evaluating their compatibility with your brand identity.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Design: </span>
                            Crafting visually eye-catching , user-centric designs that reflect your brand and connect with your audience.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Development:</span>
                            Turning design concepts into high-quality visual assets such as logos, marketing materials, and digital assets.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Testing:</span>
                            Reviewing and refining designs to ensure they are impactful, functional, and aligned with your brand.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Ongoing Maintenance:</span>
                            Providing ongoing design updates and support to keep your brand’s visual presence fresh and relevant.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space50"></div>
                    <div className="row">
                      <div className="heading1">
                        <h5>Our Graphic Designing Approach</h5>
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
                          Custom Features for Better User Interaction
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          We design with creativity and purpose, offering designs that captivate and encourage action:{" "}
                        </p>
                        <ol className="expart-list">
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Unique Layouts that grab attention and spark interest.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Mobile Optimization ensuring your designs are responsive and accessible on any device.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Integrated Branding ensuring all design elements are consistent and reinforce your brand’s identity.
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
                        <p style={{lineHeight:'26px',color: "#676879",fontSize: "16px",fontWeight: "300",}}>With mobile devices influencing a large portion of online collaboration, we ensure your designs are optimized for all screen sizes, providing a seamless and engaging experience across any device.</p>
                      </div>
                      <div className="col-lg-6">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}>
                        Cost-Effective Graphic Designing
                        </div>
                        <div className="space20"></div>
                        <p style={{lineHeight:'26px', color: "#676879", fontSize: "16px", fontWeight: "300",}}>As a trusted graphic design provider in Jodhpur, we deliver top-quality design services at competitive rates. We create visually appealing and professional designs that align with your business needs and budget.</p>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-8">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}>Technology Stack</div>
                        <div className="space20"></div>
                        <p style={{ color: "#676879", fontSize: "16px", fontWeight: "300", }}>{" "}
                        We leverage advanced tools and technologies to create high-quality, professional graphic designs:
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">Design Tools:</span>Adobe Photoshop, Illustrator,  Figma
                          </li>
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">Web & Digital:</span>  HTML5, CSS3, JavaScript, WordPress (for design implementation)
                          </li>
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">Print & Branding:</span> InDesign, Adobe Acrobat, Canva
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

export default Graphicdesign;