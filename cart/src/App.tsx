import CartList from "./pages/CartList";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CartList />} />
    </Routes>
  );
};

export default App;
