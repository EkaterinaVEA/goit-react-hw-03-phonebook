import styled from '@emotion/styled';

export const Label = styled.label`
  position: absolute;
  left: 0;
  bottom: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: text;
  font-size: 20px;
  color: var(--grey);

  transition: color 250ms ease-in-out, transform 250ms ease-in-out;
  & svg {
    margin-right: 10px;
    transition: color 250ms ease-in-out, transform 250ms ease-in-out;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  padding-left: 40px;
  border: none;
  border-bottom: 1px solid var(--yellow);
  font-size: 20px;
  color: var(--yellow);
  background-color: transparent;
  transition: all 250ms ease-in-out;
  &::placeholder {
    opacity: 0;
    color: var(--yellow);
    transition: opacity 250ms ease;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--yellow);
    &::placeholder {
      opacity: 0.7;
      transition-delay: 250ms;
    }
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 0;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--yellow);
    & svg {
      color: var(--yellow);
    }
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  width: 400px;
  margin-bottom: 25px;
`;
