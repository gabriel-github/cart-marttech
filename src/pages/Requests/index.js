import React, { useContext, useEffect, useState } from "react";
import { RequestsContext } from "../../context/RequestsContext";
import { Container } from "./style";
import Client from "../../components/Client";

export default function Requests() {
  const { clients } = useContext(RequestsContext);
  const [customerToBePickedUp, setCustomerToBePickedUp] = useState("");
  const [filteredClient, setFilteredClient] = useState([]);

  useEffect(() => {
    setFilteredClient(
      clients.filter((client) => {
        return client.name
          .toLowerCase()
          .includes(customerToBePickedUp.toLowerCase());
      })
    );
  }, [customerToBePickedUp, clients]);

  return (
    <Container>
      {clients.length > 0 ? (
        <Container.Main>
          <Container.Input
            type="text"
            value={customerToBePickedUp}
            onChange={(e) => setCustomerToBePickedUp(e.target.value)}
            placeholder="nome do cliente"
          />

          {filteredClient.length > 0 ? (
            filteredClient.map((client, index) => (
              <Client client={client} index={index} key={index} />
            ))
          ) : (
            <h1>cliente não encontrado</h1>
          )}
        </Container.Main>
      ) : (
        <h1>Nenhum pedido realizado</h1>
      )}
    </Container>
  );
}
