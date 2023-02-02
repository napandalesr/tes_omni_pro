import React from "react";
import { BrowserRouter } from 'react-router-dom';

import GuardedRoute from "../../Routes/guardRouter";

import "./styles.less";

const Layout: React.FC = () => {
  return <div className="layout">
    <BrowserRouter>
    <GuardedRoute/>
    </BrowserRouter>
  </div>;
};

export default Layout;
