import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import AllBlogsDetails from '../components/AllBlogsDetails'

const BlogDetails = () => {
  return (
    <div>
       <Commonhero name={'Blogs Details'}/>
      <Herobanner/>
      <AllBlogsDetails/>
    </div>
  )
}

export default BlogDetails
