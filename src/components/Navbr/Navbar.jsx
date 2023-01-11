import { AppBar } from '@mui/material';
import React,{useState} from 'react'

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
    <>
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
          <a className="navbar-brand fw-bold" href="#page-top" title="Top-Page">
            <img className="logonav" src="" alt="Logo" title="Logo" />
          </a>

          <button
           style={{color:"#ffff"}}
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
                <a class="nav-link me-lg-3" href="#service" title="About">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link me-lg-3" href="#aboutus" title="About">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link me-lg-3" href="#precios" title="Price">
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" title="Contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </AppBar>

      <div className="banner text-center" data-scroll-index="0">
        <div className="banner-overlay">
          <div className="container">
            <h1 className="text-capitalize">
              Lorem Ipsum is simply dummy text
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec justo rhoncus, pharetra dui ut, cursus turpis.
              Aenean tincidunt vitae ligula eget congue.
            </p>
            {/* <a href="#" class="banner-btn">
              Get Started
            </a>{" "} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar