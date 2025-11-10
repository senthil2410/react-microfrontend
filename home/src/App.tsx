import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ProductApp = lazy(() => import("Product/App"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />

          <Route path="/products/*" element={<ProductApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
