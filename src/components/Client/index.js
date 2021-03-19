import React from "react";
import { Container } from "./style";

export default function Client({ client }) {
  return (
    <Container>
      <Container.Descriptor>
        <span>nome: </span> {client.name}
      </Container.Descriptor>
      <Container.Descriptor>
        <span>cpf: </span> {client.CPF}
      </Container.Descriptor>
      <Container.Descriptor>
        <span>total da compra: </span> {client.total.toFixed(2)}
      </Container.Descriptor>

      <Container.Details>
        <summary>Detalhes</summary>
        <section>
          {client.requests.map((request, index) => (
            <Container.DetailsContent key={index}>
              <Container.Descriptor>
                <span>product {index + 1} </span>
              </Container.Descriptor>
              <Container.Descriptor>
                <span>nome: </span> {request.name}
              </Container.Descriptor>
              <Container.Descriptor>
                <span>descrição: </span> {request.description}
              </Container.Descriptor>
              <Container.Descriptor>
                <span>unidade: </span> {request.price}
              </Container.Descriptor>
              <Container.Descriptor>
                <span>quantidade: </span> {request.amount}
              </Container.Descriptor>

              <Container.Descriptor>
                <span>subtotal: </span> {request.amount * request.price}
              </Container.Descriptor>
            </Container.DetailsContent>
          ))}
        </section>
      </Container.Details>
      <p>{client.moment}</p>
    </Container>
  );
}
