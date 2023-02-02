import React from "react";
import Button from "../../Components/Button";
import H1 from "../../Components/H1";
import Header from "../../Components/Header";
import FormLogin from "../../Containers/FormLogin";
import FormRegister from "../../Containers/FormRegister";
import { classCss } from "../../styles";

import "./styles.less";

interface PropsType {
  props?: any
}

interface State {
  form: "auth" | "register"
}

export default class Login extends React.Component<PropsType, State> {
  constructor (props: any) {
    super(props);
    this.state = {
      form: "auth"
    };
  }

  handler = (campo: "auth" | "register"): void => {
    this.setState({
      form: campo
    });
  };

  render (): React.ReactNode {
    return <>
    <Header/>
      <main>
      <H1/>
    <section className="containerLogin">
      <div className="containerLogin__buttons">
        <Button
        event={() => { this.handler("register"); }}
        text="Registro"
        clase={ this.state.form === "register" ? classCss.primary + " underline" : classCss.secundary}/>
        <Button
        event={() => { this.handler("auth"); }}
        text="Ingreso"
        clase={ this.state.form === "auth" ? classCss.primary + " underline" : classCss.secundary}/>
      </div>
      { this.state.form === "auth" ? <FormLogin/> : <FormRegister/>}
    </section>
      </main>
    </>;
  }
}
