import React from 'react'
import All_bg from '../../Section/All_Bg/All_bg'
import Heading from '../../Component/Heading/Heading'
import SingleBlog from '../../Section/SingleBlog/SingleBlog'
import Helmet from '../../Component/Helmet/Helmet'

const Blog = () => {
  return (
    <>
    <Helmet title="Blog"/>
      <All_bg text={'Blog'} text2="home/blog" />
      <Heading of_heading="Follow WEEK TWO Live Updates For Staley Trial Here" of_sub_heading="blog" of_text='Check out our Latest News!'/>
      <SingleBlog />
    </>
  )
}

export default Blog
