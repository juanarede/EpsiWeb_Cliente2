import React from 'react';
import Navbar from '../Navbr/Navbar';
import Footer from '../Footer/Footer';
import ServiceHeader from './ServiceHeader';

import './ServiceSection.css';
import ServiceContent from './ServiceContent';

function ServiceSection() {
  return (
    <>
    <Navbar/>
     <ServiceHeader/>
     <ServiceContent />
    <Footer/>
 </>
  )
}

export default ServiceSection;