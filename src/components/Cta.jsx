import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../index-CNfx030l.css";

const Cta = () => {
  return (
    <section style={{backgroundColor:'#0E38B1',padding:'80px 0px'}}>
        <Container>
      <Row className='align-items-center'>
        <Col lg='7' >
        <div className="heading1-w">
            <h2 className="title tg-element-title">At Devexa IT Solutions, We are Committed To Businesses</h2>
            <div style={{height:'16px'}}></div>
            <p data-aos="fade-right" data-aos-duration="700">Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our IT specialists to discuss your objectives and explore how our innovative solutions can propel.</p>
        </div>
        </Col>
        <Col lg='5' >
        <div className="buttons1">
            <a className="cta-btn1" href="/contact">Request a Consultaion 
             <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"></path></svg></span>
            </a>
            <a className="cta-btn2" href="/about">Explore Solution 
             <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"></path></svg></span>
            </a>
        </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Cta