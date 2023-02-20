import React from "react";
import Forms from "../Forms/Forms";
import './ContactSection.css';

function ContactHeader() {
    
    return(
        <div className='header-contact'>
        <div className='contenedor head'>
         <div className="main">
            <h2 className='title-head'>Titulo para la seccion de Contacto</h2>
         </div>
         <div className="form-box">
            <Forms/>
         </div>
         
       </div>
      </div>
    )
}
export default ContactHeader;