import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import ContactUs from '../components/ContactUs'
import Map from '../components/Map'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Get in touch with us for any inquiries, support, or business opportunities. Visit our contact page for our details, office location, and contact form to reach out."
        />
        <meta
          name="keywords"
          content="Contact us, contact details, support, business inquiries, office location, contact form, customer service, reach us, get in touch, business opportunities"
        />
      </Helmet>
      <Commonhero name={'Contact us'}/>
      <Herobanner/>
      <ContactUs/>
      <Map/>
      
    </div>
  )
}

export default Contact
