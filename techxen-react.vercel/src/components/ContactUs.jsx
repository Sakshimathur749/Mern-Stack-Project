import React, { useState } from "react";
import "../index-CNfx030l.css";
import '../App.css'
import Icon1 from '../assets/Icon/icon-phone.png'
import Icon2 from '../assets/Icon/icon-email.png'
import Icon3 from '../assets/Icon/icon-location.png'

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [contact, setContact] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    subject:"",
    message:'',
  })
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!contact) {
      console.error("Contact object is undefined");
      return false;
  }

  if (!contact.firstname) {newErrors.firstname = "First name is required";} else if (!/^[a-zA-Z]+$/.test(contact.firstname)) {newErrors.firstname = "First name should contain only letters";}
  if (!contact.lastname) {newErrors.lastname = "Last name is required";} else if (!/^[a-zA-Z]+$/.test(contact.lastname)) {newErrors.lastname = "Last name should contain only letters";}
  if (!contact.email) {newErrors.email = "Email is required";} else if (!emailRegex.test(contact.email)) {newErrors.email = "Please provide a valid email address";}
  if (!contact.phone) {newErrors.phone = "Phone number is required";} else if (!phoneRegex.test(contact.phone)) {newErrors.phone = "Phone number should be between 10 and 15 digits";}
  if (!contact.subject) {newErrors.subject = "Subject is required";}
  if (!contact.message) {newErrors.message = "Message is required";}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInput =(e)=>{
    const { name, value } = e.target; 
    setContact({...contact,[name]:value});
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setSuccessMessage(""); 
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(validateForm()){
      try {
        const response = await fetch("http://localhost:5000/api/form/contact", {
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
    <div className="contact-page ">
      <div className="space50"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-boxs">
              <div className="heading1">
                <h2>Contact Information</h2>
                <div className="space16"></div>
                <p>
                  We Have grown up with the internet revolution, and we <br />{" "}
                  know how to deliver on its
                </p>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img
                    src={Icon1}
                    alt=""
                  />
                </div>
                <div className="heading">
                  <h5>Contact Us</h5>
                  <a href="+91 86907 31436" className="text">
                  +91 86907 31436
                  </a>
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img
                    src={Icon2}
                    alt=""
                  />
                </div>
                <div className="heading">
                  <h5>Send Us a Mail</h5>
                  <a href="mailto:admin@techxen.org " className="text">
                    admin@techxen.org{" "}
                  </a>
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img
                    src={Icon3}
                    alt=""
                  />
                </div>
                <div className="heading">
                  <h5>Office Location</h5>
                  <a href="tel:(124)555-6565" className="text">
                    73 Bridge St Brooklyn Arakansas <br /> 85032 United States,
                    NY 10018
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-details">
              <form action="" method='post' onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        autoComplete="off"
                        value={contact.firstname} style={errors.firstname ? { borderColor: "red" } : {}}
                        onChange={handleInput}
                        />{errors.firstname && <p style={{ color: "red", marginTop: "5px" }}>{errors.firstname}</p>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={contact.lastname} style={errors.lastname ? { borderColor: "red" } : {}}
                        onChange={handleInput} 
                        />{errors.lastname && (<p style={{ color: "red", marginTop: "5px" }}>{errors.lastname}</p>)}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email" style={errors.email ? { borderColor: "red" } : {}}
                        value={contact.email}
                        onChange={handleInput}
                        /> {errors.email && (
                          <p style={{ color: "red" , marginTop: "5px"}}>{errors.email}</p>
                        )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        value={contact.phone}  style={errors.phone ? { borderColor: "red" } : {}}
                        onChange={handleInput}
                        />{errors.phone && (
                          <p style={{ color: "red", marginTop: "5px" }}>{errors.phone}</p>
                        )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-input">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={contact.subject}
                        onChange={handleInput}
                        />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-input">
                      <textarea
                        cols="30"
                        rows="5"
                        name="message"
                        value={contact.message}
                        onChange={handleInput}
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="theme-btn1" fdprocessedid="fhr1x">
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
    </div>
  );
};

export default ContactUs;