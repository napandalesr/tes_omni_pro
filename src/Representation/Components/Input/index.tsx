import React from "react";

interface props {
  type: string
  placeholder: string
}

const Input: React.FC<props> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
