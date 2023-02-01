import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import Layout from './Representation/Containers/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout/>
    <h1>Bienvenido a </h1>
  </React.StrictMode>
);
