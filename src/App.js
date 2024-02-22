import React, { useEffect } from "react";
import "./App.css";
import Home from "./features/pages/Home";
import LoginPage from "./features/pages/LoginPage";
import SignuPage from "./features/pages/SignuPage";
import CartPage from "./features/pages/CartPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from "./features/pages/Checkout";
import ProductDetailPage from "./features/pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/Cart/cartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import PageNotFound from "./features/pages/404";
import OrderSuccessPage from "./features/pages/OrderSuccessPage";
import UserOrderPage from "./features/pages/UserOrderPage";
import UserProfilePage from "./features/pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/components/Logout";
import ForgotPasswordPage from "./features/pages/ForgotPasswordPage";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminHome from "./features/pages/AdminHome";
import AdminProductDetailPage from "./features/pages/AdminProductDetailPage";
import AdminProductFormPage from "./features/pages/AdminProductFormPage";
import AdminOrdersPage from "./features/pages/AdminOrdersPage";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignuPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage />
      </Protected>
    ),
  },
  {
    path: "/admin/product-detail/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <OrderSuccessPage>
        <ProductDetailPage />
      </OrderSuccessPage>
    ),
  },
  {
    path: "/orders",
    element: (
      <UserOrderPage/>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage/>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/profile",
    element: (
      <UserProfilePage/>
    ),
  },
  {
    path: "/logout",
    element: (
      <Logout/>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <ForgotPasswordPage/>
    ),
  },
  {
    path: "*",
    element: (
      <PageNotFound/>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)

  // we are dispatching this in App becz as soon as the user logged in his cart is being showed in the navbar, So you have to showw the updated cart
  useEffect(() => {
    if(user){
      dispatch(fetchItemsByUserIdAsync())
      // we  can geet req.user by token onn backend so no need to give in front-end
      dispatch(fetchLoggedInUserAsync())
    }
  }, [dispatch,user])
  return (
    <div className="App">
    <Provider template={AlertTemplate} {...options}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
