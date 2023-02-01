import React from "react";
import Header from "../../Components/Header";
import Login from "../../Pages/Login";

import "./styles.less";

const Layout: React.FC = () => {
  return <div className="layout">
  <Header/>
  <main>
    <Login props={undefined}/>
  </main>
  </div>;
};

export default Layout;
