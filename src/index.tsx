import React from 'react';
import ReactDOM from 'react-dom/client';

import Layout from './Representation/Containers/Layout';

import './index.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>
);
