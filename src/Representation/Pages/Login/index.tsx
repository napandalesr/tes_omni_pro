import React from "react";

import Button from "../../Components/Button";
import H1 from "../../Components/H1";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import RegisterSuccess from "../../Components/RegisterSuccess";
import FormLogin from "../../Containers/FormLogin";
import FormRegister from "../../Containers/FormRegister";
import { classCss } from "../../styles";

import "./styles.less";

interface PropsType {
  props?: any
}

interface State {
  form: "auth" | "register"
  loading: boolean
  registerSucces: boolean
  loginError: boolean
}

export default class Login extends React.Component<PropsType, State> {
  constructor (props: any) {
    super(props);
    this.state = {
      form: "auth",
      loading: false,
      registerSucces: false,
      loginError: false
    };
  }

  handler = (campo: "auth" | "register"): void => {
    this.setState({
      form: campo
    });
  };

  loadingShow = (): void => {
    this.setState({
      loading: true
    });
  };

  loadingHide = (): void => {
    this.setState({
      loading: false
    });
  };

  registerSuccessShow = (): void => {
    this.setState({
      registerSucces: true
    });
  };

  registerSuccesHide = (): void => {
    this.setState({
      registerSucces: false
    });
  };

  loginErrorShow = (): void => {
    this.setState({
      loginError: true
    });
  };

  loginErrorHide = (): void => {
    this.setState({
      loginError: false
    });
  };

  render (): React.ReactNode {
    return <>
    {
      this.state.loading
        ? <Loading/>
        : this.state.registerSucces
          ? <RegisterSuccess/>
          : <>
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
              { this.state.form === "auth"
                ? <FormLogin
                    loadingHide={this.loadingHide}
                    loadingShow={this.loadingShow}
                    loginErrorShow={this.loginErrorShow}
                    loginErrorHide={this.loginErrorHide}
                    loginError={this.state.loginError}/>
                : <FormRegister
                    loadingHide={this.loadingHide}
                    loadingShow={this.loadingShow}
                    registerSuccessShow={this.registerSuccessShow}
                    registerSuccesHide={this.registerSuccesHide}/>
              }
            </section>
          </main>
          </>
    }
    </>;
  }
}
