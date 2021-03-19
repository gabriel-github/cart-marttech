import React, { useContext } from "react";
import { Container } from "./style";
import { CartContext } from "../../context/CartContext";
import ProductOfCart from "../../components/ProductOfCart";

import { useHistory } from "react-router-dom";
import Form from "../../components/Form";

export default function Cart() {
  const { cartProducts, showForm, setShowForm, total } = useContext(
    CartContext
  );
  const history = useHistory();

  return (
    <Container>
      {cartProducts.length > 0 ? (
        <>
          {showForm && <Form />}
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
              <Container.WrapperButton>
                <Container.Button onClick={() => history.push("/")}>
                  continuar comprando
                </Container.Button>
              </Container.WrapperButton>

              <Container.Order>
                <h4>
                  Total: <span>{total.toFixed(2)}</span>
                </h4>
                <button onClick={() => setShowForm(true)}>
                  finalizar compra
                </button>
              </Container.Order>
            </Container.OrderWrapper>
          </Container.Main>
        </>
      ) : (
        <h1>O Carrinho está vazio</h1>
      )}
    </Container>
  );
}
