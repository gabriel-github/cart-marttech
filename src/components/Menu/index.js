import React from "react";
import { BiBookReader } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";

import { LinksMenu, MenuContainer } from "./style";

export default function Menu() {
  return (
    <MenuContainer>
      <MenuContainer.Wrapper>
        <MenuContainer.Logo to="/">
          <BiBookReader color={"#fff"} fontSize={"2rem"} />
        </MenuContainer.Logo>

        <LinksMenu>
          <LinksMenu.Li>
            <LinksMenu.Link to="/">Produtos</LinksMenu.Link>
          </LinksMenu.Li>
          <LinksMenu.Li>
            <LinksMenu.Link to="/requests">Pedidos</LinksMenu.Link>
          </LinksMenu.Li>
          <LinksMenu.Li>
            <LinksMenu.Cart to="/cart">
              <FaCartArrowDown color={"#fff"} fontSize={"1.5rem"} />
            </LinksMenu.Cart>
          </LinksMenu.Li>
        </LinksMenu>
      </MenuContainer.Wrapper>
    </MenuContainer>
  );
}
