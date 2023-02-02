import React from "react";

import Header from "../../Components/Header";
import DescriptionProducts from "../../Containers/DescriptionProducts";

import Slick from "../../Components/Slick";
import CarouselComponent from "../../Components/CarouselComponent";

import "./styles.less";
import Footer from "../../Components/Footer";

interface PropsType {
  id: number
}

interface State {
  form: "auth" | "register"
  loading: boolean
  registerSucces: boolean
  loginError: boolean
}

export default class Product extends React.Component<PropsType, State> {
  componentDidMount (): void {
    document.getElementById("layout")?.classList.remove("layout");
  };

  render (): React.ReactNode {
    return <>
    <Header/>
    <CarouselComponent/>
    <section className="descriptionProduct">
    <DescriptionProducts/>
    <div className="other-products">
      <h4 className="other-products__title">TAMBIÉN TE PODRÍA GUSTAR</h4>
      <Slick/>
    </div>
    </section>
    <Footer/>
    </>;
  }
}
