import React from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { classCss } from "../../styles";

const FormRegister: React.FC = () => {
  React.useEffect(() => {
    document.body.classList.remove("bg1");
    document.body.classList.add('bg2');
  });

  const handler = (): void => {
    console.log("Registro2");
  };
  return <>
  <p className="containerLogin__title">Completa tus datos para registrarte</p>
  <form>
    <Input type="text" placeholder="Nombre"/>
    <Input type="text" placeholder="Apellido"/>
    <Input type="text" placeholder="E-mail"/>
    <Input type="password" placeholder="Password"/>
    <Button
    event={handler}
    text="Regístrate"
    clase={classCss.primary + " full"}/>
  </form>
  </>;
};

export default FormRegister;
