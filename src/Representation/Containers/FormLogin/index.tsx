import React from "react";
import { useForm } from 'react-hook-form';

import { AuthController } from "../../../App/Controller/AuthController/auth.controller";
import { changeBrackground } from "../../../Helpers";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { classCss } from "../../styles";

interface props {
  loadingShow: () => void
  loadingHide: () => void
  loginErrorShow: () => void
  loginErrorHide: () => void
  loginError: boolean
}

const FormLogin: React.FC<props> = ({
  loadingShow,
  loadingHide,
  loginErrorShow,
  loginErrorHide,
  loginError
}) => {
  const [desableForm, setDesableForm] = React.useState(false);
  React.useEffect(() => {
    changeBrackground('bg1');
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const Submit = async (data: any): Promise<void> => {
    loginErrorHide();
    setDesableForm(true);
    loadingShow();
    const authController = new AuthController();
    try {
      const response = await authController.auth(data.email, data.password);
      if ([200, 201, 202, 203, 204].includes(response.status)) {
        location.reload();
      }
      reset({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
      loginErrorShow();
      loadingHide();
    }
    setDesableForm(false);
    loadingHide();
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
      errors={errors}/>
    <Input
      type="password"
      placeholder="Ingresa contraseña*"
      eventValidate={{ ...register('password', { required: true }) }}
      name="password"
      errors={errors}
      error={loginError}/>
    {loginError && <span className="text-error">Contraseña incorrecta</span>}
    <span className="containerLogin__newsletter">
      <Input
        type="radio"
        placeholder=""
        eventValidate={{ ...register('radio') }}
        name="subscribe"
        errors={errors}/>
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
