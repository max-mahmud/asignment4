import React from 'react'
import Helmet from '../../Component/Helmet/Helmet'
import All_bg from '../../Section/All_Bg/All_bg'
import allImage from '../../Image/About_hero.jpg'
import Project from '../../Section/Project/Project'
import All_Info from '../../Section/All_Info/All_Info'
import Contact from '../../Component/Contact/Contact'

const About = () => {
  return (
    <>
        <Helmet title={'About'}/>
        <All_bg text={'about us'} text2='home/about' />
        <All_Info all_image={allImage} all_heading='The Best Tech Company' all_sub_heading='About Us' all_text="Our critical examination of digital twins and their potential in the world of urban sustainability shows these recent technological developments have proven financial and sustainability benefits for public and private organizations."/>
        <Project />
        <Contact />
    </>
  )
}

export default About