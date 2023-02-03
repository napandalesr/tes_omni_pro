import React from "react";

import Header from "../../Components/Header";
import DescriptionProducts from "../../Containers/DescriptionProducts";
import Slick from "../../Components/Slick";
import CarouselComponent from "../../Components/CarouselComponent";
import Footer from "../../Components/Footer";
import { type ProductDto } from "../../../App/Controller/Products/products.dto";
import { ProductsController } from "../../../App/Controller/Products/products.controller";

import "./styles.less";
import Button from "../../Components/Button";
import { LogOut } from "../../../Helpers";

interface PropsType {
  id: number
}

interface State {
  dataSource: ProductDto[]
}

export default class Product extends React.Component<PropsType, State> {
  constructor (props: any) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  async componentDidMount (): Promise<void> {
    document.getElementById("layout")?.classList.remove("layout");
    await this.getData();
  };

  getData = async (): Promise<void> => {
    const productsController = new ProductsController();
    const dataSource = await productsController.getAll();
    this.setState({
      dataSource: dataSource.data
    });
  };

  cerrarSesion = (): void => {
    LogOut();
  };

  render (): React.ReactNode {
    return <>
    <Header/>
    {this.state.dataSource.length > 0 && <CarouselComponent images={this.state.dataSource[0].images}/>}
    <section className="descriptionProduct">
      {this.state.dataSource.length > 0 && <DescriptionProducts dataSource={this.state.dataSource[0]}/>}
    <div className="other-products">
      <h4 className="other-products__title">TAMBIÉN TE PODRÍA GUSTAR</h4>
      <Slick/>
    </div>
    </section>
    <Footer/>
    <Button
    text="Cerrar sesión"
    clase="primary"
    event={this.cerrarSesion}/>
    </>;
  }
}
