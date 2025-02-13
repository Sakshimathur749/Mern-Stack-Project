import React, { useState } from 'react';
import "../index-CNfx030l.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import {API_URL} from  '../../../admin/src/url'
function EnquiryForm() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState("");
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setIsSubmitted("")
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validateField = () => {
    const newErrors = { };
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData) {
      console.error("formData object is undefined");
      return false;
    }
    if (!formData.firstname) {newErrors.firstname = "First name is required";} else if (!/^[a-zA-Z]+$/.test(formData.firstname)) {newErrors.firstname = "First name should contain only letters";}
    if (!formData.lastname) {newErrors.lastname = "Last name is required";} else if (!/^[a-zA-Z]+$/.test(formData.lastname)) {newErrors.lastname = "Last name should contain only letters";}
    if (!formData.email) {newErrors.email = "Email is required";} else if (!emailRegex.test(formData.email)) {newErrors.email = "Please provide a valid email address";}
    if (!formData.phone) {newErrors.phone = "Phone number is required";} else if (!phoneRegex.test(formData.phone)) {newErrors.phone = "Phone number should be between 10";}
    if (!formData.message) {newErrors.message = "Message is required";}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validateField()){
      try {
        const response = await fetch(`${API_URL}/form/equieryform`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setSubmissionStatus("success");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        } else {
            setSubmissionStatus("error");
        }
          setShowSuccessModal(true);
          setShowModal(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmissionStatus("error");
        setShowSuccessModal(true);
         }
    }
  };
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setIsSubmitted(false); 
  };
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div>
      <div className="buttons">
        <a
          className="theme-btn1"
          style={{
            position: "fixed",
            top: "350px",
            marginRight:'10px',
            right: "-60px",
            zIndex: "10",
            transform: 'rotate(270deg)',
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
          onClick={handleShow}
        >
          Enquiry Form
        </a>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        style={{ alignContent: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: '#f8f9fa'}}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <div className="col-lg-12">
                <div className="contact-form-details">
                  <form action="" onSubmit={handleSubmit} method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input">
                        {errors.firstname && <p style={{color:'red' ,fontSize:'14px'}}>{errors.firstname}</p>}<input
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            value={formData.firstname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input">
                        {errors.lastname && <p style={{color:'red' ,fontSize:'14px'}}>{errors.lastname}</p>}<input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            value={formData.lastname}
                          onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input">
                        {errors.email && <p style={{color:'red' ,fontSize:'14px'}}>{errors.email}</p>}<input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                          onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input">
                        {errors.phone && <p style={{color:'red' ,fontSize:'14px'}}>{errors.phone}</p>}<input
                            type="number"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                          onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input">
                          <textarea
                            cols="30"
                            rows="5"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                          onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Row>
        <Modal.Footer style={{borderTop:'none', padding:'20px 10px'}}>
          <div className="col-lg-6">
          <button className="theme-btn1" onClick={handleClose} >
              Close{" "}
            </button>
            <button className="theme-btn1" type='submit' >
              Submit{" "}
            </button>
          </div>
        </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showSuccessModal}
        onHide={handleCloseSuccessModal}
        centered
      >
        <Modal.Body style={{borderRadius:'30px'}}>
        <div style={{textAlign:'center', marginTop: "20px", }}>
        {submissionStatus=="success"  ?(<><svg xmlns="http://www.w3.org/2000/svg" height={50} width={50} style={{marginBottom:'15px'}} viewBox="0 0 512 512"><path fill="#1f9217" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        <h2 style={{ fontWeight:'600'}}> Success</h2>
        <p style={{fontWeight:'600' , padding:'10px 0px'}}>Your enquiry has been submitted successfully!</p>
        <p>Thank you for reaching out. We will get back to you shortly.</p>
        </>):(<>
                <svg xmlns="http://www.w3.org/2000/svg" height={50} width={50} style={{marginBottom:'15px'}} viewBox="0 0 512 512"><path fill="#d01616" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                <h2 style={{ fontWeight: '600' }}>OOps! Something Went Wrong</h2>
                <p style={{ fontWeight: '600', padding: '10px 0px' }}>There was an issue submitting your enquiry.</p>
                <p>Please try again later.</p>
              </>)}
        </div>
        </Modal.Body>
        <Modal.Footer  style={{border:'none' ,padding:'20px 0px'}}>
          {submissionStatus=="success"?(<><button className="theme-btn1" style={{backgroundColor:'#1f9217', width:'100%', margin :'0px 30px'}} onClick={handleCloseSuccessModal}>Close</button></>):(<><button className="theme-btn1" style={{backgroundColor:'#d01616', width:'100%', margin :'0px 30px'}} onClick={handleCloseSuccessModal}>Close</button></>)}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EnquiryForm;