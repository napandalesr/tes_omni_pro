import React from "react";
import { useForm } from "react-hook-form";

import { changeBrackground } from "../../../Helpers";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { classCss } from "../../styles";

const FormRegister: React.FC = () => {
  React.useEffect(() => {
    changeBrackground('bg2');
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handler = (): void => {
    console.log("Registro2");
  };
  return <>
  <p className="containerLogin__title">Completa tus datos para registrarte</p>
  <form onSubmit={handleSubmit((data) => { console.log(data); })}>
    <Input
      type="text"
      placeholder="Nombre*"
      eventValidate={{ ...register('name', { required: true }) }}
      errors={errors} name="name"
      alias="Nombre"/>
    <Input
      type="text"
      placeholder="Apellido*"
      name="lastName"
      eventValidate={{ ...register('lastName', { required: true }) }}
      errors={errors}
    alias="Apellido*"/>
    <Input
      type="text"
      placeholder="E-mail*"
      name="email"
      eventValidate={{ ...register('email', { required: true }) }}
      errors={errors}
      alias="E-mail"/>
    <Input
      type="password"
      placeholder="Contraseña*"
      name="password"
      eventValidate={{ ...register('password', { required: true }) }}
      errors={errors}
      alias="Contraseña"/>
    <Button
      event={handler}
      text="Regístrate"
      clase={classCss.primary + " full"}/>
  </form>
  </>;
};

export default FormRegister;
