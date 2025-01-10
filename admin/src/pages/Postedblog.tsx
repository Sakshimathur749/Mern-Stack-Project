import React from 'react'
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb'
import PostedBlog from '../components/Blog/PostedBlog'

const Postedblog = () => {
  return (
    <>
    <Breadcrumb pageName="Blogs" />
    <PostedBlog/>
  </>
  )
}

export default Postedblog
