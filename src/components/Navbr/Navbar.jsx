import { AppBar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-2.png";


import "./Navbar.css";

function Navbar() {
  const [navbarScroll, setNavbarScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  

  return (
    
      <AppBar
        sx={
          navbarScroll
            ? {
                backgroundColor: "#000",
                transition: "0.3s",
                width: "100%",
              }
            : {
                backgroundColor: "#000" ? "transparent" : "#000",
                boxShadow: 0,
                transition: "0.3s",
                width: "100%",
              }
        }
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container d-flex justify-content-start navegacion d-flex justify-content-between">
          <Link to="/">
           <a className="navbar-brand fw-bold" href="#page-top" title="Home page">
            {/*<h3 style={{ color: "#ffff" }}>Logo</h3>*/}<img src={Logo} alt="epikka-logo-type-frontend" className="logo-img"/>
           </a>
          </Link>
          

          <button
            style={{ color: "#ffff" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className=" navbar-nav ms-auto me-2 my-2 my-lg-0">
              <li className="nav-item">
                <Link to="/servicios">
                  <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="/servicios">
                    Servicios
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portafolio">
                <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="/portafolio">
                  Portafolio
                </a>
                </Link>           
              </li>
              <li className="nav-item">
                <Link to="/metadata">
                <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="/metadata">
                  Metadata
                </a>
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="/about">
                <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="/about">
                  Sobre Nosotros
                </a>
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="/contact">
                    <a style={{fontWeight:"bold"}} href="/contact">Contacto</a>
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </AppBar>  
    
  );
}

export default Navbar;
