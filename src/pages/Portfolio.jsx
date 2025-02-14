import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import Portfolio from '../components/Portfolio'
import { Helmet } from 'react-helmet'


const Portiflio = () => {
  return (
    <div>
        <Helmet>
        <meta name="description" content="Explore our portfolio featuring RajasthaniSpices, a showcase of our expertise in creating digital solutions for the food industry. See how we enhanced the brand's online presence and business growth." />
        <meta name="keywords" content="Portfolio, RajasthaniSpices, digital solutions, food industry, brand development, website design, business growth, eCommerce solutions, digital presence, project showcase" />
      </Helmet>
      <Commonhero name={'Portfolio'}/>
      <Herobanner/>
      <Portfolio/>
    </div>
  )
}

export default Portiflio
