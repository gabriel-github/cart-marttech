import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Menu from "./components/Menu";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Menu />
      <Content />
    </Router>
  );
}

export default App;
