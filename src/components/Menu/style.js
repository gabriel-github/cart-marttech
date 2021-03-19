import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.aside`
  width: 100%;
  height: 80px;
  background-color: #720026;
  display: flex;
  justify-content: center;
`;

MenuContainer.Wrapper = styled.div`
  width: 100%;
  max-width: 992px;
  height: 100%;

  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

MenuContainer.Logo = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
`;

export const LinksMenu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;

LinksMenu.Li = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0.2rem;
`;

LinksMenu.Link = styled(Link)`
  color: var(--white);
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    border-bottom: 2px solid #25bb32;
  }
`;
LinksMenu.Cart = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  position: relative;
`;
