import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "../../pages/Products";

export default function Content() {
  return (
    <Switch>
      <Route path="/" exact>
        <Products />
      </Route>
      <Route path="/cart">
        <h1>cart</h1>
      </Route>
      <Route path="/requests">
        <h1>pedidos</h1>
      </Route>
      <Route path="/:id">
        <h1>produto</h1>
      </Route>
    </Switch>
  );
}
