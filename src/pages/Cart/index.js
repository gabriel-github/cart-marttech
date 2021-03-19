import React, { useContext } from "react";
import { Container } from "./style";
import ProductOfCart from "../../components/ProductOfCart";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const { cartProducts } = useContext(CartContext);

  return (
    <Container>
      {cartProducts.length > 0 ? (
        <Container.Main>
          <Container.Descriptors>
            <p>product</p>
            <p>price</p>
            <p>quantity</p>
            <p>subtotal</p>
          </Container.Descriptors>

          {cartProducts.map((product, index) => (
            <ProductOfCart product={product} key={index} />
          ))}

          <Container.OrderWrapper>
            <Container.WrapperButtons>
              <Container.Button>esvaziar carrinho</Container.Button>
              <Container.Button>continuar comprando</Container.Button>
            </Container.WrapperButtons>

            <Container.Order>
              <h4>
                Total: <span>55555</span>
              </h4>
              <button>finalizar compra</button>
            </Container.Order>
          </Container.OrderWrapper>
        </Container.Main>
      ) : (
        <h1>O Carrinho está vazio</h1>
      )}
    </Container>
  );
}
