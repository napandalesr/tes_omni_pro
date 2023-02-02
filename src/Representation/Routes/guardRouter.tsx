import React from 'react';
import Router from '.';
import { IsLoggedIn } from '../../Helpers';
import Login from '../Pages/Login';

const GuardedRoute: React.FC = () => {
  return <>
    {
    IsLoggedIn()
      ? <Router/>
      : <Login/>
  }
  </>;
};

export default GuardedRoute;
