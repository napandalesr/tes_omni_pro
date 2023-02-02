import React from "react";
import Slider from "react-slick";

import "./styles.less";

const Slick: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1
  };
  return <>
  <div>
    <Slider {...settings} className="slick">
      <div className="container">
        <img src="assets/products/2/23E221DR016-1333-990_7.png" />
        <p className="text">Maroon Sweater square La robe Bari</p>
        <span className="price">$780.000</span>
      </div>
      <div className="container">
        <img src="assets/products/3/23E221DR016-1333-990_7.png" />
        <p className="text">Orange vest sweater La veste Baska</p>
        <span className="price">$1.280.000</span>
      </div>
      <div className="container">
        <img src="assets/products/4/23E221DR016-1333-990_7.png" />
        <p className="text">Dress Le pull Neve Fluffy long sleeve knit.</p>
        <span className="price">$980.000</span>
      </div>
    </Slider>
  </div>
  </>;
};

export default Slick;
