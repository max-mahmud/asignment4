import React from 'react'
import { Col, Container , Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebookF ,FaLinkedinIn , FaGithub} from "react-icons/fa";
import './Footer.css'
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <footer>
      <Container>
        <Row>
            <Col lg={3} md={6}>
                <div className="footer_text">
                    <h3>About Us</h3>
                    <p>Web development is the work involved in developing a website for the Internet or an intranet.</p>
                </div>

            </Col>
            <Col lg={3} md={6}>
                <div className="newslatter">
                    <h3>Newsletter</h3>
                    <p>Stay Update With Our Latest</p>
                    <div className="input-div">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Button className='btn newslater_btn' type="submit">
                        Submit
                    </Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6}>
                <div className="resources">
                    <h3>Resources</h3>
                    <div className="resources_link">
                    <NavLink>Guides</NavLink>
                    <NavLink>Research</NavLink>
                    <NavLink>Expert</NavLink>
                    <NavLink>Agenciss</NavLink>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6}>
                <div className="follow">
                    <h3>Follow Us</h3>
                    <p>Let us be social</p>
                    <div className="follow-icon">
                        <a href="https://www.facebook.com/Maxmahmud24" target={'_blank'} ><FaFacebookF /></a>
                        <a href="https://bd.linkedin.com/" target={'_blank'}><FaLinkedinIn /></a>
                        <a href="https://github.com/max-mahmud" target={'_blank'}><FaGithub /></a>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
      </footer>

    </>
  )
}

export default Footer