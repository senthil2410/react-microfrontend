declare module "Home/CartContext" {
  import { CartProvider, CartContextType } from "Home/context/cartContext";
  export { CartProvider };
}

declare module "Home/hooks/useCart" {
  import { useCart } from "Home/hooks/useCart";
  export { useCart };
}
