import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import Icon from '../../Component/Logo/Icon'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../Component/FireBase/Firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
  const [user] =useAuthState(auth);
  const handleChange=()=>signOut(auth);
  return (
    <>
    <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container >
        <Navbar.Brand as={Link} to="/" ><Icon /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavLink to={'home'}  >Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to={'service'}>Service</NavLink>
          <NavLink to={'blog'}>Blog</NavLink>
          {
              user ? (<NavLink><Button className='header_btn btn' onClick={handleChange}>Sing Out</Button></NavLink>)
              : (<NavLink  to={'/singin'}><Button className='header_btn btn'>Sing In</Button></NavLink>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
