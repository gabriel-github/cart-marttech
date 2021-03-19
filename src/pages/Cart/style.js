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
  width: 100%;
  padding: 1rem;
`;

Container.WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
`;

Container.Button = styled.button`
  margin-top: 2rem;
  margin-left: 1rem;

  width: 12rem;
  padding: 0.5rem 1rem;
  border: none;

  color: var(--white);
  border-radius: 0.2rem;
  background: var(--green);
`;

Container.Descriptors = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.3fr;

  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-line);

  p {
    text-align: center;
  }

  @media screen and (max-width: 460px) {
    display: none;
  }
`;

Container.Order = styled.div`
  width: 20rem;
  margin-top: 2rem;

  padding: 2rem;
  border: 1px solid var(--gray-line);
  border-radius: 0.2rem;

  h4 {
    display: grid;
    grid-template-columns: 1fr 1fr;

    font-size: 2rem;

    span {
      color: var(--title);
    }
  }

  button {
    margin-top: 2rem;

    padding: 0.5rem 1rem;
    border: none;

    color: var(--white);
    border-radius: 0.2rem;
    background: var(--green);
  }
`;

Container.OrderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 555px) {
    flex-direction: column;
    align-items: center;
  }
`;
