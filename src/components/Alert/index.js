import React from "react";

import { Container } from "./style";

function Alert({ message }) {
  return (
    <Container initial={{ x: "1000px" }} animate={{ x: 0 }}>
      <p>{message}</p>
    </Container>
  );
}

export default Alert;
