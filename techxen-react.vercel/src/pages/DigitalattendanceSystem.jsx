import React from 'react'
import Commonhero from '../components/Commonhero'
import DigtialAttendance from '../components/DigitalAttendance'
import Herobanner from '../components/Herobanner'
import { Helmet } from 'react-helmet'

const DigitalattendanceSystem = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Explore our Digital Attendance System that helps streamline employee attendance, ensuring accurate tracking and management with secure and automated features. Improve productivity with our cutting-edge system."
        />
        <meta
          name="keywords"
          content="Digital Attendance System, employee attendance software, attendance tracking, automated attendance, secure attendance management, digital attendance solution, workforce management"
        />
      </Helmet>
      <Commonhero name={'Attendance System'}/>
      <Herobanner/>
      <DigtialAttendance/>
    </div>
  )
}

export default DigitalattendanceSystem
