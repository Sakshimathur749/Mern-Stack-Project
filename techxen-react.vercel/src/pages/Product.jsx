import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import Products from '../components/Products'

const Product = () => {
  return (
    <div>
      <Commonhero name={'Products'}/>
      <Herobanner/>
      <Products/>
    </div>
  )
}

export default Product
