import React from 'react';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import Create from '../components/Create';
import Edit from '../components/edit';
import { Navigate } from 'react-router-dom';

//Array of Routers object
const Approutes = [
  {
    path: '/',
    exact: true,
    element: <Home />,
  },
  {
    path: '/dashboard',
    exact: true,
    element: <Dashboard />,
  },
  {
    path: '/create',
    exact: true,
    element: <Create />,
  },
  {
    path: '/edit/:id',
    exact: true,
    element: <Edit />,
  },
  {
    path: '*',
    exact: true,
    element: <Navigate to='/' />,
  },
];

export default Approutes;