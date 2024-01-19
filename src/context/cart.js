import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id_ref === product.id_ref);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((p) =>
          p.id_ref === existingProduct.id_ref
            ? { ...p, quantify: p.quantify + 1 }
            : p
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantify: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id_ref === productId
          ? { ...item, quantify: item.quantify - 1 }
          : item
      );

      return updatedCart.filter((item) => item.quantify > 0);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
