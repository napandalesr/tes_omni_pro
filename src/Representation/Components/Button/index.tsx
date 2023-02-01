import React from "react";

import "./styles.less";

interface props {
  text: string
  clase: string
  event: () => void
}

const Button: React.FC<props> = ({ text, clase, event }) => {
  return <button onClick={() => { event(); }} className={clase}>{text}</button>;
};

export default Button;
