import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../products";
import { Container } from "./style";

export default function Products() {
  const [soughtProduct, setSougthProduct] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    setFilteredProduct(
      products.filter((product) => {
        return product.name.toLowerCase().includes(soughtProduct.toLowerCase());
      })
    );
  }, [soughtProduct]);

  return (
    <Container>
      <Container.Section>
        <Container.Input
          type="text"
          placeholder="buscar..."
          value={soughtProduct}
          onChange={(e) => setSougthProduct(e.target.value)}
        />

        <Container.Main>
          {filteredProduct.length > 0 ? (
            filteredProduct.map((product, index) => (
              <Link to={`/${product.id}`} key={index}>
                <Container.Product
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Container.ProductImg src={product.url} alt={product.name} />
                  <Container.ProductInfos>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </Container.ProductInfos>
                </Container.Product>
              </Link>
            ))
          ) : (
            <h1>Produto não encontrado</h1>
          )}
        </Container.Main>
      </Container.Section>
    </Container>
  );
}
