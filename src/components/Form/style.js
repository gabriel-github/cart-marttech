import styled from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

Container.WrapperForm = styled.div`
  width: 20rem;
  padding: 2rem;

  position: relative;

  background: var(--white);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
`;

Container.CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 0.5rem;

  border: none;

  color: var(--red);
  border-radius: 0.2rem;
  background: transparent;

  font-size: 1.6rem;
`;

Container.Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 0.5rem;

    padding: 0.5rem 1rem;
    border: none;

    color: var(--white);
    border-radius: 0.2rem;
    background: var(--green);
  }
`;

Container.Input = styled.input`
  margin: 0.5rem 0;
  border: 1px solid var(--gray-line);
  outline: none;

  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
`;

Container.InputCPF = styled(InputMask)`
  margin: 0.5rem 0;
  border: 1px solid var(--gray-line);
  outline: none;

  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
`;
