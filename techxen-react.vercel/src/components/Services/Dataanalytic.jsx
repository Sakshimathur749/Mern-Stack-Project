import React, { useState } from "react";
import "../../index-CNfx030l.css";
import '../MediaQuerie.css';
import "../../App.css";
import { Col, Container } from "react-bootstrap";
import DataAnlyatic from '../../assets/ServicesImage/Data-Analyst.png';
const Dataanalytic = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is data analytics?",
      answer:"Data analytics involves examining raw data to uncover patterns, trends, and insights that help businesses make informed decisions. It includes techniques like statistical analysis, data mining, and predictive modeling to turn data into actionable information.",
    },
    {
      question: "How does data analytics benefit businesses?",
      answer:"Data analytics helps businesses by providing insights that improve decision-making, optimize operations, identify new opportunities, and enhance customer experiences, leading to better overall performance and a competitive advantage.",
    },
    {
      question: "What types of data analytics are commonly used?",
      answer:"The main types of data analytics are descriptive (understanding past data), diagnostic (finding the cause of issues), predictive (forecasting future trends), and prescriptive (recommending actions based on data insights).",
    },
    {
      question: "How long does it take to see results from data analytics?",
      answer:"The time it takes to see results from data analytics depends on the complexity of the data and the objectives. Typically, it may take from a few weeks to a couple of months to gather insights and implement data-driven strategies effectively.",
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
                      src={DataAnlyatic}
                      alt=""
                      style={{ paddingBottom: "30px" ,height:"500px", width:"600px" }}
                    />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>
                    A Leading Data Analytics Service Provider in Jodhpur
                    </h2>
                    <div className="space16"></div>
                    <p>
                      {" "}
                      We specialize in delivering high-quality data analytics services designed to help you make informed decisions and gain valuable information about your business. Our team of experienced data analysts develops customized strategies to collect, process, and analyze data across various platforms. We focus on uncovering actionable findings, visualizing trends, and providing continuous optimization to ensure your business makes decisions that drive growth. Whether you're aiming to improve operational efficiency, enhance customer experience, or boost sales, our data analytics services help you unlock the potential of your data and achieve measurable results.
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
                        <h5> Our Data Analytics Process</h5>
                        <div className="space16"></div>
                        <p>
                        In today’s data-driven world, businesses need valuable analytics to make informed decisions and stay ahead. We offer a comprehensive data analytics solution customized to meet your business needs and drive actionable results.
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                              Requirement Gathering & Analysis:
                            </span>
                            Understanding your business objectives, performance indicators, and data sources to create an effective analytics strategy.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Feasibility Study:
                            </span>
                            Analyzing data collection methods, platforms, and tools to ensure alignment with your desired outcomes.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Data Collection & Preparation:</span>
                            Gathering and structuring data from various sources for accurate analysis and reporting.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Analysis & Findings:
                            </span>
                            Applying advanced analytics techniques to uncover meaningful trends, patterns, and insights to inform business decisions.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Monitoring & Optimization :
                            </span>
                            Continuously tracking data performance, analyzing findings, and refining processes for improved efficiency and outcomes.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Ongoing Maintenance & Reporting:
                            </span>
                            Providing regular updates, detailed reports, and adjustments to ensure continued success and actionable insights for ongoing growth.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space50"></div>
                    <div className="row">
                      <div className="heading1">
                        <h5>Our Data Analytics Approach</h5>
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
                          Custom Strategies for Better Results
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          We design data analytics strategies with precision and purpose, offering solutions that deliver meaningful findings and support decision-making:{" "}
                        </p>
                        <ol className="expart-list">
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Targeted Analysis that highlights key trends and patterns.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Mobile Optimization ensuring your data is accessible and actionable across all devices.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Integrated Reporting ensuring all data is aligned with your brand’s goals and performance indicators.
                          </li>
                        </ol>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-6">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Advanced Data Analytics Across Devices
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
                          We provide fully optimized data analytics solutions that adapt seamlessly to any device. Whether on mobile or desktop, our responsive designs ensure that you can access, analyze, and visualize your data effortlessly, enabling timely, informed decision-making from anywhere.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Cost-Effective Data Analytics Solutions
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
                          As a trusted data analytics service provider in Jodhpur, we deliver high-quality analytics services at competitive rates. We create valuable and actionable reports that align with your business goals and budget, helping you make informed decisions.
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
                          We leverage advanced tools and platforms to create data-driven insights that drive results:
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Analytics Tools:
                            </span>
                            Google Analytics, Tableau, Power BI, SAS
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Data Collection & Processing:
                            </span>{" "}
                            SQL, Python, Excel
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Reporting & Visualization:
                            </span>{" "}
                            Google Data Studio,  Excel
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

export default Dataanalytic;