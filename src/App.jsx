import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";
import NewArrivals from "./pages/shop/NewArrivals";
import ReRun from "./pages/rerun/ReRun";
import Cart from "./components/Cart";
import ProductDetail from "./pages/shop/ProductDetail";
import { CartProvider } from "./pages/shop/CartContext";
import Checkout from "./pages/shop/Checkout";
import ErrorPage from "./components/Error404";
import Search from "./components/Search";

const App = () => {
  const { pathname } = useLocation();

  const validRoutes = [
    "/",
    "/arrivals",
    "/arrivals/:id",
    "/rerun",
    "/product/:id",
    "/proceed",
    "/error",
    "/search",
  ];

  const isValidRoute = validRoutes.some((route) =>
    pathname.match(new RegExp(`^${route.replace(/:\w+/g, ".*")}$`))
  );

  const isCheckout = pathname === "/proceed";
  const isHomePage = pathname === "/";

  return (
    <CartProvider>
      {isValidRoute && <Header />}
      {isValidRoute && !isHomePage && <ChatBox />}
      {isValidRoute && <Cart />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrivals" element={<NewArrivals />} />
        <Route path="/arrivals/:id" element={<ProductDetail />} />
        <Route path="/rerun" element={<ReRun />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/proceed" element={<Checkout />} />
        <Route path="/search" element={<Search />} />{" "}
        <Route path="*" element={<Navigate to="/error" replace />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>

      {isValidRoute && <Footer pathname={pathname} />}
    </CartProvider>
  );
};

export default App;
