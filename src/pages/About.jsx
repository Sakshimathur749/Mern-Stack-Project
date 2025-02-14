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
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Learn more about our company, our mission, vision, and the services we provide. Explore our history, values, and what makes us the best choice for your needs."
        />
        <meta
          name="keywords"
          content="About us, company mission, company vision, services, team, history, testimonials, company values, our story, what we do"
        />
      </Helmet>
      <Commonhero name={"About us"} />
      <Herobanner />
      <History />
      <Services />
      <OurService />
      <OurMission />
      <OurVision />
      <Testimonials />
      {/* <Team/> */}
    </div>
  );
}

export default About
