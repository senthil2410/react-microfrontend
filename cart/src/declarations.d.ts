declare module "Home/CartContext" {
  import { CartProvider, CartContextType } from "Home/context/cartContext";
  export { CartProvider };
}

declare module "Home/hooks/useCart" {
  import { useCart } from "Home/hooks/useCart";
  export { useCart };
}

declare module "Home/AuthContext" {
  import { AuthProvider, AuthContext } from "Home/AuthContext";
  export { AuthProvider };
}

declare module "Home/hooks/useAuth" {
  import { useAuth } from "Home/hooks/useAuth";
  export { useAuth };
}
