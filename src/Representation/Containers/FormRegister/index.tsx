import React from "react";
import { useForm } from "react-hook-form";

import { RegisterController } from "../../../App/Controller/RegisterController/register.controller";
import { changeBrackground } from "../../../Helpers";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { classCss } from "../../styles";

interface props {
  loadingShow: () => void
  loadingHide: () => void
  registerSuccessShow: () => void
  registerSuccesHide: () => void
}

const FormRegister: React.FC<props> = ({
  loadingShow,
  loadingHide,
  registerSuccessShow,
  registerSuccesHide
}) => {
  const [desableForm, setDesableForm] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  React.useEffect(() => {
    changeBrackground('bg2');
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  React.useEffect(() => {
    const error: any = errors;
    if (error.name !== undefined) {
      if (
        error.name.message === "" ||
        error.lastName.message === "" ||
        error.email.message === "" ||
        error.password.message === "") {
        setLoginError(true);
      }
    }
  }, [errors]);

  const save = async (data: any): Promise<void> => {
    setDesableForm(true);
    loadingShow();
    const registerController = new RegisterController();
    try {
      const response = await registerController.post({
        email: data.email,
        username: data.email,
        password: data.password,
        name: {
          firstname: data.name,
          lastname: data.lastName
        }
      });
      if ([200, 201, 202, 203, 204].includes(response.status)) {
        registerSuccessShow();
        setTimeout(() => { registerSuccesHide(); }, 2000);
      }
      setDesableForm(false);
      loadingHide();
    } catch (error) {
      console.log(error);
      loadingHide();
      setDesableForm(false);
    }
  };
  return <>
  <p className="containerLogin__title">Completa tus datos para registrarte</p>
  <form onSubmit={handleSubmit(async (data) => { await save(data); })}>
  <fieldset disabled={desableForm} className={desableForm ? "opacity" : ""}>
  <Input
      type="text"
      placeholder="Nombre*"
      eventValidate={{ ...register('name', { required: true }) }}
      errors={errors} name="name"/>
    <Input
      type="text"
      placeholder="Apellido*"
      name="lastName"
      eventValidate={{ ...register('lastName', { required: true }) }}
      errors={errors}/>
    <Input
      type="text"
      placeholder="E-mail*"
      name="email"
      eventValidate={{ ...register('email', { required: true }) }}
      errors={errors}/>
    <Input
      type="password"
      placeholder="Contraseña*"
      name="password"
      eventValidate={{ ...register('password', { required: true }) }}
      errors={errors}/>
      {loginError && <span className="text-error">Por favor, diligencia los campos marcados</span>}
    <Button
       event={() => {}}
      text="Regístrate"
      clase={classCss.primary + " full"}/>
  </fieldset>
  </form>
  </>;
};

export default FormRegister;
