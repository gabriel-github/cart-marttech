import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  color: var(--text);

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

Container.WrapperImg = styled.div`
  display: flex;
  justify-content: center;
`;

Container.Img = styled.img`
  width: 14rem;
  height: 19rem;
`;

Container.Description = styled.div`
  padding: 1rem;
`;

Container.Title = styled.header`
  font-size: 2rem;
  font-weight: bold;
  color: var(--tittle);
`;

Container.Details = styled.article`
  color: var(--tittle);
  margin-top: 3rem;
`;

Container.Price = styled.p`
  font-size: 1.5rem;
  color: var(--green);
  margin-top: 1.5rem;
`;

Container.Button = styled.button`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 0.1rem;
  outline: none;

  background-color: var(--green);
  color: var(--white);
  margin-top: 1.5rem;

  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: var(--green-dark);
  }
`;
