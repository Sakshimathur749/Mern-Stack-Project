import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Box from '../components/Box'
import Ourcompany from '../components/Ourcompany'
import Services from '../components/Services'
import ItSolution from '../components/ItSolution'
import Ourproject from '../components/Ourproject'
import PrincingPlan from '../components/PrincingPlan'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import { useLocation } from 'react-router'

const Home = () => {

  
  return (
    <div>
        <Main/>
        <Box/>
        <Ourcompany/>
        <Services/>
        <ItSolution/>
        {/* <Ourproject/>
        <PrincingPlan/> */}
        <Testimonials/>
        <Blog/>
    </div>
  )
}

export default Home