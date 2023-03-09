import React from 'react'
import { HiEmojiSad } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import './NotPage.css'

const NotPage = () => {
  return (
    <>
        <div className="not_page">
        <h2><HiEmojiSad /></h2>
        <h3>404</h3>
        <h4>Page Not Found</h4>
        <NavLink>Back TO Home</NavLink>
        </div>
    </>
  )
}

export default NotPage
