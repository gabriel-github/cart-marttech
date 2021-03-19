import styled from "styled-components";

export const Container = styled.article`
  width: 40rem;
  padding: 2rem;
  margin: 0.5rem;

  border: 2px solid var(--gray-line);
  border-radius: 0.2rem;

  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 590px) {
    width: 30rem;
  }

  @media screen and (max-width: 460px) {
    width: 24rem;
  }
`;

Container.Descriptor = styled.p`
  span {
    color: #450920;
    font-weight: bold;
  }
`;

Container.Details = styled.details`
  margin: 0.5rem 0;

  summary {
    color: #450920;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
`;

Container.DetailsContent = styled.div`
  margin-top: 0.5rem;
`;
