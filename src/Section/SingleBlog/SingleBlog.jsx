import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './SingleBlog.css'
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import { BsFillCalendar2WeekFill,BsPersonLinesFill } from "react-icons/bs";
import PaginationBtn from '../../Component/pagination/PaginationBtn'
import image1 from '../../Image/bn2.jpg'
import image2 from '../../Image/all-bg.jpg'
import image3 from '../../Image/bn3.jpg'


const SingleBlog = () => {
    const [bdata, setBdata] =useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBdata(data))
    },[])
  return (
    <>
      <section className="single_blog">
        <Container>
            <Row>
                <Col lg='8'  className="blog_wrapper">
                {
                        bdata.map((item)=>(
                           <>
                            <div className="blog_wrapper2">
                            <Row >
                            <Col md={6} >
                                <div className="blog_img_wrapper">
                                <div className="blog_img">
                                    <img src={item.image} alt="img" />
                                </div>
                                </div>
                            </Col>
                            <Col md={6}>
                            <div className="blog_text">
                                <h4>{item.heading}</h4>
                                <p>{item.text}</p>
                            </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                            <div className="date">
                                <div className="date_text">
                                    <p><span><BsFillCalendar2WeekFill /></span>11 March, 2023</p>
                                    <p><span><BsPersonLinesFill /></span> by <NavLink>Jhon Doe</NavLink></p>
                                </div>
                                <Button className='btn blog_btn'><NavLink>Learn More</NavLink></Button>
                            </div>
                            </Col>
                        </Row>
                            </div>
                           </>
                        ))
                        }
                    <PaginationBtn />
                </Col>
                <Col lg='4' className='right_wrapper'>
                    <div className="blog_right">
                        <div className="input-div">
                            <Form.Control type="email" placeholder="Search Here ..." />
                            <Button className='btn newslater_btn' type="submit">
                                <AiOutlineSearch />
                            </Button>
                        </div>
                        <div className="catagory">
                            <h4>Catagory</h4>
                            <NavLink >Genaral <span>(8)</span></NavLink>
                            <NavLink >Design <span>(12)</span></NavLink>
                            <NavLink >Creative <span>(3)</span></NavLink>
                            <NavLink >Educational <span>(7)</span></NavLink>
                        </div>

                    <div className="recent_post">
                        <h4>Recent Post</h4>
                        <div className="post_div">
                        <img src={image1} alt="img" />
                        <div className="post_taxt">
                            <h5>For the competitive landscape</h5>
                            <p>20 January</p>
                        </div>
                        </div>

                        <div className="post_div">
                        <img src={image2} alt="img" />
                        <div className="post_taxt">
                            <h5>The report combines extensive</h5>
                            <p>21 January</p>
                        </div>
                        </div>

                        <div className="post_div">
                        <img src={image3} alt="img" />
                        <div className="post_taxt">
                            <h5>The report combines extensive</h5>
                            <p>25 January</p>
                        </div>
                        </div>
                    </div>
                    <div className="tags">
                        <h4>Tags</h4>
                        <div className="tags_wrapper">
                        <NavLink>App</NavLink>
                        <NavLink>It</NavLink>
                        <NavLink>Business</NavLink>
                        <NavLink>Mac</NavLink>
                        <NavLink>Design</NavLink>
                        <NavLink>Office</NavLink>
                        <NavLink>Studio</NavLink>
                        <NavLink>Smart</NavLink>
                        <NavLink>Tips</NavLink>
                        <NavLink>Marketing</NavLink>
                        <NavLink>Creative</NavLink>
                        </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default SingleBlog
