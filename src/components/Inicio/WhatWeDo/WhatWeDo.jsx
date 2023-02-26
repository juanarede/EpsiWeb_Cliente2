import React from 'react';

import Metrica from '../../../assets/img/metrica.jpg';
import "./WhatWeDo.css";

function WhatweDo() {
  return (
    <>
  <div  className="about-us section-padding " data-scroll-index='1'>
  <div className="container">
    <div className="row">
      <div className="text-center section-title ">
        <h3 className='mid-title'>Que es lo que hacemos...</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <span className="section-title-line"></span> </div>
      <div className="col-md-5 ">
        <div className="">
          <div className="">
          <hr
                class="mb-3 mt-0   "
                style={{width:"70px", backgroundColor: "#df92fe", height: "3px"}}
                />
            <h4>Lorem Ipsum is simply dummy</h4>
          
            <p className='textinicio'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          </div>
      </div>
      <div  className="col-md-6 mb-50">
        <div className="section-img"> <img src={Metrica} alt="" class="img-aboutus img-responsive inspace-10 box-radius"/> </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default WhatweDo;