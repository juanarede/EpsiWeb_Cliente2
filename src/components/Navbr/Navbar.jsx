import { AppBar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import headerimg from "../../assets/img/headerimage.jpg";
import headerimg2 from "../../assets/img/headerimage2.jpg";
import headerimg3 from "../../assets/img/headerimage3.jpg";

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
            <h3 style={{ color: "#ffff" }}>Logo</h3>
          </a>

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
                <Link to="servicios">
                  <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="#">
                    Servicios
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="#">
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="#">
                  Metadata
                </a>
              </li>
              <li className="nav-item">
                <a style={{fontWeight:"bold"}} class="nav-link me-lg-3" href="#">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a style={{fontWeight:"bold"}} href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </AppBar>

       


    






























       <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner " data-scroll-index="0">
              <div className="banner-overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <div
                        style={{ Display: "block" }}
                        className=" text-start "
                      >
                        <h1 className="text-capitalize">
                          Lorem Ipsum is simply dummy text
                        </h1>
                        <p className="text-block text-start">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec justo rhoncus, pharetra dui ut,
                          cursus turpis. Aenean tincidunt vitae ligula eget
                          congue.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="banner2 " data-scroll-index="1">
              <div className="banner-overlay2">
              <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <div
                        style={{ Display: "block" }}
                        className=" text-start "
                      >
                        <h1 className="text-capitalize">
                          Lorem Ipsum is simply dummy text
                        </h1>
                        <p className="text-block text-start">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec justo rhoncus, pharetra dui ut,
                          cursus turpis. Aenean tincidunt vitae ligula eget
                          congue.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="banner3 text-center" data-scroll-index="2">
              <div className="banner-overlay3">
              <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <div
                        style={{ Display: "block" }}
                        className=" text-start "
                      >
                        <h1 className="text-capitalize">
                          Lorem Ipsum is simply dummy text
                        </h1>
                        <p className="text-block text-start">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec justo rhoncus, pharetra dui ut,
                          cursus turpis. Aenean tincidunt vitae ligula eget
                          congue.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 

      {/* <div className="banner text-center" data-scroll-index="0">
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
      
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;
