import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const data = JSON.parse(localStorage.getItem("cartProducts"));

  const [cartProducts, setCartProducts] = useState(data ?? []);
  const [showForm, setShowForm] = useState(false);
  const [total, setTotal] = useState(0);

  function addToCart(item) {
    const alreadyExists = cartProducts.filter(
      (product) => product.id === item.id
    );

    if (alreadyExists.length > 0) {
      setCartProducts(
        cartProducts.map((product) => {
          if (product.id === item.id) {
            item.amount += 1;
          }

          return item;
        })
      );
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

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    setTotal(
      cartProducts.reduce((acc, product) => {
        return (acc += product.price * product.amount);
      }, 0)
    );
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeToCart,
        addOne,
        removeOne,
        clearCart,
        showForm,
        setShowForm,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
