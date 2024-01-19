import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
  const { addToCart, removeFromCart, cart, clearCart } = useContext(CartContext);

  if (!addToCart || !removeFromCart || !cart || !clearCart) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return { addToCart, removeFromCart, cart, clearCart };
};
