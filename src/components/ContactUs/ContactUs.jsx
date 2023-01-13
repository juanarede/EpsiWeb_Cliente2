import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
       <section className="bg-section">
        <div className="about-us section-padding " data-scroll-index="1">
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-md-4 mb-50">
                <div className="section-info">
                  <div className="sub-title-paragraph">
                    <hr
                      class="mb-3 mt-0 divider   "
                      style={{
                        width: "70px",
                        backgroundColor: "#0158a2",
                        height: "3px",
                      }}
                    />
                    <h4>Lorem Ipsum is simply dummy</h4>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
             
              <div style={{ marginTop: "-5rem" }} className="col-md-4 ">
                <div className="contact_form">
                  <div className="formulario">
                    <form action="submeter-formulario.php" method="post">
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
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}

export default ContactUs;
