import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { products } from "../../products";

import { Container } from "./style";

export default function SingleProduct() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const history = useHistory();

  useEffect(() => {
    const item = products.filter((product) => product.id === id)[0];
    setProduct(item);
  }, [id]);

  function addCart(product) {
    addToCart(product);
    history.push("/cart");
  }

  return (
    <Container>
      <Container.WrapperImg>
        <Container.Img src={product.url} alt={product.name} />
      </Container.WrapperImg>

      <Container.Description>
        <Container.Title>{product.name}</Container.Title>

        <Container.Details>{product.description}</Container.Details>

        <Container.Price>{product.price}</Container.Price>
        <Container.Button onClick={() => addCart(product)}>
          adicionar ao carrinho
        </Container.Button>
      </Container.Description>
    </Container>
  );
}
