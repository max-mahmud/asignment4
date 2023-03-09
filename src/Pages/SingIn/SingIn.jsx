import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useSignInWithEmailAndPassword  } from 'react-firebase-hooks/auth';
import  auth  from '../../Component/FireBase/Firebase.init';
import { NavLink } from 'react-router-dom';
import './Singin.css'
import GoogleSingup from '../../Component/GoogleSingUp/GoogleSingup';
import FacebookSingup from '../../Component/Facebook/FacebookSingup';
import Helmet from '../../Component/Helmet/Helmet';

const Singin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword (auth);
    const massageDIV =document.getElementById('message-div')

    if (error) {
        massageDIV.innerHTML= 'Something Wrong'
        
    }
    if (loading) {
        massageDIV.innerHTML= 'Loding... Please wait'
    }
    if (user) {
        massageDIV.innerHTML=`<h4> Sing In Successfull</h4>`
    }

    return (
        <>
            <Helmet title="SingIn"/>
        <section className="singin">
            <Container >
            <Row >
                <Col lg={{span:6, offset:3 }} className='my_form'>
                <h2 className='text-center'>SING IN</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email Address" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <div id='message-div'></div>
        <p> Have No Account? <NavLink to={'/register'}className='nav-link my-link'>Register!</NavLink> </p>
        <Button className='fb_form_btn' type="submit" onClick={()=> signInWithEmailAndPassword(email, password)}>
            Sing In </Button>
            <span className='fb_or_style'>OR</span>
            <GoogleSingup />
            <FacebookSingup />
                </Col>
            </Row>
        </Container>
        </section>
        </>
    )
}

export default Singin

