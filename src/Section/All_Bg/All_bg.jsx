import React from 'react'
import bg_img from '../../Image/all-bg2.jpg'
import { Container } from 'react-bootstrap'
import './All_Bg.css'

const All_bg = ({text, text2}) => {
  return (
    <>
      <section className="all_bg">
      <img src={bg_img} alt="" />
        <div className="all-text">
          <h2>{text}</h2>
          <h4>{text2}</h4>
        </div>
      </section>
    </>
  )
}

export default All_bg
