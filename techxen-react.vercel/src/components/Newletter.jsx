import React, { useState } from 'react'
import "../index-CNfx030l.css";
import { Container,Row,Col } from 'react-bootstrap'
import {API_URL} from  '../../../admin/src/url'
const Newsletter = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [contact, setContact] = useState({
      firstname:"",
      email:"",
      phone:"",
      message:'',
    })
    const handleInput =(e)=>{
      const { name, value } = e.target; 
      setContact({...contact,[name]:value});
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setSuccessMessage(""); 
    }
    const validateForm = () => {
      const newErrors = {};
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      const phoneRegex = /^[0-9]{10}$/;
      if (!contact) {
        console.error("Contact object is undefined");
        return false;
    }
  
    if (!contact.firstname) {newErrors.firstname = "First name is required";} else if (!/^[a-zA-Z]+$/.test(contact.firstname)) {newErrors.firstname = "First name should contain only letters";}
    if (!contact.email) {newErrors.email = "Email is required";} else if (!emailRegex.test(contact.email)) {newErrors.email = "Please provide a valid email address";}
    if (!contact.phone) {newErrors.phone = "Phone number is required";} else if (!phoneRegex.test(contact.phone)) {newErrors.phone = "Phone number should be between 10 and 15 digits";}
    if (!contact.message) {newErrors.message = "Message is required";}
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async(e) =>{
      e.preventDefault();
      if(validateForm()){
        try {
          const response = await fetch(`${API_URL}/api/getaquote`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            console.log("Form submitted successfully:", data);
            setContact({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
            setSuccessMessage("Form submitted successfully!"); 
          } else {
            console.error("Form submission failed:", data);
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          setSuccessMessage(""); 
        }
      }
  
    }
  return (
    <div className="contact-page">
      <div className="space50"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto text-center">
            <div className="heading7">
              <div>
                <h2 className="tg-element-title">
                Tell us about your requirement
                </h2>
                <div className="space16"></div>
                <p>
                  {" "}
                  We’ll get back to you within a few hours!
                </p>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="col-lg-12">
            <div className="contact-form-details">
              <form action="" method='post' onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="text" name="firstname"  placeholder="First Name" autoComplete="off" style={errors.lastname ? { borderColor: "red" } : {}}  value={contact.firstname} onChange={handleInput}/>{errors.firstname && <p style={{ color: "red", marginTop: "5px" }}>{errors.firstname}</p>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="email" placeholder="Email" name='email' style={errors.email ? { borderColor: "red" } : {}}
                        value={contact.email}  onChange={handleInput}/>{errors.email && (
                          <p style={{ color: "red" , marginTop: "5px"}}>{errors.email}</p>
                        )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input type="number" placeholder="Phone" name='phone' value={contact.phone}  style={errors.phone ? { borderColor: "red" } : {}} onChange={handleInput}/>{errors.phone && (
                          <p style={{ color: "red", marginTop: "5px" }}>{errors.phone}</p>
                        )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <select
                        style={{
                          padding: "18px",
                          marginBottom:'20px',
                          width: "100%",
                          color: "#676879",
                          borderRadius: "4px",
                          outline: "none",
                          border: "none",
                        }}
                      >
                        <option value="">
                          Which service are you interested in?*
                        </option>
                        <option value="web">Web Development</option>
                        <option value="app">App Development</option>
                        <option value="ecommerce">
                          E-commerce Development
                        </option>
                        <option value="ecommerce-marketing">
                          E-commerce Marketing
                        </option>
                        <option value="digital-card">
                          Digital Card Services
                        </option>
                        <option value="graphic">Graphic Designing</option>
                        <option value="seo">SEO</option>
                        <option value="social-media">Social Media </option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="ppc">Pay-Per-Click (PCC)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-input">
                      <textarea
                        cols="30"
                        rows="5"
                        placeholder="Message" name='message' value={contact.message} onChange={handleInput}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="theme-btn1">
                      Submit{" "}
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              {successMessage && (
                <div style={{ marginTop: "20px", color: "green" }}>
                  <p>{successMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="space50"></div>
    </div>
  );
}

export default Newsletter