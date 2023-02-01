import React from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { classCss } from "../../styles";

const FormLogin: React.FC = () => {
  React.useEffect(() => {
    document.body.classList.remove("bg2");
    document.body.classList.add('bg1');
  });

  const handler = (): void => {
    console.log("Registro");
  };

  return <>
  <p className="containerLogin__title">Ingresa con tus datos</p>
  <form>
    <Input type="text" placeholder="Email o nombre de usuario"/>
    <Input type="text" placeholder="Ingresa contraseña"/>
    <span className="containerLogin__newsletter">
      <Input type="radio" placeholder=""/>
      <span className="containerLogin__newsletter__text">Suscríbete al newsletter</span>
    </span>
    <Button
    event={handler}
    text="Ingresa"
    clase={classCss.primary + " full"}/>
  </form>
  <span className="containerLogin__text">¿Olvidaste tu contraseña?</span>
  </>;
};

export default FormLogin;
