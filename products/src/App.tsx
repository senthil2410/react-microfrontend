import React from "react";
import { Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import { CartProvider } from "@shared/index";


const App = () => {
  return (
     <CartProvider>
    <Routes>
      <Route path="/" element={<Product/>} />
    </Routes>
    </CartProvider>
  );
};

export default App;
