import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 15rem;
  height: 3rem;

  position: fixed;
  top: 3rem;
  right: 2rem;

  background-color: var(--white);
  border-radius: 0.2rem;
  border-left: 0.5rem solid var(--red);

  display: flex;
  align-items: center;

  p {
    padding-left: 1rem;
  }
`;
