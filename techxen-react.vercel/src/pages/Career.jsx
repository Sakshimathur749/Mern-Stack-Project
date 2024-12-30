import React from 'react'
import Commonhero from '../components/Commonhero'
import CareerDetails from '../components/CareerDetails'
import Herobanner from '../components/Herobanner'
import { Helmet } from 'react-helmet'

const Career = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Explore exciting career opportunities at our company. Join us to work in a dynamic environment, develop your skills, and grow professionally. Apply today!"
        />
        <meta
          name="keywords"
          content="career opportunities, job openings, join our team, work with us, dynamic work environment, professional growth, apply for job, career development"
        />
      </Helmet>
        <Commonhero name='Career'/>
        <Herobanner/>
        <CareerDetails/>
    </div>
  )
}

export default Career