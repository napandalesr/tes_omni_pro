import React, { Suspense } from "react";
import { BrowserRouter } from 'react-router-dom';

import Loading from "../../Components/Loading";
import GuardedRoute from "../../Routes/guardRouter";

import "./styles.less";

const Layout: React.FC = () => {
  return <div className="layout" id="layout">
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
      < GuardedRoute/>
      </BrowserRouter>
    </Suspense>
  </div>;
};

export default Layout;
