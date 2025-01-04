import React from "react";
import "../index-CNfx030l.css";
import "../App.css"

const AllBlogsDetails = () => {
  return (
    <div className="service-details-area-all " >
      <div className="space50"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 details-right-space">
            <div className="service-details-post">
              <article>
                <div className="details-post-area">
                  <div className="image">
                    <img
                      src="https://techxen-react.vercel.app/assets/img/others/project-details-img1.png"
                      alt=""
                    />
                  </div>
                  <div className="social-users">
                    <ul>
                      <li>
                        <a href="">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/icons/user-icon1.png"
                            alt=""
                          />{" "}
                          John William
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/icons/user-icon2.png"
                            alt=""
                          />{" "}
                          Feb 25, 24
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            src="https://techxen-react.vercel.app/assets/img/icons/user-icon3.png"
                            alt=""
                          />{" "}
                          Cyber Security
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space30"></div>
                  <div className="heading1 ">
                    <h2>
                      Protecting Your Business in the Digital Age of Cyber
                      Security
                    </h2>
                    <div className="space16"></div>
                    <p>
                      In todays interconnected world, cybersecurity has become a
                      critical concern for businesses of all sizes. With cyber
                      threats evolving rapidly and the increasing reliance on
                      digital technology, the importance of cybersecurity cannot
                      be overstated. In this blog post, we will delve into why
                      cybersecurity is essential for protecting your business in
                      the digital age.
                    </p>
                  </div>
                </div>
              </article>
              <div className="space50"></div>
              <article>
                <div className="details-post-area">
                  <div className="heading1">
                    <h5>Preventing Cyber Attacks</h5>
                    <div className="space16"></div>
                    <p>
                      Cyber attacks come in many forms, from phishing scams and
                      malware infections to ransomware attacks and DDoS
                      (Distributed Denial of Service) attacks. These attacks can
                      have devastating consequences for businesses, ranging from
                      financial losses and reputational damage to legal
                      liabilities. By investing in cybersecurity measures such
                      as firewalls, intrusion detection systems, and security
                      awareness training, businesses can reduce their
                      susceptibility to cyber attacks and the impact of security
                      incidents.
                    </p>
                  </div>
                  <div className="space40"></div>
                  <div className="heading1">
                    <h5>Ensuring Business Continuity</h5>
                    <div className="space16"></div>
                    <p>
                      In addition to protecting against external threats,
                      cybersecurity also plays a crucial role in ensuring
                      business continuity. In the event of a cyber attack or
                      data breach, systems may be disrupted, data may be lost or
                      corrupted, and downtime can result in significant
                      financial losses. By implementing measures such as regular
                      data backups, disaster recovery plans, and incident
                      response protocols, businesses can minimize the impact of
                      cyber incidents and maintain continuity of operations,
                      even in the face adversity.
                    </p>
                  </div>
                </div>
              </article>
              <div className="space50"></div>
              {/* <article>
                <div className="details-post-area">
                  <div className="video-area-image">
                    <div className="image">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/blog/blog-post-video-img.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h5>Maintaining Regulatory Compliance</h5>
                    <div className="space20"></div>
                    <p>
                      Furthermore, cybersecurity is essential for maintaining
                      compliance with various regulations and industry standards
                      governing data privacy and security. Non-compliance can
                      result in significant fines, legal penalties, and
                      reputational damage to businesses. By implementing
                      security controls and adhering to regulations such as
                      GDPR, HIPAA, and PCI-DSS, businesses can mitigate the risk
                      of regulatory violations and demonstrate their commitment
                      to protecting customer data and privacy.
                    </p>
                  </div>
                </div>
              </article>
              <div className="space50"></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-box-area mb-40">
              <h3>Search by Keyword</h3>
              <div className="search">
                <input type="text" placeholder="Type keyword here" />
                <div className="button">
                  <button>
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Recent Blogs</h3>
              <div className="sidebar-blog-boxs">
                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/blog/blog-details-sidebar1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="heading">
                    <a href="#" className="date">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                        alt=""
                      />{" "}
                      19/02/2024
                    </a>
                    <h5>
                      <a href="/blog/blog-details">
                        We take a deep dive into the future of cloud computing{" "}
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/blog/blog-details-sidebar2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="heading">
                    <a href="#" className="date">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                        alt=""
                      />{" "}
                      19/02/2024
                    </a>
                    <h5>
                      <a href="/blog/blog-details">
                        Our team of experts will provide in-depth analysis{" "}
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/blog/blog-details-sidebar3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="heading">
                    <a href="#" className="date">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                        alt=""
                      />{" "}
                      19/02/2024
                    </a>
                    <h5>
                      <a href="/blog/blog-details">
                        Our case studies and success stories highlight
                        real-world{" "}
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/blog/blog-details-sidebar3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="heading">
                    <a href="#" className="date">
                      <img
                        src="https://techxen-react.vercel.app/assets/img/icons/date.png"
                        alt=""
                      />{" "}
                      19/02/2024
                    </a>
                    <h5>
                      <a href="/blog/blog-details">
                        One of the primary objectives of cybersecurity is to
                        protect{" "}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsDetails;