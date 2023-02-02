import React from "react";

import "./styles.less";

const Footer: React.FC = () => {
  return <footer className="footer">
    <h5 className="footer__title">Newsletter</h5>
    <span>Todos los derechos reservados </span>
    <span> 2023 </span>
    <span> Omnishop</span>
    <span><img className="fix__logo__icon" src="assets/05-logo-omni-2.png" alt="logo-omni" /></span>
  </footer>;
};

export default Footer;
