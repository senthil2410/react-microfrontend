import React, { useEffect, useState } from "react";
import { Product } from "../../../shared/types/Products";

const CartList = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const handleAddToCart = (event: Event) => {
      const product = (event as CustomEvent<Product>).detail;
      console.log("Product added to cart:", product);
      setCart((prev) => [...prev, product]);
    };

    window.addEventListener("add-to-cart", handleAddToCart);

    return () => {
      window.removeEventListener("add-to-cart", handleAddToCart);
    };
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
