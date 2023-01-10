import React from 'react'

function navbar() {
    const [navbarScroll, setNavbarScroll] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {" "}
          <a class="navbar-brand navbar-logo" href="#">
            {" "}
            <h2>Logo</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span class="fas fa-bars"></span>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {" "}
                <a class="nav-link" href="" data-scroll-nav="0">
                  Home
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a class="nav-link" href="#" data-scroll-nav="1">
                  Sobre Nosotros
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a class="nav-link" href="#" data-scroll-nav="2">
                  Servicios
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a class="nav-link" href="#" data-scroll-nav="3">
                  Portafolio
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a class="nav-link" href="#" data-scroll-nav="4">
                  Contacto
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="banner text-center" data-scroll-index="0">
        <div className="banner-overlay">
          <div className="container">
            <h1 className="text-capitalize">
              Lorem Ipsum is simply dummy text
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec justo rhoncus, pharetra dui ut, cursus turpis.
              Aenean tincidunt vitae ligula eget congue.
            </p>
            {/* <a href="#" class="banner-btn">
              Get Started
            </a>{" "} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default navbar