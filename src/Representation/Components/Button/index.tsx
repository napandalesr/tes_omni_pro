import React from "react";

import "./styles.less";

interface props {
  text: string
  clase: string
}

const Button: React.FC<props> = ({ text, clase }) => {
  return <button className={clase}>{text}</button>;
};

export default Button;
