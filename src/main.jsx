import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoader from './cartProductLoader';
import SignUp from './components/SignUp/SignUp';
import AuthProviders from './components/providers/AuthProviders';
import Checkout from './components/Checkout/Checkout';
import PrivateRoutes from './routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: cartProductLoader,
      },
      {
        path: '/review',
        element: <Review />
      },
      {
        path: '/inventory',
        element: <PrivateRoutes><Inventory /></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/checkout',
        element: <PrivateRoutes><Checkout /></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
