import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

const ProductApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
    </Routes>
  );
};

export default ProductApp;
