import React from 'react'
import Navbar from "../Navbr/Navbar"
import Header from '../Header/Header'
import WhatWeDo from '../Inicio/WhatWeDo/WhatWeDo'
import HowWeDo from '../Inicio/HowWeDo/HowWeDo'
import Slogan from '../Inicio/Slogan/Slogan'

import ContactUs from '../Inicio/ContactUs/ContactUs'
import Footer from '../Footer/Footer'
function Home() {
  return (
   <>
    <Navbar/>
    <Header/>
    <WhatWeDo/>
    <HowWeDo/>
    <Slogan/>
    <ContactUs/>
    <Footer/>
   </>
  )
}

export default Home