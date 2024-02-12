import React from 'react';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignuPage from './features/pages/SignuPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


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
]);


function App() {
  return (
    <div className='App'>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
