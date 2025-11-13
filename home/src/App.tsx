import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from "./components/Notification/Notification";
import Login from "./pages/Login";
import { AuthContext, AuthProvider } from "./context/AuthContext";

const ProductApp = lazy(() => import("Product/App"));
const CartApp = lazy(() => import("Cart/App"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Notification />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/login" element={<Login />} />

            <Route path="/products/*" element={<ProductApp />} />
            <Route path="/cart/*" element={<CartApp />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
