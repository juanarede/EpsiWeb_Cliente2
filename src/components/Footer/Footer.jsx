import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
   <div style={{marginTop:"-5rem"}} className='footer-section'>
  
          <footer className=" text-center footer-section " id="contact">
            <div className="container text-center   ">
              <div style={{marginTop:"5rem"}}  className="row ">
              <div className='col-4'>
              <h4 className="d-flex justify-content-start" style={{color:"#fff",width:"10rem", marginBottom:"1rem"}} >Logo </h4>

<p style={{ color: "#fff" }} class="text-start">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
</p>
          </div>

          <div className='linea col-1'>
          <hr    class="vertical" width="2px" noshade="noshade"/>
          </div>
          <div  className='col-3'>
          <a style={{textDecoration:"none", marginTop:"1rem", marginBottom:"1rem",}} class="nav-link me-lg-3 text-start text-uppercase fw-bold" href="#service" title='Service'>
                 SOBRE NOSOTROS
                  </a>
                <a style={{textDecoration:"none" , marginBottom:"1rem"}} class="nav-link me-lg-3  text-start text-uppercase fw-bold" href="#aboutus" title='About'>
                SERVICIOS
                </a>
                <a style={{textDecoration:"none", marginBottom:"1rem"}} class="nav-link me-lg-3 text-start text-uppercase fw-bold" href="#precios" title='Price'>
                 PORTAFOLIO
                </a>
                <a style={{textDecoration:"none", marginBottom:"1rem"}} class="nav-link me-lg-3 text-start text-uppercase fw-bold" href="#precios" title='Price'>
                 CONTACTO
                </a>
          </div>
          <div className='linea col-1'>
          <hr style={{color:"#fff"}}  class="vertical" width="2px" noshade="noshade"/>
          </div>
          <div className='col-3'>
          <p style={{ color: "#fff" }} class="text-start">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
</p>
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
  )
}

export default Footer