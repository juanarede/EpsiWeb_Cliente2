import React from 'react';
import Image from "../../assets/img/sin-imagen.jpg";

function AboutUs() {
  return (
    <>
        <div  className="about-us section-padding " data-scroll-index='1'>
  <div className="container">
    <div className="row">
      <div className="col-md-12 section-title text-center">
        <h3>Lorem Ipsum is simply dummy text</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <span className="section-title-line"></span> </div>
      <div className="col-md-6 mb-50">
        <div className="section-info">
          <div className="sub-title-paragraph">
          <hr
                class="mb-3 mt-0   "
                style={{width:"70px", backgroundColor: "#0158a2", height: "3px"}}
                />
            <h4>Lorem Ipsum is simply dummy</h4>
          
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <a href="#" class="anchor-btn">Learn more <i class="fas fa-arrow-right pd-lt-10"></i></a> </div>
      </div>
      <div className="col-md-6 mb-50">
        <div className="section-img"> <img src={Image} alt="" class="img-responsive"/> </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AboutUs