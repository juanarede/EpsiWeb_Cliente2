import React from "react";
import "./MetadataContent.css";

function MetadataContent() {
  return (
    <>
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
            <img src="https://i.ibb.co/Sdzbr19/matebook.png" alt="matebook" />
          </div>
        </section>

        <img
          class="big-circle"
          src="https://svgshare.com/i/Dhx.svg"
          alt="big eclipse"
        />
        <img
          class="medium-circle"
          src="https://svgshare.com/i/DhA.svg"
          alt="mid eclipse"
        />

        <div class="container ">
          <div class="row ">
            <div class="col-md-4 col-sm-6">
              <div class="card mb-5 mt-4">
                <div class="card-body px-4 py-3">
                  <h5 class="mb-3 card-title text-dark">  Lorem ipsum </h5>
                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="card mb-5 mt-4">
                <div class="card-body px-4 py-3">
                  <h5 class="mb-3 card-title text-dark">  Lorem ipsum </h5>
                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="card mb-5 mt-4">
                <div class="card-body px-4 py-3 ">
                  <h5 class="mb-3 card-title text-dark">  Lorem ipsum </h5>
                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MetadataContent;
