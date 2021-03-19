import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container } from "./style";

export default function ProductOfCart({ product }) {
  const { removeToCart } = useContext(CartContext);
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

      <Container.ButtonRemove onClick={() => removeToCart(product)}>
        x
      </Container.ButtonRemove>
    </Container>
  );
}
