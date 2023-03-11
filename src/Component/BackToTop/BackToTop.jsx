import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import './BackToTop.css'

const BackToTop = () => {
  return (
    <div>
    <ScrollToTop smooth className='topBtn' color='#fff'/>
  </div>
  )
}
export default BackToTop
