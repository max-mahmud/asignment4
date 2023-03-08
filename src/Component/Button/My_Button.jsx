import React from 'react'
import './button.css'

const My_Button = ({text}) => {
  return (
    <>
    <button className='btn btn-primary my_btn'>{text}</button>
    </>
  )
}

export default My_Button
