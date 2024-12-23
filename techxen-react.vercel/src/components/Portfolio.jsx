import React from 'react'
import "../index-CNfx030l.css";
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="work4 sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading4">
              <div>
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  How It Works 👋
                </span>
                <h2 className="title tg-element-title">
                  Unlocking Success: The Project-by-Project Guide to Our IT Solution
                  Process
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in-up"
            data-aos-duration="1200"
          >
            <div className="work4-box heading4">
              <Link to='https://rajasthanispices.com/'>
              <span className="after">Project 01</span>
              <h4>
                <a href="https://rajasthanispices.com/">Rajasthani associate of Species</a>
              </h4>
              <div className="space16"></div>
              <p>
              Rajasthan is home to a diverse range of species, from desert flora and fauna to the vibrant wildlife of its national parks. These species are vital to the state’s ecosystem, reflecting its rich natural heritage.
              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products
