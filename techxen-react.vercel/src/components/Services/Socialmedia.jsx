import React, { useState } from "react";
import "../../index-CNfx030l.css";
import "../../App.css";
import { Col, Container } from "react-bootstrap";
import SocialMediaMarketing from '../../assets/ServicesImage/Social-Media.png';
const Socialmedia = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is social media marketing?",
      answer:"Social media marketing involves using platforms like Facebook, Instagram, Twitter, and LinkedIn to promote products, services, or brands. It helps increase brand awareness, engage with customers, and drive website traffic through organic or paid strategies.",
    },
    {
      question: "How long does it take to see results from social media marketing?",
      answer:"Results from social media marketing can take anywhere from 1 to 3 months to become noticeable, depending on the frequency of posts, audience engagement, and the effectiveness of the marketing strategy.",
    },
    {
      question: "Which social media platform is best for my business?",
      answer:"The best platform depends on your target audience and business type. For example, Instagram and Pinterest work well for visual products, LinkedIn is ideal for B2B services, and Facebook is great for community engagement across various demographics.",
    },
    {
      question: "How can I increase engagement on my social media pages?",
      answer:"To increase engagement, post consistently, use eye-catching visuals, respond to comments, run interactive polls or contests, and share valuable content. Additionally, leveraging hashtags and collaborating with influencers can boost visibility and engagement.",
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
                      src={SocialMediaMarketing}
                      alt=""
                      style={{ paddingBottom: "30px" ,height:"500px", width:"600px" }}
                    />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>A Premier Social Media Marketing Company in Jodhpur</h2>
                    <div className="space16"></div>
                    <p>
                      {" "}
                      We specialize in creating effective social media
                      strategies that help businesses grow their online presence
                      and engage with their target audience. Our team of
                      experienced professionals works to develop customized
                      social media strategies that boost brand awareness,
                      increase customer interaction, and drive results. Whether
                      it's Facebook, Instagram, LinkedIn, or Twitter, we deliver
                      high-impact content and strategies that elevate your
                      brand, encourage interaction, and turn followers into
                      loyal customers. Partner with us to build a strong,
                      engaging social media presence that drives growth and
                      success.
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
                        <h5> Our Social Media Marketing Process</h5>
                        <div className="space16"></div>
                        <p>In today’s dynamic digital world, businesses need to stay ahead by embracing innovative social media strategies. We offer a comprehensive social media marketing solution designed to meet your brand's unique needs.</p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Requirement Gathering & Analysis:
                            </span>
                            Understanding your brand’s goals and target audience to develop a personalized strategy.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Feasibility Study:</span>
                            Evaluating the potential of various social media platforms to determine the most effective channels.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Content Creation & Design: </span>
                            Crafting visually engaging and informative content that connects with your audience.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Strategy Implementation:</span>
                            Executing social media strategies that align with your objectives, ensuring maximum reach and visibility.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Testing & Optimization:</span>
                            Monitoring performance, adjusting strategies, and optimizing content for better results.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Ongoing Support & Reporting:</span>
                            Providing regular updates and insights to track growth and improve performance over time.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space50"></div>
                    <div className="row">
                      <div className="heading1">
                        <h5>Our Social Media Marketing Approach</h5>
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
                          Customized Features to Boost Audience Interaction
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          We create social media strategies with innovative techniques to enhance your brand visibility and achieve impactful results:{" "}
                        </p>
                        <ol className="expart-list">
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Engaging Content that captures attention and encourages user participation.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Platform-Specific Optimization ensuring your content is perfectly suited for each platform to maximize reach.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Targeted Paid Advertising to increase conversions and deliver a high return on investment.

                          </li>
                        </ol>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-6">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Optimized Content Strategy
                        </div>
                        <div className="space20"></div>
                        <p style={{color: "#676879",lineHeight:'26px',fontSize: "16px",fontWeight: "300",}}>With mobile devices driving the majority of social media activity, we ensure that your content is optimized for all devices, delivering a seamless and captivating experience across all platforms.</p>
                      </div>
                      <div className="col-lg-6">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}>
                        Affordable Social Media Marketing
                        </div>
                        <div className="space20"></div>
                        <p style={{ color: "#676879",lineHeight:'26px', fontSize: "16px", fontWeight: "300",}}> As a leading digital marketing provider in Jodhpur, we offer high-quality social media marketing services at competitive rates. We focus on creating strategies that are both effective and cost-efficient, helping you meet your business goals without overspending. </p>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-8">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}> Tools & Technologies </div>
                        <div className="space20"></div>
                        <p style={{ color: "#676879", fontSize: "16px", fontWeight: "300", }}>{" "}
                        We utilize the latest social media tools and analytics to ensure the success of your marketing efforts:
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">Content Creation Tools:</span>Canva, Adobe Spark, Photoshop
                          </li>
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">Analytics:</span> Google Analytics, Facebook Insights, Twitter Analytics
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

export default Socialmedia;