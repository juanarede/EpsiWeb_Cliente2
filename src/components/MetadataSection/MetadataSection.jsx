import React from "react";
 import MetadataHeader from "./MetadataHeader";
import MetadataContent from "./MetadataContent";
import Navbar from "../Navbr/Navbar";
import Footer from "../Footer/Footer";


function MetadataSection(params) {
    return(
        <>
        <Navbar/>
         <MetadataHeader/>
        <MetadataContent/>
        <Footer/>
        </>
    )
}
export default MetadataSection;