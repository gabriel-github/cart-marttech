import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartProvider from "./context/CartContext";
import RequestsProvider from "./context/RequestsContext";

ReactDOM.render(
  <CartProvider>
    <RequestsProvider>
      <App />
    </RequestsProvider>
  </CartProvider>,
  document.getElementById("root")
);
