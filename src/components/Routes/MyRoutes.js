import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import ServiceSection from "../ServicesSection/ServiceSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import MetadataSection from "../MetadataSection/MetadataSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import ContactSection from "../ContactSection/ContactSection";


function MyRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiceSection />} />
        <Route path="/portafolio" element={<PortfolioSection />} />
        <Route path="/metadata" element={<MetadataSection />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    );
  }
  
  export default MyRoutes;