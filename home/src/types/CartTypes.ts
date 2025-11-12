import type { Product } from "./ProductTypes";

export interface CartItem extends Product {
  quantity: number;
}

export interface cartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
}
