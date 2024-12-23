import React from 'react'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import Team from '../components/Team'
import OurVision from '../components/OurVision'
import OurMission from '../components/OurMission'
import OurService from '../components/OurService'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import History from '../components/History'

const About = () => {
  return (
    <div>
        <Commonhero name={'About us'}/>
        <Herobanner/>
        <History/>
        <Services/>
        <OurService/>
        <OurMission/>
        <OurVision/>
        <Testimonials/>
        {/* <Team/> */}
        
    </div>
  )
}

export default About
