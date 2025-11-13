import React, { useEffect, useState } from "react";
import { useCart } from "Home/hooks/useCart";
import type { CartItem } from "Home/types/CartTypes";
import { useAuth } from "Home/hooks/useAuth";


const CartList = () => {
  const {  user } = useAuth();
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "gray",
        }}
      >
        <h1>Cart</h1>
        <h4>{user ? user.email : "Loading..."}</h4>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: CartItem) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <button onClick={() => decreaseQuantity(item._id)}>-</button>
                  <button onClick={() => increaseQuantity(item._id)}>+</button>
                  <button onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartList;
