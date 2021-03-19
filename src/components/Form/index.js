import React, { useCallback, useContext, useRef, useState } from "react";
import { Container } from "./style";
import { RequestsContext } from "../../context/RequestsContext";
import Alert from "../Alert";
import { CartContext } from "../../context/CartContext";

export default function Form() {
  const nameInputRef = useRef(null);
  const cpfInputRef = useRef(null);

  const [errorAlert, setErrorAlert] = useState(false);

  const { cartProducts, total, setShowForm, clearCart } = useContext(
    CartContext
  );

  const { addClientInList } = useContext(RequestsContext);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const cpfValidation = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

      if (cpfValidation.test(cpfInputRef.current.value)) {
        const client = {
          moment: new Date().toLocaleString(),
          total: total,
          name: nameInputRef.current.value,
          CPF: cpfInputRef.current.value,
          requests: cartProducts,
        };

        addClientInList(client);
        setShowForm(false);
        clearCart();
      } else {
        setErrorAlert(true);

        setTimeout(() => {
          setErrorAlert(false);
        }, 3 * 1000);
      }
    },
    [cartProducts, total, setShowForm, clearCart, addClientInList]
  );

  return (
    <Container>
      <Container.WrapperForm>
        {errorAlert && <Alert message="insira um CPF valido!" />}
        <Container.CloseButton onClick={() => setShowForm(false)}>
          x
        </Container.CloseButton>

        <Container.Form action="/" method="post" onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <Container.Input type="text" id="name" ref={nameInputRef} required />

          <label htmlFor="cpf">CPF</label>
          <Container.InputCPF
            type="text"
            id="cpf"
            placeholder="000.000.000-00"
            mask="999.999.999-99"
            ref={cpfInputRef}
            required
          />
          <button>Enviar</button>
        </Container.Form>
      </Container.WrapperForm>
    </Container>
  );
}
