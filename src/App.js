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
]);


function App() {
  return (
    <div className='App'>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
