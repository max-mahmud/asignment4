import React from 'react'
import Helmet from '../../Component/Helmet/Helmet'
import All_Info from '../../Section/All_Info/All_Info'
import Slider from '../../Section/Slider/Slider'
import allImage from '../../Image/About_hero.jpg'
import Service_offer from '../../Section/Service_offer/Service_offer'
import Contact from '../../Component/Contact/Contact'
import Free_trial from '../../Section/Free_trial/Free_trial'
import LateshProject from '../../Section/LateshProject/LateshProject'

const Home = () => {
   
  return (
    <>
    <Helmet title = {"Home"} />
      <Slider />
      <All_Info all_image={allImage} all_heading='The Best Tech Company' all_sub_heading='About Us' all_text="Our critical examination of digital twins and their potential in the world of urban sustainability shows these recent technological developments have proven financial and sustainability benefits for public and private organizations."/>
      <Service_offer />
      <Free_trial />
      <LateshProject />
      <Contact />
    </>
  )
}

export default Home
