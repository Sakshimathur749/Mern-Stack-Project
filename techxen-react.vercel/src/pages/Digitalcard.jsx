import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import DigitalCard from '../components/DigitalCard'
import { Helmet } from 'react-helmet'

const Digitalcard = () => {
  return (
    <div>
       <Helmet>
        <meta
          name="description"
          content="Discover our Digital Card Service that provides secure, customizable, and easy-to-use digital business cards. Enhance your networking and branding with our advanced digital card solutions."
        />
        <meta
          name="keywords"
          content="Digital Card, digital business card, virtual business card, customizable digital card, secure digital cards, networking tools, electronic business cards, digital card solutions"
        />
      </Helmet>
      <Commonhero name={'Digital Card'}/>
      <Herobanner/>
      <DigitalCard/>
    </div>
  )
}

export default Digitalcard
