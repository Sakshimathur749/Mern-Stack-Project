import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import OurVision from '../components/OurVision'
import AllServices from '../components/AllServices'

const Services = () => {
  return (
    <div>
      <Commonhero name={'Services'}/>
      <Herobanner/>
      <AllServices/>
      <OurVision/>
      
    </div>
  )
}

export default Services
