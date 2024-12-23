import React from 'react'

const Products = () => {
  return (
    <div className="service7 sp bg5">
      <div className="container">
      <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading4">
              <div>
                <h2 className="title tg-element-title">
                Your Success, Our Projects<br/>
                <p style={{fontSize:'20px', fontWeight:'500',padding:'25px 0px'}}>"We take pride in delivering customized IT solutions that drive measurable success for our clients."</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          <div className="col-lg-4 col-md-6" >
            <div className="service7-box">
              <div className="heading-area">
                <div className="icon">
                  <img src="https://techxen-react.vercel.app/assets/img/icons/service7-icon1.svg" alt=""/>
                </div>
                <div className="heading7">
                  <h4><a >Digital Visiting Card</a></h4>
                  <p>{" "}
                  My digital visiting card offers instant access to all my details with a tap. Seamlessly share and update your information, making networking more efficient
                  </p>
                  <a className="learn" >Visit{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" >
            <div className="service7-box">
              <div className="heading-area">
                <div className="icon">
                  <img src="https://techxen-react.vercel.app/assets/img/icons/service7-icon1.svg" alt=""/>
                </div>
                <div className="heading7">
                  <h4><a >Emplyoo attendance system</a></h4>
                  <p>{" "}
                  Efficiently manage employee attendance with our smart system. Enjoy real-time tracking, seamless check-ins, and accurate reporting. Streamline your workflow and ensure productivity with ease.
                  </p>
                  <a className="learn" >Visit {" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products
