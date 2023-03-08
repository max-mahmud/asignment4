import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import My_Button from '../../Component/Button/My_Button'
import './All_Info.css'

const All_Info = ({all_image,all_heading, all_sub_heading, all_text }) => {
  return (
    <>
      <section className="all_hero">
      <Container>
        <Row>
            <Col lg={6}>
                <div className="all_img">
                    <img src={all_image} alt="" />
                </div>
            </Col>
            <Col lg={6}>
                <div className="all_text">
                    <div className="all_text_wrapper">
                    <h4>{all_sub_heading}</h4>
                    <h2>{all_heading}</h2>
                    <p>{all_text}</p>
                    <NavLink to={'/about'}><My_Button text={'Read More'} /></NavLink>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default All_Info
