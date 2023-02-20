import React from "react";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioContent from "./PortfolioContent";
import Navbar from "../Navbr/Navbar";
import Footer from "../Footer/Footer";

function PortfolioSection() {

    return(
        <>
        <Navbar/>
        <PortfolioHeader/>
        <PortfolioContent/>
        <Footer/>
        </>
       
    )
    
}
export default PortfolioSection;