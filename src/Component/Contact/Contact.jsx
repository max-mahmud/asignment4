import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Contact.css'
import { FaMapMarkedAlt,FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Heading from '../Heading/Heading';

const Contact = () => {
  return (
    <>
        <section className="contact">
        <Heading of_sub_heading={'Contact US'} of_heading="If You Have Any Query, Please Feel Free to contact us" of_text={' new study has shown that some parents in the United States misrepresented their child’s coronavirus status, allowing them to break quarantine or testing guidelines.'}/>
            <Container className='bg-light py-3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463992.4246642646!2d87.97968874631445!3d24.694561099064273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbaf7578390b7f%3A0xde4d28e6a17c8b2f!2sChapainawabganj%20District!5e0!3m2!1sen!2sbd!4v1678183421137!5m2!1sen!2sbd" width="100%" height="320" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <Row >
                    <Col lg={{span:6, offset:3}} md={{span:8, offset:2}} >
                        <div className="contact_form bg-white">
                            <h4>Contact Form</h4>
                        <form
                        action="https://formspree.io/f/mzbqgqrz"
                        method="POST"
                        >
                        <div className="flex_div">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" name='name' placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Enter Email" required />
                        </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" name='subject' placeholder="Subject" required />
                        </Form.Group>
                            <Form.Control
                            as="textarea"
                            name='massage'
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                            <Button type='submit' className='contact_btn'>Submit</Button>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Contact
