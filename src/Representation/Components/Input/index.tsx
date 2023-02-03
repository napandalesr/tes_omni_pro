import React from "react";

import "./styles.less";

interface props {
  type: string
  placeholder: string
  eventValidate?: any
  name: string
  errors?: any
  error?: boolean
  clase?: string
}

const Input: React.FC<props> = ({ type, placeholder, eventValidate, name, errors, error, clase }) => {
  return <>
  <input
  type={type}
  placeholder={placeholder}
  {...eventValidate} className={`${errors[name] || error ? "inputError" : ""} ${clase ?? ""}`}/>
  </>;
};

export default Input;
