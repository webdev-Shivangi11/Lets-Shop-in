import React, { useEffect } from "react";
// import Navbar from './components/Navbar '
import { Route, Routes } from "react-router-dom";

import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AdminDashboard from "./pages/Admin-panel/AdminDashboard";
import Product from "./pages/Admin-panel/AdminProducts";
import Order from "./pages/Admin-panel/Order";
import Features from "./pages/Admin-panel/Features";
import AdminLayout from "./components/Admin-View/Adminlayout";
import ShopLayout from "./components/Shop-View/ShopLayout";
import NotFound from "./pages/NotFound";
import ShopListing from "./pages/Shop-panel/ShopListing";
import Checkout from "./pages/Shop-panel/Checkout";
import ShopAccount from "./pages/Shop-panel/ShopAccount";
import ShopHome from "./pages/Shop-panel/ShopHome";
import IsAuth from "./components/Common/isAuth";
import UnAuth from "./pages/UnAuth";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/authSlice";
function App() {
  // const isAuthenticated=false;
  // const user=null;
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  // const {user,isAuthenticated}=useSelector(state=>state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  },[dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col outline-hidden bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <IsAuth isAuthenticated={isAuthenticated} user={user}></IsAuth>
            }
          />
          <Route
            path="/auth"
            element={
              <IsAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </IsAuth>
            }
          >
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route
            path="/admin"
            element={
              <IsAuth isAuthenticated={isAuthenticated} user={user}>
                {" "}
                <AdminLayout />
              </IsAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<Product />} />
            <Route path="features" element={<Features />} />
            <Route path="orders" element={<Order />} />
          </Route>
          <Route
            path="/shop"
            element={
              <IsAuth isAuthenticated={isAuthenticated} user={user}>
                {" "}
                <ShopLayout />{" "}
              </IsAuth>
            }
          >
            <Route path="home" element={<ShopHome />} />
            <Route path="listing" element={<ShopListing />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="account" element={<ShopAccount />} />
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="unauth-page" element={<UnAuth />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
