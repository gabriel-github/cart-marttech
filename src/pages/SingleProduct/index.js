import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products";

import { Container } from "./style";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const item = products.filter((product) => product.id === id)[0];
    setProduct(item);
  }, [id]);

  return (
    <Container>
      <Container.WrapperImg>
        <Container.Img src={product.url} alt={product.name} />
      </Container.WrapperImg>

      <Container.Description>
        <Container.Title>{product.name}</Container.Title>

        <Container.Details>{product.description}</Container.Details>

        <Container.Price>{product.price}</Container.Price>
        <Container.Button>adicionar ao carrinho</Container.Button>
      </Container.Description>
    </Container>
  );
}
