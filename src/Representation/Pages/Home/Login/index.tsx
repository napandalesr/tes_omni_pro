import React from "react";
import Button from "../../../Components/Button";
import H1 from "../../../Components/H1";
import Input from "../../../Components/Input";
import { classCss } from "../../../styles";

import "./styles.less";

export default class Login extends React.Component {
  render (): React.ReactNode {
    return <>
    <H1/>
    <section className="containerLogin">
      <div className="containerLogin__buttons">
        <Button
        text="Ingreso"
        clase={classCss.primary + " underline"}/>
      </div>
      <p className="containerLogin__title">Ingresa con tus datos</p>
      <Input type="text" placeholder="Email o nombre de usuario"/>
      <Input type="text" placeholder="Ingresa contraseña"/>
      <span className="containerLogin__newsletter">
        <Input type="radio" placeholder=""/>
        <span className="containerLogin__newsletter__text">Suscríbete al newsletter</span>
      </span>
      <Button
      text="Ingresa"
      clase={classCss.primary}/>
      <span className="containerLogin__text">¿Olvidaste tu contraseña?</span>
    </section>
    </>;
  }
}
