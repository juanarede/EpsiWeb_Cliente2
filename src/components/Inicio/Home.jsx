import React from 'react'
import Navbar from "../Navbr/Navbar"
import AboutUs from "../Home/AboutUs/AboutUs"
import Service from "../Home/Services/Service"
import Portafolio from '../Home/Portafolio/Portafolio'
import MidSection from '../Home/MidSection/MidSection'
import ContactUs from '../Home/ContactUs/ContactUs'
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