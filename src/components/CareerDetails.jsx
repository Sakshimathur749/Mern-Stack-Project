import React, {  useState } from "react";
import "../index-CNfx030l.css";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {API_URL} from  '../../admin/src/url'
const CareerDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); 
  const [isSubmitted, setIsSubmitted] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });
  const [error, setError] = useState('');

  const handleModalClose = () => {setShowModal(false);  setIsSubmitted(false); }
  const handleModalShow = () => setShowModal(true);
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsSubmitted("")
    setError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setFormData((prev) => ({ ...prev, resume: file }));
        setError('');
      } else {
        setError('Please upload a valid PDF file.');
      }
    }
  };
  const validateField = () => {
    const newErrors = { };
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData) {
      console.error("formData object is undefined");
      return false;
    }
    if (!formData.name) {newErrors.firstname = "First name is required";} else if (!/^[a-zA-Z]+$/.test(formData.firstname)) {newErrors.firstname = "First name should contain only letters";}
    if (!formData.email) {newErrors.email = "Email is required";} else if (!emailRegex.test(formData.email)) {newErrors.email = "Please provide a valid email address";}
    if (!formData.phone) {newErrors.phone = "Phone number is required";} else if (!phoneRegex.test(formData.phone)) {newErrors.phone = "Phone number should be between 10 ";}
    if (!formData.resume) { newErrors.resume = "Resume is required";} else if (formData.resume && formData.resume.type !== 'application/pdf') {newErrors.resume = "Please upload a valid PDF file.";}
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(validateField()){
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("resume", formData.resume);
    try {
      const response = await fetch(`${API_URL}/api/job/apply`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setSubmissionStatus("success");
          setFormData({
            name: '',
            email: '',
            phone: '',
            resume: '',
          });
      } else {
        const errorData = await response.json();
        setSubmissionStatus("error");
        setError(errorData.message || 'Failed to submit the form. Please try again.');
      }
      setShowSuccessModal(true);
      setShowModal(false);
    } catch (error) {
      console.error('Error Submitting form:', error);
      setSubmissionStatus("error");
        setShowSuccessModal(true);
    }
  }
  };

  return (
    <div className="sp servcie2 service-page-sec">
      <Container>
        <Row>
          <div className="heading1">
            <h2 style={{ fontSize: "45px" }}>
              Come To Join Our Experienced Team
            </h2>
            <div className="space16"></div>
            <p>
              Adiyogi Technosoft helps you to get a job in your matching career.
              We offer relevant and skillful opportunities to be part of
              Jodhpur’s leading company. We also ensure about healthy and the
              best possible work environment for our people.
            </p>
          </div>
        </Row>
        <div className="space50"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="" onClick={handleModalShow}>
                <div className="servcie2-box">
                  <div
                    className="icon"
                    style={{
                      margin: "10px auto",
                      justifyItems: "center",
                      alignContent: "center",
                      width: "70px",
                      height: "60px",
                      backgroundColor: "white",
                      padding: "4px",
                    }}
                  >
                    <img
                      src="https://techxen-react.vercel.app/assets/img/logo/header-logo1.png"
                      alt=""
                    />
                  </div>
                  <a className="arrow">
                    <Link to="/service/Web-Development">
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </a>
                  <div className="heading1">
                    <h4 style={{ textAlign: "center" }}>
                      <a href="/service/Web-Development">Web Developnment</a>
                    </h4>
                    <div className="space16"></div>
                    <p style={{ textAlign: "center" }}>
                      Job Type: Full Time <br /> Opening Date : 18-12-24
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <Link to='/service/App-Development'>
              <div className="">
                <div className="servcie2-box">
                  <div className="icon" style={{margin: '10px auto',justifyItems:'center',alignContent:'center',width: '70px',height:'60px',backgroundColor: 'white',padding:'4px'}}>
                    <img
                      src="https://techxen-react.vercel.app/assets/img/logo/header-logo1.png"
                      alt="" 
                    />
                  </div>
                  <a className="arrow">
                    <Link to="/service/App-Development">
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </a>
                  <div className="heading1">
                    <h4 style={{textAlign:'center'}}>
                      <a href="/service/App-Development">App Developnment</a>
                    </h4>
                    <div className="space16"></div>
                    <p style={{textAlign:'center'}}>
                      Job Type: Full Time <br/> Opening Date : 18-12-24
                    </p>
                  </div>
                </div>
              </div></Link>
              
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to='/service/SEO'>
              <div className="">
                <div className="servcie2-box">
                  <div className="icon" style={{margin: '10px auto',justifyItems:'center',alignContent:'center',width: '70px',height:'60px',backgroundColor: 'white',padding:'4px'}}>
                    <img
                      src="https://techxen-react.vercel.app/assets/img/logo/header-logo1.png"
                      alt="" 
                    />
                  </div>
                  <a className="arrow">
                    <Link to="/service/SEO">
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </a>
                  <div className="heading1">
                    <h4 style={{textAlign:'center'}}>
                      <a href="/service/SEO">SEO</a>
                    </h4>
                    <div className="space16"></div>
                    <p style={{textAlign:'center'}}>
                      Job Type: Full Time <br/> Opening Date : 18-12-24
                    </p>
                  </div>
                </div>
              </div></Link>
            </div> */}
          </div>
        </div>
      </Container>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        style={{ height: "100vh", alignContent: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title> Job Application</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f8f9fa" }}>
          <Form onSubmit={handleFormSubmit}>
          <Row>
            <div className="col-lg-12">
              <div className="contact-form-details">
                <form action="" onSubmit={handleFormSubmit} method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="single-input">
                        {error.name && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error.name}
                          </p>
                        )}
                        <input
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input">
                        {error.phone && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error.phone}
                          </p>
                        )}
                        <input
                          type="text"
                          placeholder="Enter your phone number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input">
                        {error.email && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error.email}
                          </p>
                        )}
                        <input
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input">
                        {error.phone && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error.phone}
                          </p>
                        )}
                        <input
                          type="file"
                          name="resume"
                          onChange={handleFileChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Row>
          <Modal.Footer style={{ borderTop: "none", padding: "20px 10px" }}>
            <div className="col-lg-6">
              <button className="theme-btn1" onClick={handleModalClose}>
                Close{" "}
              </button>
              <button className="theme-btn1" type="submit">
                Submit{" "}
              </button>
            </div>
          </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
        <Modal.Body style={{ borderRadius: "30px" }}>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {submissionStatus == "success" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={50}
                  width={50}
                  style={{ marginBottom: "15px" }}
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#1f9217"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
                <h2 style={{ fontWeight: "600" }}> Success</h2>
                <p style={{ fontWeight: "600", padding: "10px 0px" }}>
                  Your enquiry has been submitted successfully!
                </p>
                <p>
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={50}
                  width={50}
                  style={{ marginBottom: "15px" }}
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#d01616"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  />
                </svg>
                <h2 style={{ fontWeight: "600" }}>
                  OOps! Something Went Wrong
                </h2>
                <p style={{ fontWeight: "600", padding: "10px 0px" }}>
                  There was an issue submitting your enquiry.
                </p>
                <p>Please try again later.</p>
              </>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ border: "none", padding: "20px 0px" }}>
          {submissionStatus == "success" ? (
            <>
              <button
                className="theme-btn1"
                style={{
                  backgroundColor: "#1f9217",
                  width: "100%",
                  margin: "0px 30px",
                }}
                onClick={handleCloseSuccessModal}
              >
                Close
              </button>
            </>
          ) : (
            <>
              <button
                className="theme-btn1"
                style={{
                  backgroundColor: "#d01616",
                  width: "100%",
                  margin: "0px 30px",
                }}
                onClick={handleCloseSuccessModal}
              >
                Close
              </button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CareerDetails;