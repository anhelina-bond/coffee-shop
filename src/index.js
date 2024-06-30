import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.scss'
import App from './routes/app/app';
import Coffee from './routes/coffee/coffee';
import Goods from './routes/goods/goods';
import ErrorPage from './components/error-page';
import Home from './routes/home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'coffee',
        element: <Coffee />
      },
      {
        path: 'goods',
        element: <Goods />
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

