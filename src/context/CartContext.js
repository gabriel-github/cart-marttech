import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const total = cartProducts.reduce((acc, product) => {
    return (acc += product.price * product.amount);
  }, 0);

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
    item.amount = 1;
    setCartProducts(cartProducts.filter((product) => product.id !== item.id));
  }

  function addOne(item) {
    setCartProducts(
      cartProducts.map((product) => {
        if (product.id === item.id) {
          item.amount += 1;
        }

        return product;
      })
    );
  }

  function removeOne(item) {
    setCartProducts(
      cartProducts.map((product) => {
        if (product.id === item.id) {
          item.amount = item.amount > 1 ? (item.amount -= 1) : 1;
        }

        return product;
      })
    );
  }

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeToCart,
        addOne,
        removeOne,
        showForm,
        setShowForm,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
