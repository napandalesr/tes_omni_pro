import React from "react";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.less";

interface props {
  images: any
}

const CarouselComponent: React.FC<props> = ({ images }) => {
  return <>
  <Carousel className="carousel">
    {
      images.map((item: string) => <div key={item}><img src={`assets/products/1/${item}`}/></div>)
    }
    </Carousel>
  </>;
};

export default CarouselComponent;
