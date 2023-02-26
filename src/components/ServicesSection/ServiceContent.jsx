import React from "react";
import "./ServiceContent.css"
import Forms from "../Forms/Forms"

import ServiceImg from "../../assets/img/serviceimg.jpg"

function ServiceContent() {

    return (
      <>
        <div class="container">
          <div class="row">
            <div style={{marginTop:"7rem"}} class="col-sm-7 first-column ">
            <hr
                class="mb-3 mt-0   "
                style={{width:"70px", backgroundColor: "#df92fe", height: "3px"}}
                />
            <h2>Lorem Ipsum is simply dummy</h2>
              <p>
              Lorem Ipsum 
              </p> 
              <img className="img-aboutus img-responsive inspace-10 box-radius" style={{borderRadius:"0.3rem", width:"39rem"}} src={ServiceImg} alt=""/>
            </div>
            <div style={{marginTop:"8rem", marginBottom:"10rem"}} class="col-sm-5 ">

                <h3 className="text-center">
                 Envianos Tu Consulta
                 </h3>
              <Forms />

            </div>

            
          </div>
     
        </div>
      </>
    );
    
}
export default ServiceContent;