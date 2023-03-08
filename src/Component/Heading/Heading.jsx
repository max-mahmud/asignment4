import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Heading.css'

const Heading = ({of_sub_heading, of_heading, of_text}) => {
  return (
    <>
      <div className="all_heading bg-light">
        <Container>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                <div className="heading_text ">
                <h4>{of_sub_heading}</h4>
                <h2>{of_heading}</h2>
                <p>{of_text}</p>
                </div>
                </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Heading
