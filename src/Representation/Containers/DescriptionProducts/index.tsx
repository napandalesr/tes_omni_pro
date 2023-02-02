import React from "react";
import Button from "../../Components/Button";
import { classCss } from "../../styles";

import "./styles.less";

const DescriptionProducts: React.FC = () => {
  return <>
    <div className="descriptionProduct__new">
      <span className="descriptionProduct__new__text">NEW</span>
      <img className="descriptionProduct__new__icon" src="assets/06-heart-icon.png" alt="logo-omni" />
    </div>
    <h3 className="descriptionProduct__name">Sweater Le pull Neve Fluffy long sleeve knit.</h3>
    <p className="descriptionProduct__star">
      <img src="assets/07-start-icon.png" alt="logo-omni" />
    </p>
    <div className="descriptionProduct__price">
      <span className="descriptionProduct__price__old">$2.000.000</span>
      <span className="descriptionProduct__price__best">$1.200.000</span>
    </div>
    <div className="descriptionProduct__tallas">
      <span>XXS</span>
      <span>XS</span>
      <span className="selected">S</span>
      <span>M</span>
      <span>L</span>
      <span>XL</span>
      <span>XXL</span>
    </div>
    <span className="descriptionProduct__cant">
      <span>+</span>1<span>-</span>
    </span>
    <Button
    event={() => {}}
    text="Agregar al carrito"
    clase={classCss.primary}/>
    <h4 className="descriptionProduct__subtitle">DESCRIPCIÓN:</h4>
    <p className="descriptionProduct__text">
    Saco de punto de manga larga con materiales eco amigables en 4 tonos.
    Esta sudadera con capucha clásica está confeccionada con algodón 100 %
    orgánico y está diseñada para usarse durante todo el año, en todas las
    temporadas. es un tejido de peso medio con una textura loopback en el
    interior y un acabado que aporta suavidad extra. se trata con aceite
    de menta natural (pprmint™), para reducir la necesidad de lavado y
    mantenerlo fresco por más tiempo.
    </p>
    <a className="descriptionProduct__readMore" href="#">Leer más</a>
  </>;
};

export default DescriptionProducts;
