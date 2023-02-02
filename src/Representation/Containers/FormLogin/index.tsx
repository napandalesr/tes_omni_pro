import React from "react";
import { useForm } from 'react-hook-form';
import { AuthController } from "../../../App/Controller/auth.controller";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { classCss } from "../../styles";

import "./styles.less";

const FormLogin: React.FC = () => {
  const [desableForm, setDesableForm] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.remove("bg2");
    document.body.classList.add('bg1');
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const Submit = async (data: any): Promise<void> => {
    setDesableForm(true);
    const authController = new AuthController();
    try {
      const response = await authController.auth(data.email, data.password);
      if ([200, 201, 202, 203, 204].includes(response.status)) {
        console.log("Ok");
      }
    } catch (error) {
      console.log(error);
    }
    reset({
      email: "",
      password: ""
    });
    setDesableForm(false);
  };

  return <>
  <p className="containerLogin__title">Ingresa con tus datos</p>
  <form onSubmit={handleSubmit(async (data) => { await Submit(data); })}>
  <fieldset disabled={desableForm} className={desableForm ? "opacity" : ""}>
    <Input
      type="text"
      placeholder="Email o nombre de usuario*"
      eventValidate={{ ...register('email', { required: true }) }}
      name="email"
      errors={errors}
      alias="Email o nombre de usuario"/>
    <Input
      type="password"
      placeholder="Ingresa contraseña*"
      eventValidate={{ ...register('password', { required: true }) }}
      name="password"
      errors={errors}
      alias="Contraseña"/>
    <span className="containerLogin__newsletter">
      <Input
        type="radio"
        placeholder=""
        eventValidate={{ ...register('radio') }}
        name="subscribe"
        errors={errors}
        alias=""/>
      <span className="containerLogin__newsletter__text">Suscríbete al newsletter</span>
    </span>
    <Button
      event={() => {}}
      text="Ingresa"
      clase={classCss.primary + " full"}/>
      </fieldset>
  </form>
  <span className="containerLogin__text">¿Olvidaste tu contraseña?</span>
  </>;
};

export default FormLogin;
