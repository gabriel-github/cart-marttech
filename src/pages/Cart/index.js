import React from "react";
import { Container } from "./style";
import { products } from "../../products";
import ProductOfCart from "../../components/ProductOfCart";

export default function Cart() {
  return (
    <Container>
      {products.length > 0 ? (
        <Container.Main>
          <Container.Descriptors>
            <p>product</p>
            <p>price</p>
            <p>quantity</p>
            <p>subtotal</p>
          </Container.Descriptors>

          {products.map((product, index) => (
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
