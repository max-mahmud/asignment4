import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Heading from '../../Component/Heading/Heading'
import './Service_offer.css'
const Service_offer = () => {
  const [sdata, setData] =useState([])
  useEffect(()=>{
    fetch('service.json')
    .then((res)=> res.json())
    .then((data)=> setData(data))
  }, [])
  return (
    <>
    <Heading of_sub_heading="Service offer" of_heading="What we offer" of_text="Complete mourning is the greatest mass and element. Until the casino is flattering. Mauris or Euismod wants. But football fans need to do their homework. Everyone has a home, mourning from always on, always and no laughter."/>
      <section className=" service_area bg-light">
        <Container >
            <Row >
               {
                sdata.map((item)=>(
                  <Col lg={4} md={6} key={item.id}>
                  <div className="service_item">
                    <div className="img_div">
                    <img className="img-cluid" src={item.image} alt="img" />
                    </div>
                    <div className="srv-body">
                    <h4>{item.heading}</h4>
                      <p>{item.text}</p>
                      <Button className='btn svr_btn' as={Link} to='/service'>Read more</Button>
                      </div>

                  </div>
              </Col>
                ))
               }


            </Row>
        </Container>
      </section>
    </>
  )
}

export default Service_offer