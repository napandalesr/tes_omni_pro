import React from "react";
import Header from "../../Components/Header";
import Login from "../../Pages/Home/Login";

import "./styles.less";

const Layout: React.FC = () => {
  return <div className="layout">
  <Header/>
  <main>
    <Login/>
  </main>
  </div>;
};

export default Layout;
