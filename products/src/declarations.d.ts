declare module "Home/CartContext" {
  import { CartProvider, CartContextType } from "Home/CartContext";
  export { CartProvider };
}

declare module "Home/hooks/useCart" {
  import { useCart } from "Home/hooks/useCart";
  export { useCart };
}

declare module "Home/utils/errorHandler" {
  import { getErrorMessage } from "Home/utils/errorHandler";
  export { getErrorMessage };
}
