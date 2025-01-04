import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Box from '../components/Box'
import Ourcompany from '../components/Ourcompany'
import Services from '../components/Services'
import ItSolution from '../components/ItSolution'
import Ourproject from '../components/Ourproject'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import { useLocation } from 'react-router'
import { Helmet } from 'react-helmet'
import Brands from '../components/Brands'

const Home = () => {
  
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="We provide high-quality IT solutions including web development, mobile app development, digital marketing, and more to help your business grow."
        />
        <meta
          name="keywords"
          content="IT solutions, web development, mobile app development, digital marketing, software solutions, business growth, technology services"
        />
        <meta name="author" content="Devexa" />
        <title>Techxen</title>
      </Helmet>
      <Main />
      <Brands/>
      <Ourcompany />
      <Services />
      <ItSolution />
      {/* <Ourproject/>
        <PrincingPlan/> */}
      <Testimonials />
      <Blog />
    </div>
  );
}

export default Home