import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.2fr;

  padding: 1rem 0;
  border-bottom: 1px solid var(--gray-line);

  p {
    text-align: center;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 460px) {
    grid-template-columns: auto;
  }
`;

Container.ButtonRemove = styled.button`
  margin: 0.5rem auto;

  padding: 0.3rem 1rem;
  border: none;

  color: var(--white);
  border-radius: 0.2rem;
  background: var(--red);
`;

Container.WrapperImg = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 5rem;
    padding: 1rem 0;
  }
`;

Container.WrapperQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  p {
    font-size: 1.2rem;
  }

  button {
    margin: 0.5rem;

    padding: 0.3rem 1rem;
    border: none;

    color: var(--white);
    border-radius: 0.2rem;
    background: var(--green);
  }
`;
