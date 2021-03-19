import styled from "styled-components";

export const Container = styled.section`
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text);

  h1 {
    font-size: 2.5rem;
    color: var(--title);

    @media screen and (max-width: 420px) {
      font-size: 1.5rem;
    }
  }
`;

Container.Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Input = styled.input`
  margin: 0.5rem 0;
  border: 2px solid var(--gray-line);
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;
  outline-color: var(--green);
`;
