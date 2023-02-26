import React from "react";
import "./PortfolioContent.css"
import portfolioimg from "../../assets/img/serviceimg.jpg"
import imgrandom from "../../assets/img/img_random.png"

function PortfolioContent() {

    return (
      <>
        <section class="about_section">
          <div class="container">
            <div class="row">
              <div class="col-md-6 px-0">
                <div class="img-box">
                  <img src={portfolioimg} alt="" />
                </div>
              </div>
              <div class="col-md-5">
                <div class="detail-box">
                  <div class="heading_container">
                    <hr />
                    <h2>Lorem Ipsum is simply</h2>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="fruit_section layout_padding">
          <div class="container">
            <div class="heading_container">
              <hr />
              <h2>Lorem Ipsum</h2>
            </div>
          </div>
          <div class="container">
            <div class="fruit_container">
              <div class="box">
                <img src={imgrandom} alt="" />
                <div class="link_box">
                  <h5>Lorem Ipsum</h5>
                  <a href="">Lorem Ipsum</a>
                </div>
              </div>
              <div class="box">
                <img src={imgrandom} alt="" />
                <div class="link_box">
                  <h5>Lorem Ipsum</h5>
                  <a href="">Lorem Ipsum</a>
                </div>
              </div>
              <div class="box">
                <img src={imgrandom} alt="" />
                <div class="link_box">
                  <h5>Lorem Ipsum</h5>
                  <a href="">Lorem Ipsum</a>
                </div>
              </div>
              <div class="box">
                <img src={imgrandom} alt="" />
                <div class="link_box">
                  <h5>Lorem Ipsum</h5>
                  <a href="">Lorem Ipsum</a>
                </div>
              </div>
              <div class="box">
                <img src={imgrandom} alt="" />
                <div class="link_box">
                  <h5>Lorem Ipsum</h5>
                  <a href="">Lorem Ipsum</a>
                </div>
              </div>
              <div class="box">
                <img src={imgrandom} alt="" />
                <div class="link_box">
                  <h5>Lorem Ipsum</h5>
                  <a href="">Lorem Ipsum</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="fruit_section layout_padding">
        <div class="container">
            <div class="heading_container">
              <hr />
              <h2>Lorem Ipsum</h2>
            </div>
          </div>
          <div class="container">
      
            <div class="row">
            <div class="col-md-6 px-0">

                  <img className="responsive-mockup" src={portfolioimg} alt="" />
     
              </div>
              <div class="col-md-2 px-0">
                <div class="mockup" data-tilt>
                  <div class="iphone">
                    <div class="notch">
                      <div class="speaker"></div>
                      <div class="camera"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="mockup" data-tilt>
                  <div class="iphone">
                    <div class="notch">
                      <div class="speaker"></div>
                      <div class="camera"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
    
}
export default PortfolioContent;