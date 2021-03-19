import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container } from "./style";

export default function ProductOfCart({ product }) {
  const { removeToCart, addOne, removeOne } = useContext(CartContext);
  const subtotal = product.price * product.amount;

  return (
    <Container>
      <Container.WrapperImg>
        <p>{product.name}</p>
        <img src={product.url} alt={product.name} />
      </Container.WrapperImg>

      <p>{product.price}</p>

      <Container.WrapperQuantity>
        <button onClick={() => removeOne(product)}>-</button>

        <p>{product.amount}</p>

        <button onClick={() => addOne(product)}>+</button>
      </Container.WrapperQuantity>

      <p>{subtotal.toFixed(2)}</p>

      <Container.ButtonRemove onClick={() => removeToCart(product)}>
        x
      </Container.ButtonRemove>
    </Container>
  );
}
