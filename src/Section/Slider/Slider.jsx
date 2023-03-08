import { useState,useEffect } from 'react';
import {Carousel,Image} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import My_Button from '../../Component/Button/My_Button';
import './Slider.css'

function Slider() {
  const [banner, setBanner] =useState([]);
  useEffect(()=>{
    fetch("slider.json")
    .then(res => res.json())
    .then(data => setBanner(data))
  }, []);
  
  return (
    <Carousel className="my-slider">
            {banner.map((slider) => (
                <Carousel.Item key={slider.id}>
                <Image fluid className="d-block w-100" src={slider.img} alt="Slider" />
                <Carousel.Caption className="py-1">
                    <h5>{slider.subheading}</h5>
                    <h2>{slider.heading}</h2>
                    <p>{slider.text}</p>
                    <NavLink to={'/home'}><My_Button text={'Learn More'}/></NavLink>
                </Carousel.Caption>
                </Carousel.Item>
            ))}
            </Carousel>
  );
}

export default Slider;
