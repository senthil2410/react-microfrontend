import { CartProvider } from "Home/CartContext";
import CartList from "./pages/CartList";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<CartList />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
