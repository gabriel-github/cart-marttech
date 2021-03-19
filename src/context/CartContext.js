import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(item) {
    const alreadyExists = cartProducts.filter(
      (product) => product.id === item.id
    );

    if (alreadyExists.length > 0) {
      item.amount += 1;
    } else {
      setCartProducts([...cartProducts, item]);
    }
  }

  function removeToCart(item) {
    setCartProducts(cartProducts.filter((product) => product.id !== item.id));
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
