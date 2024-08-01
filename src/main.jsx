import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from './Component/Home/Home.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
