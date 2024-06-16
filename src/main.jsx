import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GetAll from './GetAll.jsx';

const router = createBrowserRouter([
  {
    path: "/getAll",
    element: (
      <GetAll />
    ),
  },{
    path: "/",
    element: (
      <App />
    ),
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)