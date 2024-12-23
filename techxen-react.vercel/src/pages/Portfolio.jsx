import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import Portfolio from '../components/Portfolio'

const Portiflio = () => {
  return (
    <div>
      <Commonhero name={'Portfolio'}/>
      <Herobanner/>
      <Portfolio/>
    </div>
  )
}

export default Portiflio
