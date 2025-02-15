import React, { useState } from "react";
import "../index-CNfx030l.css";
import '../App.css'
import Icon1 from '../assets/Icon/icon-phone.png'
import Icon2 from '../assets/Icon/icon-email.png'
import Icon3 from '../assets/Icon/icon-location.png'
import {API_URL} from  '../../admin/src/url'
import { Modal } from "react-bootstrap";
const ContactUs = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); 
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
    setErrorMessage("");
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(validateForm()){
      try {
        const response = await fetch(`${API_URL}/api/form/contact`, {
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
          setShowSuccessModal(true);
          setSubmissionStatus("success");
        } else {
          console.error("Form submission failed:", data);
          setShowSuccessModal(true);
          setSubmissionStatus("error");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setShowSuccessModal(true);
            setSubmissionStatus("error");
      }
    }
  }
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
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
                  <a href="mailto:info@devexa.solutions " className="text">
                    info@devexa.solutions{" "}
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
                        />{errors.firstname && <p className='text-danger mt-1'>{errors.firstname}</p>}
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
                        />{errors.lastname && (<p className='text-danger mt-1'>{errors.lastname}</p>)}
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
                          <p className='text-danger mt-1'>{errors.email}</p>
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
                          <p className='text-danger mt-1'>{errors.phone}</p>
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
              <Modal
        show={showSuccessModal}
        onHide={handleCloseSuccessModal}
        centered
      >
        <Modal.Body className="rounded-3">
        <div className='text-center mt-3' >
        {submissionStatus=="success"  ?(<><svg xmlns="http://www.w3.org/2000/svg" height={50} width={50} className='mb-2' viewBox="0 0 512 512"><path fill="#1f9217" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        <h2 className='fw-semibold'> Success</h2>
        <p className='fw-semibold py-2' >Your enquiry has been submitted successfully!</p>
        <p>Thank you for reaching out. We will get back to you shortly.</p>
        </>):(<>
                <svg xmlns="http://www.w3.org/2000/svg" height={50} width={50} className='mb-2' viewBox="0 0 512 512"><path fill="#d01616" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                <h2 className='fw-semibold'>OOps! Something Went Wrong</h2>
                <p className='fw-semibold py-2'>There was an issue submitting your enquiry.</p>
                <p>Please try again later.</p>
              </>)}
        </div>
        </Modal.Body>
        <Modal.Footer className='border-0 py-3'  >
          {submissionStatus=="success"?(<><button className="theme-btn1 w-100 mx-3" style={{backgroundColor:'#1f9217'}} onClick={handleCloseSuccessModal}>Close</button></>):(<><button className="theme-btn1 w-100 mx-3" style={{backgroundColor:'#d01616'}} onClick={handleCloseSuccessModal}>Close</button></>)}
        </Modal.Footer>
      </Modal>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;