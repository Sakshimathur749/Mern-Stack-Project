import React from 'react'
import Commonhero from '../components/Commonhero'
import Herobanner from '../components/Herobanner'
import Products from '../components/Products'
import { Helmet } from 'react-helmet'

const Product = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Explore our innovative Digital Card Service and Digital Attendance System. Our solutions offer seamless management for businesses, enhancing efficiency with advanced features and easy integration. Learn more about our digital services." />
        <meta name="keywords" content="Digital Card Service, Digital Attendance System, digital solutions, business efficiency, employee attendance, digital card technology, business automation, attendance tracking, digital services, digital solutions for businesses" />
      </Helmet>
      <Commonhero name={'Products'}/>
      <Herobanner/>
      <Products/>
    </div>
  )
}

export default Product
