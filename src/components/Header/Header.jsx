import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Img1 from '../../assets/img/headerimage.jpg';
import Img2 from '../../assets/img/headerimage2.jpg';
import Img3 from '../../assets/img/headerimage3.jpg';

import './Header.css';


function Header() {
    return(
        <MDBCarousel showIndicators showControls fade>
            <h1 className="implicit-title">Web site Responsive</h1>
      <MDBCarouselItem
        className='w-100 d-block carousel'
        itemId={1}
        src={Img1}
        alt='Header1'
      >
        <div className="contenedor head">
          <h5 className="main-title">Lorem Ipsum is simply dummy text</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec justo rhoncus, pharetra dui ut,
                          cursus turpis. Aenean tincidunt vitae ligula eget
                          congue.</p>
        </div>
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block carousel'
        itemId={2}
        src={Img2}
        alt='Header2'
      >
        <div className="contenedor head">
          <h5 className="main-title">Lorem Ipsum is simply dummy text</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec justo rhoncus, pharetra dui ut,
                          cursus turpis. Aenean tincidunt vitae ligula eget
                          congue..</p>
        </div>
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block carousel'
        itemId={3}
        src={Img3}
        alt='Header3'
      >
        <div className="contenedor head">
          <h5 className="main-title">Lorem Ipsum is simply dummy text</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque nec justo rhoncus, pharetra dui ut,
                          cursus turpis. Aenean tincidunt vitae ligula eget
                          congue.</p>
        </div>
        
      </MDBCarouselItem>
    </MDBCarousel>
  )
    
}
export default Header;