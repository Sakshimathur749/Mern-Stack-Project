import React, { useState } from "react";
import "../../index-CNfx030l.css";
import '../MediaQuerie.css';
import { Col, Container } from "react-bootstrap";
const PPC = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is PPC advertising?",
      answer:"PPC (Pay-Per-Click) advertising is a digital marketing model where advertisers pay a fee each time their ad is clicked. It's commonly used on search engines like Google and social media platforms like Facebook to drive targeted traffic to websites.",
    },
    {
      question: "How does PPC work?",
      answer:"In PPC, advertisers bid on keywords related to their products or services. When a user searches for those keywords, the ads appear, and the advertiser pays a small fee if the user clicks on the ad. The cost per click depends on competition and the quality of the ad.",
    },
    {
      question: "How much does PPC advertising cost?",
      answer:"The cost of PPC advertising varies based on factors like keyword competition, industry, and platform. It can range from a few cents per click to several dollars, depending on the competitiveness of the target keywords and the quality of your ad campaigns.",
    },
    {
      question: "How do I measure the success of a PPC campaign?",
      answer:"Success in a PPC campaign can be measured through key metrics such as Click-Through Rate (CTR), Cost Per Click (CPC), conversion rate, and Return on Investment (ROI). These help assess the effectiveness of the campaign and optimize for better results.",
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
                      src="https://www.pngitem.com/pimgs/m/143-1437012_pay-per-click-hd-png-download.png"
                      alt=""
                      height="500px"
                      width="500px"
                      className="px"
                      style={{ paddingBottom: "30px" }}
                    />
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>
                    A Leading Pay-Per-Click (PPC) Service Provider in Jodhpur
                    </h2>
                    <div className="space16"></div>
                    <p>
                      {" "}
                      We specialize in delivering top-notch PPC services designed to maximize your Return on Investment (ROI) and drive targeted traffic to your business. Our team of experienced PPC experts develops customized strategies to create high-performing ad campaigns across platforms like Google Ads, Bing Ads, and Facebook Ads . We focus on precise audience targeting, engaging ad copy, and continuous campaign optimization to ensure your ads achieve maximum visibility and engagement. Whether you're aiming to increase leads, boost sales, or improve brand awareness, our PPC services help you stand out in the competitive digital marketplace and achieve measurable results.
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
                        <h5>Our Pay-Per-Click (PPC) Advertising Process</h5>
                        <div className="space16"></div>
                        <p>
                        In today’s competitive digital landscape, businesses need strategic advertising to stand out. We offer a comprehensive PPC solution customized to meet your marketing goals and drive measurable results.
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                              Requirement Gathering & Analysis:
                            </span>
                            Understanding your business objectives, target audience, and competition to create an effective PPC strategy.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Feasibility Study:
                            </span>
                            Analyzing advertising goals, platforms, and budgets to ensure alignment with your desired outcomes.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">Monitoring & Optimization:</span>
                            Continuously tracking ad performance, analyzing data, and making improvements for better ROI.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Ad Setup:
                            </span>
                            Designing and structuring ads with engaging copy, precise targeting, and optimized keywords for maximum performance.
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Implementation:
                            </span>
                            Launching and managing high-performing ads across platforms like Google Ads, Bing Ads, and Facebook Ads .
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Ongoing Maintenance:
                            </span>
                            Providing regular updates, reporting, and adjustments to ensure sustained success and competitive edge in the PPC space.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space50"></div>
                    <div className="row">
                      <div className="heading1">
                        <h5>Our Pay-Per-Click (PPC) Approach</h5>
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
                         Custom Strategies for Better Engagement
                        </div>
                        <div className="space20"></div>
                        <p
                          style={{
                            color: "#676879",
                            fontSize: "16px",
                            fontWeight: "300",
                          }}
                        >
                          We design PPC campaigns with creativity and purpose, offering strategies that captivate and drive action:{" "}
                        </p>
                        <ol className="expart-list">
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Targeted Ads that grab attention and spark interest.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Data-Driven Insights to optimize ad performance and maximize ROI.
                          </li>
                          <li
                            style={{
                              color: "#676879",
                              fontSize: "16px",
                              fontWeight: "300",
                            }}
                          >
                            Integrated Branding ensuring all ads are consistent with your brand’s identity and messaging.
                          </li>
                        </ol>
                      </div>
                      <div className="space50"></div>
                      <div className="col-lg-6">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          High-Impact PPC Campaigns for Maximum Engagement
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
                          We craft PPC strategies that are fully optimized for performance across all devices. Whether on mobile or desktop, our targeted ads, data-driven insights, and consistent branding ensure that your campaigns captivate your audience and drive measurable results, enabling effective, real-time decision-making from anywhere.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="text"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Cost-Effective PPC Management
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
                          As a trusted PPC service provider in Jodhpur, we deliver top-quality advertising services at competitive rates. We create high-performing ad campaigns that align with your business goals and budget, ensuring you get the best return on investment.
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
                          We leverage advanced tools and platforms to create high-quality, results-driven PPC campaigns:
                        </p>
                        <ul className="expart-list">
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Ad Management Tools:
                            </span>
                            Google Ads, Bing Ads, Facebook Ads, LinkedIn Ads
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Analytics & Optimization:
                            </span>{" "}
                            Google Analytics, SEMrush, Ahrefs, SpyFu
                          </li>
                          <li>
                            <span className="check">
                              <i className="bi bi-check-lg"></i>
                            </span>
                            <span className="text">
                            Campaign Tracking:
                            </span>{" "}
                            Conversion Tracking, Call Tracking, Heatmaps, A/B Testing Tools
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

export default PPC;