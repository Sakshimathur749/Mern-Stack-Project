import React from 'react'
import Commonhero from '../components/Commonhero'
import CareerDetails from '../components/CareerDetails'
import Herobanner from '../components/herobanner'

const Career = () => {
  return (
    <div>
        <Commonhero name='Career'/>
        <Herobanner/>
        <CareerDetails/>
    </div>
  )
}

export default Career