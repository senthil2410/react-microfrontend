import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import type { cartContextType } from "Home/types/CartTypes";

export const useCart = (): cartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Should be inside CartProvider");
  return context;
};
