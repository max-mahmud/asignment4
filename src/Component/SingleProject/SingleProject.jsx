import React from 'react'
import './SingleProject.css'
import { Col } from 'react-bootstrap';

const SingleProject = ({heading,text}) => {
    return (
        <>
            <Col lg={3} md={6}>
                <div className="project_text">
                    <h3>{heading}</h3>
                    <h4>{text}</h4>
                </div>
            </Col>
        </>
    )
}

export default SingleProject
