import React from "react";

import "./styles.less";

interface props {
  type: string
  placeholder: string
  eventValidate?: any
  name: string
  errors?: any
  error?: boolean
}

const Input: React.FC<props> = ({ type, placeholder, eventValidate, name, errors, error }) => {
  return <>
  <input
  type={type}
  placeholder={placeholder}
  {...eventValidate} className={errors[name] || error ? "inputError" : ""}/>
  </>;
};

export default Input;
