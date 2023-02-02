import React from "react";
import { changeBrackground } from "../../../Helpers";

import "./styles.less";

const Loading: React.FC = () => {
  React.useEffect(() => {
    changeBrackground('bg3');
  });

  return <section className="loading">
    <img className="loading__logo" src="assets/02-logo-omni.svg" alt="logo-omni" />
    <span className="loading__text">Ingresando</span>
  </section>;
};

export default Loading;
