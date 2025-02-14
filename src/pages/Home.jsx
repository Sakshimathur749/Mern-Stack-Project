import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Ourcompany from '../components/Ourcompany'
import Services from '../components/Services'
import ItSolution from '../components/ItSolution'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
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
        <meta name="author" content=" Devexa & It Solution" />
        <title> Devexa & It Solution</title>
      </Helmet>
      <Main />
      <Brands/>
      <Ourcompany />
      <Services />
      <ItSolution />
      <Testimonials />
      <Blog />
    </div>
  );
}

export default Home