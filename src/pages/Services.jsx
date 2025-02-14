import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import OurVision from '../components/OurVision'
import AllServices from '../components/AllServices'
import { Helmet } from 'react-helmet'
Helmet

const Services = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Explore our wide range of services including web development, mobile app development, digital marketing, graphic designing, and more. Discover how our expert team can help grow your business." />
        <meta name="keywords" content="web development, mobile app development, digital marketing, graphic designing, IT services, business solutions, online marketing, SEO, ecommerce services, software development" />
      </Helmet>
      <Commonhero name={'Services'}/>
      <Herobanner/>
      <AllServices/>
      <OurVision/>
      
    </div>
  )
}

export default Services
