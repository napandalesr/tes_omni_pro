import React from "react";

import "./styles.less";

const H1: React.FC = () => {
  return <section className="header">
    <h1 className="header__title">Bienvenido a <br/>Omnishop</h1>
    <p className="header__text">Ingresa o regístrate en Omniapp</p>
  </section>;
};

export default H1;
