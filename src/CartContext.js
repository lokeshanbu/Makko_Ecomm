import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.weight === product.weight
      );

      if (existingIndex !== -1) {
        const existingItem = prevItems[existingIndex];

        if (existingItem.quantity === quantity) {
          alert("🔔 Product already in the cart with same weight and quantity.");
          return prevItems;
        } else {
          // Update quantity by adding the new one to the existing
          const updatedItems = [...prevItems];
          updatedItems[existingIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + quantity,
          };
          alert("✅ Quantity updated in the cart.");
          return updatedItems;
        }
      }

      // Product with different weight or new product
      alert("✅ Product added to cart.");
      return [...prevItems, { ...product, quantity }];
    });
  };

  /*const removeFromCart = (id, weight) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.weight === weight))
    );
  };*/

  const updateCartItemQty = (id, weight, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.weight === weight
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

   const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  /*const updateCartItemQty = (id, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };*/

  return (
    <CartContext.Provider
      value={{
        cart: cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
