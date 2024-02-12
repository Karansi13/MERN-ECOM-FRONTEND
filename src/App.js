import React from 'react';
import './App.css';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignuPage from './features/pages/SignuPage';
import CartPage from './features/pages/CartPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './features/pages/Checkout';
import ProductDetails from './features/product/components/ProductDetails';
import ProductDetailPage from './features/pages/ProductDetailPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/login",
    element: (<LoginPage/>),
  },
  {
    path: "/signup",
    element: (<SignuPage/>),
  },
  {
    path: "/cart",
    element: (<CartPage/>),
  },
  {
    path: "/checkout",
    element: (<Checkout/>),
  },
  {
    path: "/product-detail",
    element: (<ProductDetailPage/>),
  },
]);


function App() {
  return (
    <div className='App'>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
