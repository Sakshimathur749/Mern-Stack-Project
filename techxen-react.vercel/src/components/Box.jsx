import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import '../App.css';
import './MediaQuerie.css'

const Box = () => {
    return (
       <section >
         <Container >
            <Row className='hero-bottom-area gap50'>
                <Col xs="3">
                    <div className="single-box">
                        <div className="icon">
                            <img src="https://techxen-react.vercel.app/assets/img/icons/hero-bottom-icon1.png" alt="" />
                        </div>
                        <div className="headding">
                            <h5>4x Award Wining</h5>
                            <p>Always ready to support</p>
                        </div>
                    </div>
                </Col>
                <Col xs="3">
                    <div className="single-box">
                        <div className="icon">
                            <img src="https://techxen-react.vercel.app/assets/img/icons/hero-bottom-icon1.png" alt="" />
                        </div>
                        <div className="headding">
                            <h5>4x Award Wining</h5>
                            <p>Always ready to support</p>
                        </div>
                    </div></Col>
                <Col xs="3">
                    <div className="single-box">
                        <div className="icon">
                            <img src="https://techxen-react.vercel.app/assets/img/icons/hero-bottom-icon1.png" alt="" />
                        </div>
                        <div className="headding">
                            <h5>4x Award Wining</h5>
                            <p>Always ready to support</p>
                        </div>
                    </div>
                </Col>
                <Col xs="3"><div className="single-box">
                    <div className="icon">
                        <img src="https://techxen-react.vercel.app/assets/img/icons/hero-bottom-icon1.png" alt="" />
                    </div>
                    <div className="headding">
                        <h5>4x Award Wining</h5>
                        <p>Always ready to support</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
       </section>
  )
}

export default Box