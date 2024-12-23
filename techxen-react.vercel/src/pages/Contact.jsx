import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import ContactUs from '../components/ContactUs'
import Map from '../components/Map'

const Contact = () => {
  return (
    <div>
      <Commonhero name={'Contact us'}/>
      <Herobanner/>
      <ContactUs/>
      <Map/>
      
    </div>
  )
}

export default Contact
