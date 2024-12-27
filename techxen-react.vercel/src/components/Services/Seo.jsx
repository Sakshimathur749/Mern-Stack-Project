import React, { useState } from "react";
import "../../index-CNfx030l.css";
import SEO from '../../assets/ServicesImage/SEO.png';
import { Col, Container } from "react-bootstrap";
const Seo = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is SEO and why is it important?",
      answer:"SEO is the practice of optimizing your website to rank higher in search engine results. It improves visibility, attracts organic traffic, and enhances the user experience, ultimately helping businesses reach more potential customers.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:"SEO is a long-term strategy, and it can take anywhere from 3 to 6 months to see significant improvements in rankings, traffic, and overall performance, depending on the competition and the effectiveness of the optimization efforts.",
    },
    {
      question: "What are on-page and off-page SEO?",
      answer:"On-page SEO refers to optimizing elements within your website, such as content, keywords, meta tags, and page structure. Off-page SEO focuses on external factors like backlinks, social media presence, and domain authority that help improve search rankings.",
    },
    {
      question: "How can I improve my website's SEO?",
      answer:"To improve SEO, focus on creating high-quality, relevant content, optimizing page titles and descriptions, ensuring your site is mobile-friendly, speeding up page load times, and building reputable backlinks to increase authority and trust.",
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
                      src={SEO}
                      alt=""
                      style={{ paddingBottom: "30px" }}
                    />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>A Premier SEO Service Provider in Jodhpur</h2>
                    <div className="space16"></div>
                    <p>{" "}
                      We specialize in delivering exceptional SEO services that help businesses achieve high visibility in search engine results and drive organic traffic. Our team of skilled SEO experts creates customized strategies that enhance website rankings, improve search engine optimization, increase site traffic, and ensure a user-friendly, mobile-optimized experience. With a focus on both on-page and off-page SEO, we help businesses stand out in a competitive digital landscape and achieve long-term online success.
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
                        <h5> Our SEO Process</h5>
                        <div className="space16"></div>
                        <p>In today’s highly competitive digital world, businesses need to stand out online. We provide a comprehensive SEO service designed to help your website rank higher, increase organic traffic, and enhance your online visibility.</p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Requirement Gathering & Analysis:
                            </span>
                            Understanding your business goals, target audience, and current SEO performance to craft a personalized SEO strategy.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">SEO Audit:</span>
                            Evaluating the technical, on-page, and off-page SEO factors of your website to identify areas of improvement.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Keyword Research: </span>
                            Identifying high-traffic, relevant keywords to optimize your content and attract the right audience.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">On-Page Optimization:</span>
                            Enhancing your website’s content, metadata, and structure to make it more search engine-friendly and user-centric.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Link Building:</span>
                            Building quality backlinks from experienced websites to boost your website’s domain authority and search rankings.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Monitoring & Reporting:</span>
                            Continuously tracking SEO performance and providing detailed reports to measure success and adjust strategies accordingly.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Ongoing Maintenance:</span>
                            Regular updates and optimizations to keep up with search engine algorithm changes and ensure your SEO strategy remains effective.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space50"></div>
                    <div className="row">
                      <div className="heading1">
                        <h5>Our SEO Approach</h5>
                        <div className="space16"></div>
                      </div>
                      <div className="col-lg-6">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}>
                        On-Page SEO
                        </div>
                        <div className="space20"></div>
                        <p style={{ color: "#676879",lineHeight:'26px', fontSize: "16px", fontWeight: "300",}}>
                        We optimize every element of your website—from meta tags and headers to keywords and internal linking. Our on-page SEO strategies ensure that each page of your site is optimized for both search engines and users, improving rankings and user experience.{" "}
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}>
                        Off-Page SEO
                        </div>
                        <div className="space20"></div>
                        <p style={{color: "#676879",lineHeight:'26px',fontSize: "16px",fontWeight: "300",}}>
                        Our off-page SEO techniques help build high-quality backlinks from honorable sources, enhancing your website’s domain authority and trustworthiness. This drives more organic traffic and improves your rankings on Google.
                        </p>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-6">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}>
                        Mobile-Friendly SEO
                        </div>
                        <div className="space20"></div>
                        <p style={{ color: "#676879",lineHeight:'26px', fontSize: "16px", fontWeight: "300",}}>
                        With mobile traffic accounting for a significant portion of web visits, we ensure that your website is fully optimized for mobile devices. This includes responsive design, mobile speed optimization, and ensuring a seamless user experience across all devices.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}>
                        SEO Analytics & Reporting
                        </div>
                        <div className="space20"></div>
                        <p style={{ color: "#676879", fontSize: "16px",lineHeight:'26px', fontWeight: "300",}}>
                        We use advanced analytics tools to track your website's SEO performance and provide detailed reports. Our data-driven approach allows us to make informed decisions to further enhance your rankings and traffic.
                        </p>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-10">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}>
                        Increase Your Chance of Ranking on the First Page of Google
                        </div>
                        <div className="space20"></div>
                        <p style={{ color: "#676879", fontSize: "16px",lineHeight:'26px', fontWeight: "300",}}>
                        We specialize in creating SEO-friendly websites designed to improve search engine rankings and drive more organic traffic. Our comprehensive SEO strategies focus on every Features  of your website—from content creation and optimization to technical SEO and link building. We ensure your website is easy for search engines to explore , boosting your visibility on Google. By enhancing performance, optimizing content, and leveraging the latest SEO techniques, we help you rank higher, attract more traffic, and achieve better conversions.
                        </p>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-8">
                        <div className="text" style={{ fontSize: "20px", fontWeight: "600" }}> Technology & Tools </div>
                        <div className="space20"></div>
                        <p style={{ color: "#676879", fontSize: "16px", fontWeight: "300", }}>{" "}
                        We leverage modern tools and technologies to boost your SEO efforts:
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">SEO Tools:</span> Google Analytics
                          </li>
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">Keyword Research:</span> Google Keyword Planner, Ubersuggest
                          </li>
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">On-Page Optimization:</span> Yoast SEO, Screaming Frog, SurferSEO
                          </li>
                          <li>
                            <span className="check"><i className="bi bi-check-lg"></i></span>
                            <span className="text">Link Building:</span> Ahrefs, BuzzSumo
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

export default Seo;