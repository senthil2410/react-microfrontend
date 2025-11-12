import React from "react";
import { CartProvider } from "Home/CartContext";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </CartProvider>
  );
}
