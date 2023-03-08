import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Project.css'
import SingleProject from '../../Component/SingleProject/SingleProject'
const Project = () => {
  return (
    <>
      <section className="project">
        <Container>
            <Row>
                <SingleProject  heading={'221+'} text={"Happy Clients "}/>
                <SingleProject  heading={'521+'} text={"SuccessFull Projects"}/>
                <SingleProject  heading={'1432+'} text={"Hours Of Support"}/>
                <SingleProject  heading={'15'} text={"Hard Workers"}/>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Project
