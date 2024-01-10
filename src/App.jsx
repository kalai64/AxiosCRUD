import React from 'react';
import Approutes from './utils/Approutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const API_URL = 'https://6597a518668d248edf231ccf.mockapi.io/blogs';

function App() {
  
  const router = createBrowserRouter(Approutes);

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  );
}

export default App;