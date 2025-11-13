import { CartProvider } from "Home/CartContext";
import CartList from "./pages/CartList";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "Home/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <CartProvider>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute allowedRoles="admin">
                <CartList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </CartProvider>
  );
};

export default App;
