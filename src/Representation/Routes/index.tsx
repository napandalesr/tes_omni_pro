import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Pages/Product";

const Router: React.FC = () => {
  return <>
  <Routes>
    <Route path="/" element={<Product id={1}/>}/>
  </Routes>
  </>;
};

export default Router;
