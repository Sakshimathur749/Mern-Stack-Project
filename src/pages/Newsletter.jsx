import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import Newletter from '../components/Newletter'
import { Helmet } from 'react-helmet'

const Newsletter = () => {
  return (
    <div>
       <Helmet>
        <meta
          name="description"
          content="Subscribe to our newsletter to get the latest updates, offers, and quotes directly to your inbox. Stay informed with our regular newsletter."
        />
        <meta
          name="keywords"
          content="Newsletter, subscribe, get quotes, latest updates, offers, email subscription, stay informed, sign up, regular newsletter"
        />
      </Helmet>
      <Commonhero name={'Get-Quotes'}/>
      <Herobanner/>
      <Newletter/>
    </div>
  )
}

export default Newsletter
