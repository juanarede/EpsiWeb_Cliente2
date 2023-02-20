import React from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

function MidSection() {
  return (
    <>
      <div className="testimonials">
  <div className="testimonials-overlay section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="owl-carousel owl-theme">
            <div className="testimonial-item text-center">
              <div className="icon"> <i class="fas fa-comments"></i> </div>
              <p className="m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="testimonial-author text-center">
                {/* <h5>Rup Jakhar</h5>
                <h6>Web Desinger</h6> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                               

                          
                              
    </>
  )
}

export default MidSection