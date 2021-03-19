import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../../pages/Cart";
import Products from "../../pages/Products";
import Requests from "../../pages/Requests";
import SingleProduct from "../../pages/SingleProduct";

export default function Content() {
  return (
    <Switch>
      <Route path="/" exact>
        <Products />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/requests">
        <Requests />
      </Route>
      <Route path="/:id">
        <SingleProduct />
      </Route>
    </Switch>
  );
}
