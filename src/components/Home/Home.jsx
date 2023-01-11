import React from 'react'
import Navbar from "../Navbr/Navbar"
import AboutUs from "../AboutUs/AboutUs"
import Service from "../Services/Service"
import Portafolio from '../Portafolio/Portafolio'
import MidSection from '../MidSection/MidSection'
function Home() {
  return (
   <>
    <Navbar/>
    <AboutUs/>
    <Service/>
    <Portafolio/>
    <MidSection/>
   </>
  )
}

export default Home