import React from "react";

import "./styles.less";

interface props {
  type: string
  placeholder: string
  eventValidate?: any
  name: string
  errors?: any
  alias: string
}

const Input: React.FC<props> = ({ type, placeholder, eventValidate, name, errors, alias }) => {
  return <>
  <input
  type={type}
  placeholder={placeholder}
  {...eventValidate} className={errors[name] ? "inputError" : ""}/>
  {errors[name] && <p className="text-error">El Campo {alias} es requerido.</p>}
  </>;
};

export default Input;
