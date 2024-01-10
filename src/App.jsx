import React from 'react';
import Approutes from './utils/Approutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// API base URL
export const API_URL = 'https://6597a518668d248edf231ccf.mockapi.io/blogs';

function App() {
  // Create a browser router using the defined routes
  const router = createBrowserRouter(Approutes);

  return <>
      {/* Provide the router to the entire app using RouterProvider */}
      <RouterProvider router={router} />
    </>
}

export default App;