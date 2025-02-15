import React from "react";
import "../index-CNfx030l.css";
import Icon from '../assets/icon.png'
const Commonhero = ({name}) => {
  return (
    <div className="common-hero">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-8 m-auto">
            <div className="main-heading">
              <h1>{name}</h1>
              <div className="space16"></div>
              <span className="span">
                <img src={Icon} alt="" />{" "}
                <a href="/">Home</a>
                <span className="arrow">
                  <i className="bi bi-chevron-right"></i>
                </span>{" "}
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commonhero;
