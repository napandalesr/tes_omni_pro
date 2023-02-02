import React from "react";
import { IsLoggedIn } from "../../../Helpers";

import "./styles.less";

const Header: React.FC = () => {
  return <>
  {
    IsLoggedIn()
      ? <header className="fix">
          <button className="fix__button">
            <img src="assets/04-icon-burger.png" alt="logo-omni" />
          </button>
          <div className="fix__logo">
            <img className="fix__logo__icon" src="assets/05-logo-omni-2.png" alt="logo-omni" />
          </div>
      </header>
      : <header>
        <img src="assets/02-logo-omni.svg" alt="logo-omni" />
        <img src="assets/03-logo-photo.png" alt="logo-omni" />
      </header>
  }
  </>;
};

export default Header;
