import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import whyImage from '../../Image/phone.png'
import './WhyUs.css'
import { AiFillCheckCircle } from "react-icons/ai";

const WhyUs = () => {
  return (
    <>
      <section className="why_us">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="why_img">
                        <img src={whyImage} alt="image" />
                        <div className="why_img_text">
                            <div className="why_text1">
                                <h3>521+</h3>
                                <p>Project Done</p>
                            </div>
                            <div className="why_text2">
                                <h3>221+</h3>
                                <p>Happy Client</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="Why_text">
                        <h4>Industries we serve</h4>
                        <h2>Why Us ?</h2>
                        <p>Need a website design solution for your business? Fill out the below questionnaire to have our vendor partners contact you with free information..</p>
                        <ul>
                            <li><span><AiFillCheckCircle /></span>What’s your research process like?</li>
                            <li><span><AiFillCheckCircle /></span>Will I be able to make edits on my own?</li>
                            <li><span><AiFillCheckCircle /></span>What services are provided?</li>
                            <li><span><AiFillCheckCircle /></span>What does your SEO strategy look like?</li>
                            <li><span><AiFillCheckCircle /></span>What is your expectation of my involvement?</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default WhyUs
