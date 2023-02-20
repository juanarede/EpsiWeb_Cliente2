import React, { useEffect, useState } from "react";
import '../Inicio/ContactUs/ContactUs.css';
import axios from "axios";
import Swal from "sweetalert2";

function Forms() {

  const [nombre, setNombre]= useState();
  const [email, setEmail]= useState();
  const [telefono, setTelefono]= useState();
  const [mensaje, setMensaje]= useState();

  const[formulario, setFormulario]=useState();

  

  //Envio de datos al Servidor
  const sendData= async (e)=>{
    e.preventDefault();
    formulario.reset();//Vaciamos campos de formulario
    const formData = new FormData();

    formData.append('nombre',nombre);
    formData.append('email',email);
    formData.append('telefono',telefono);
    formData.append('mensaje', mensaje);

    await axios
       .post('https://api.epsiweb.com/api/enviar', formData)
       .then(({data})=>{
          Swal.fire({
            icon:"success",
            text: data.message,
          });
       })

       
  }


  useEffect(()=>{
    setFormulario(document.getElementById('formu'));
  },[formulario]);
   
    

    return(
        <div style={{ marginTop: "-5rem" }} className="col-md-4 ">
                <div className="contact_form">
                  <div className="formulario">
                    <form onSubmit={sendData} id="formu">
                      <p>
                        <label for="nombre" class="colocar_nombre">
                          Nombre
                          <span className="obligatorio">*</span>
                        </label>
                        <input
                          type="text"
                          name="introducir_nombre"
                          id="nombre"
                          required="obligatorio"
                          placeholder="Escribe tu nombre"
                          onChange={(event)=>{setNombre(event.target.value)}}
                        />
                      </p>

                      <p>
                        <label for="email" className="colocar_email">
                          Email
                          <span className="obligatorio">*</span>
                        </label>
                        <input
                          type="email"
                          name="introducir_email"
                          id="email"
                          required="obligatorio"
                          placeholder="Escribe tu Email"
                          onChange={(event)=>{setEmail(event.target.value)}}
                        />
                      </p>

                      <p>
                        <label for="telefone" className="colocar_telefono">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="introducir_telefono"
                          id="telefono"
                          placeholder="Escribe tu teléfono"
                          onChange={(event)=>{setTelefono(event.target.value)}}
                        />
                      </p>

                      <p>
                        <label for="mensaje" className="colocar_mensaje">
                          Mensaje
                          <span className="obligatorio">*</span>
                        </label>
                        <textarea
                          name="introducir_mensaje"
                          class="texto_mensaje"
                          id="mensaje"
                          required="obligatorio"
                          placeholder="Deja aquí tu comentario..."
                          onChange={(event)=>{setMensaje(event.target.value)}}
                        ></textarea>
                      </p>

                      <button
                        className="css-button-gradient--1"
                        type="submit"
                        name="enviar_formulario"
                        id="enviar"
                      >
                        <p>Enviar</p>
                      </button>

                      <p class="aviso">
                        <span className="obligatorio"> * </span>los campos son
                        obligatorios.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
    )
    
}

export default Forms;

