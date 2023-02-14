import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
      <div style={{ marginTop: "-5rem" }} className="footer-section">
        <footer className=" text-center footer-section " id="contact">
          <div className="container text-center   ">
            <div style={{ marginTop: "5rem" }} className="row ">
              <div className="col-12 col-lg-4">
                <h4
                  className="d-flex justify-content-start"
                  style={{
                    color: "#fff",
                    width: "10rem",
                    marginBottom: "1rem",
                  }}
                >
                  Logo{" "}
                </h4>

                <p style={{ color: "#fff" }} class="text-start text-responsive">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>

              <div className="linea col-1 d-none d-sm-block">
                <hr class="vertical" width="2px" noshade="noshade" />
              </div>
              <div className="col-12 col-lg-3">
                <a
                  style={{
                    textDecoration: "none",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    color: "#fff",
                  }}
                  class="nav-link me-lg-3 text-start text-uppercase fw-bold"
                  href="#service"
                  title="Service"
                >
                  SOBRE NOSOTROS
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    marginBottom: "1rem",
                    color: "#fff",
                  }}
                  class="nav-link me-lg-3  text-start text-uppercase fw-bold"
                  href="#aboutus"
                  title="About"
                >
                  SERVICIOS
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    marginBottom: "1rem",
                    color: "#fff",
                  }}
                  class="nav-link me-lg-3 text-start text-uppercase fw-bold"
                  href="#precios"
                  title="Price"
                >
                  PORTAFOLIO
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    marginBottom: "1rem",
                    color: "#fff",
                  }}
                  class="nav-link me-lg-3 text-start text-uppercase fw-bold"
                  href="#precios"
                  title="Price"
                >
                  CONTACTO
                </a>
              </div>
              <div className="linea col-1 d-none d-sm-block">
                <hr
                  style={{ color: "#fff" }}
                  class="vertical"
                  width="2px"
                  noshade="noshade"
                />
              </div>
              <div className="col-12 col-lg-3">
                <p
                  style={{ color: "#fff", marginTop: "1rem" }}
                  class="text-start"
                >
                  Seguinos en nuestras Redes
                </p>
                <div className="text-start">
                  <img
                    className="red-social"
                    src="https://uploads-ssl.webflow.com/60af88a5233e422dc4f1f472/60b0dfde88780c69eb5758df_FB.svg"
                  />

                  <img
                    className="red-social"
                    src="https://uploads-ssl.webflow.com/60b05ed14ad9e52e356697b8/60b0faf22717fc829eecd466_IG.svg"
                  />
                  <img
                    className="red-social"
                    src="https://uploads-ssl.webflow.com/60af88a5233e422dc4f1f472/60b0dfdd4901f21e4a7e0b5e_Twitter.svg"
                  />
                  <img
                    className="red-social"
                    src="https://uploads-ssl.webflow.com/60af88a5233e422dc4f1f472/60b0dfdd4ad9e5809d69776f_LinkedIn.svg"
                  />
                </div>
              </div>
            </div>

            <div className='row'>
            <div style={{marginTop:"10rem", color:"#fff"}} className='col'>
            &copy; EpsiWeb 2022. All Rights Reserved.
            </div>

            </div>
              


          </div>
        </footer>
      </div>

      {/* <div className="footer-section">
    <footer style={{marginTop:"8rem"}} >
        <div  className='container'>
        <div  className='row'>
         
        </div>

        </div>
        </footer>
        </div> */}
    </>
  );
}

export default Footer