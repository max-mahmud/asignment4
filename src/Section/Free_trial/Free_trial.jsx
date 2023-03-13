import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Free_trial.css";
import trailImage from "../../Image/phone.png";
import { Link, NavLink } from "react-router-dom";

const Free_trial = () => {
  return (
    <>
      <section className="free_trial">
        <Container>
          <Row>
            <Col md={6}>
              <div className="trial_img">
                <img src={trailImage} alt="Img" />
              </div>
            </Col>
            <Col md={6}>
              <div className="trial_text">
                <h5>Experiance by your own</h5>
                <h2>Free trial for 30 day</h2>
                <p>
                  Find the right web developer for your business takes time and
                  research, but by knowing what you’re looking for
                </p>
                <div className="trial_flex">
                  <div className="trial_btn">
                    <button className="trial_left_btn">
                      <NavLink to={"/service"}>Service</NavLink>
                    </button>
                    <button className="trial_right_btn">
                      <NavLink to={"/register"}>Join LightX</NavLink>
                    </button>
                    <span>OR</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Free_trial;
