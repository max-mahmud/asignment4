import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import  auth  from '../../Component/FireBase/Firebase.init';
import { NavLink } from 'react-router-dom';
import GoogleSingup from '../../Component/GoogleSingUp/GoogleSingup';
import FacebookSingup from '../../Component/Facebook/FacebookSingup';
import Githubsingup from '../../Component/Github/Githubsingup';

const Register = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const massageDiv = document.getElementById('massageDiv')
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    massageDiv.innerHTML ="Something Wrong"
  }
  if (loading) {
    massageDiv.innerHTML ="Loading..."
  }
  if (user) {
    massageDiv.innerHTML ="Registered Successfully"
  }

  return (
    <section className="register">
        <Container>
            <Row>
                <Col lg={{span:6, offset:3}} md={{span:8, offset:2}} className='my-form'>
                <h2 className='text-center'>Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Address" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <div id="massageDiv"></div>
                    <div>
                        <p>Already Have an Account? <NavLink to={'/singin'}className='nav-link my-link'>Sing In!</NavLink> </p>
                    </div>
                    <Button className='rg_form_btn' type="submit" onClick={() => createUserWithEmailAndPassword(email, password)}>
                        Submit
                    </Button>
                    <span className='rg_or_style'>OR</span>
                    <GoogleSingup />
                    <FacebookSingup />
                    <Githubsingup />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Register
