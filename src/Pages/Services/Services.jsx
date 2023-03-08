import React from 'react'
import Helmet from '../../Component/Helmet/Helmet'
import All_bg from '../../Section/All_Bg/All_bg'
import All_Info from '../../Section/All_Info/All_Info'
import serviceImage from '../../Image/service.jpg'
import Service_offer from '../../Section/Service_offer/Service_offer'

const Services = () => {
  return (
    <>
    <Helmet title={'Service'}/>
    <All_bg text={'our Service'} text2='home/service'/>
    <All_Info all_image={serviceImage} all_heading='Your business
    is our concern' all_sub_heading='Services' all_text="Although subscribers are welcome to come to our downtown office and pick up newspapers that did not get delivered, we know that isn’t an easy option for many of you. Some of you are retired and/or live outside of town."/>
    <Service_offer/>
    </>
  )
}

export default Services
