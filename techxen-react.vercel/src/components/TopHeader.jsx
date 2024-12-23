import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const TopHeader = () => {
  return (
    <div className='cs_top_header'>
      <Container>
        <Row>
            <Col xs='12'>
            <div className="pera">
                <p><img src="https://techxen-react.vercel.app/assets/img/icons/header-top-span.png" alt=""/> A Professional Technology &amp; It Solution Company Based On World</p>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopHeader
