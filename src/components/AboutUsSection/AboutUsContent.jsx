import React from "react";
import Team from '../../assets/img/about-us2.jpg'
function AboutUsContent() {
    
    return(
        <main>
         <section class="presentation">
          <div class="introduction">
            <div class="intro-text">
              <h1>Lorem Ipsum is simply dummy text</h1>
              <p>
                {" "}
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop
              </p>
            </div>
          </div>
          <div class="cover">
            <img src={Team} alt="matebook" />
          </div>
        </section>
        </main>
    )
}

export default AboutUsContent;