import React from "react";
import AboutUsHeader from "./AboutUsHeader";
import AboutUsContent from "./AboutUsContent";
import Navbar from "../Navbr/Navbar";
import Footer from "../Footer/Footer";

function AboutUsSection() {
    return(
        <>
        <Navbar/>
        <AboutUsHeader/>
        <AboutUsContent/>
        <Footer/>
        </>
    )
}
export default AboutUsSection;