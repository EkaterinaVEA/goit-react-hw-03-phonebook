import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0 auto 50px;
`;

export const Label = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  font-weight: 500;
  left: 0;
  bottom: 5px;
  margin-bottom: 10px;
  cursor: text;
  font-size: 20px;
  color: var(--grey);

  transition: color 250ms ease, transform 250ms ease;

  & svg {
    margin-right: 10px;
    font-weight: 500;
    transition: color 250ms ease, transform 250ms ease;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding-left: 30px;
  border: none;
  border-bottom: 1px solid var(--yellow);
  font-size: 20px;
  color: var(--yellow);
  background-color: transparent;

  &::placeholder {
    opacity: 0;
    color: var(--yellow);
    font-weight: 700;
    transition: opacity 250ms ease;
  }

  &:focus {
    outline: none;
    border-color: var(--yellow);
    &::placeholder {
      opacity: 0.7;
      font-weight: 700;
      transition-delay: 250ms;
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 0;
    color: var(--yellow);
    & svg {
      font-weight: 700;
      color: var(--yellow);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  cursor: pointer;
  border: 2px solid var(--yellow);
  border-radius: 20px;
  font-size: 20px;
  text-transform: uppercase;
  color: var(--yellow);
  background-color: transparent;
  transition: all 250ms ease-in-out;
  &:hover {
    border-color: var(--yellow);
    color: var(--yellow);
  }
  & svg {
    margin-right: 10px;
  }
`;
export const ContainerForm = styled.div`
  position: relative;
  width: 400px;
  margin-bottom: 50px;
`;
