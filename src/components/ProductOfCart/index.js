import React from "react";
import { Container } from "./style";

export default function ProductOfCart({ product }) {
  const subtotal = product.price * product.amount;

  return (
    <Container>
      <Container.WrapperImg>
        <p>{product.name}</p>
        <img src={product.url} alt={product.name} />
      </Container.WrapperImg>

      <p>{product.price}</p>

      <Container.WrapperQuantity>
        <button>-</button>

        <p>{product.amount}</p>

        <button>+</button>
      </Container.WrapperQuantity>

      <p>{subtotal}</p>

      <Container.ButtonRemove>x</Container.ButtonRemove>
    </Container>
  );
}
