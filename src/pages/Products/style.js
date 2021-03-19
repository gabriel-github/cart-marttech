import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

Container.Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  color: var(--title);
`;

Container.Input = styled.input`
  width: 15rem;
  border: 2px solid var(--gray-line);
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;
  outline-color: var(--green);
  margin: 0 1.5rem;
`;

Container.Main = styled.main`
  padding: 1rem;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

Container.Product = styled(motion.div)`
  padding: 0.5rem;
  width: 14rem;
  margin: 0;

  cursor: pointer;
`;

Container.ProductInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Container.ProductImg = styled.img`
  width: 100%;
  height: 19rem;
`;
