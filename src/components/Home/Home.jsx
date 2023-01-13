import React from 'react'
import Navbar from "../Navbr/Navbar"
import AboutUs from "../AboutUs/AboutUs"
import Service from "../Services/Service"
import Portafolio from '../Portafolio/Portafolio'
import MidSection from '../MidSection/MidSection'
import ContactUs from '../ContactUs/ContactUs'
import Footer from "../Footer/Footer"
function Home() {
  return (
   <>
    <Navbar/>
    <AboutUs/>
    <Service/>
    <Portafolio/>
    <MidSection/>
    <ContactUs/>
    <Footer/>
   </>
  )
}

export default Home