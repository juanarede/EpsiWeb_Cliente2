import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import ServiceSection from "../ServicesSection/ServiceSection";


function MyRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiceSection />} />
      </Routes>
    );
  }
  
  export default MyRoutes