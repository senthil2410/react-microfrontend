import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from "./components/Notification/Notification";

const ProductApp = lazy(() => import("Product/App"));
const CartApp = lazy(() => import("Cart/App"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Notification />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />

          <Route path="/products/*" element={<ProductApp />} />
          <Route path="/cart/*" element={<CartApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
