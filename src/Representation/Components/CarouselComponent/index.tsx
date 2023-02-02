import React from "react";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.less";

const CarouselComponent: React.FC = () => {
  return <>
  <Carousel className="carousel">
    <div>
      <img src="assets/products/1/22H226KN603-2390-043_11.png" />
    </div>
    <div>
      <img src="assets/products/1/22H226KN603-2390-043_1.png" />
    </div>
    <div>
      <img src="assets/products/1/22H226KN603-2390-043_2.png" />
    </div>
    <div>
      <img src="assets/products/1/22H226KN603-2390-043_7.png" />
    </div>
    </Carousel>
  </>;
};

export default CarouselComponent;
