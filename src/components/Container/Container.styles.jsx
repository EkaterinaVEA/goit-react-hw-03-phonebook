import styled from '@emotion/styled';

export const Main = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: #33333340 0 0 10px 5px;
  background-color: #d7d8db;
  & h1,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaabad;
    font-size: 28px;
    margin-bottom: 50px;
    margin-top: 0;
    & svg {
      margin-right: 15px;
      color: #fff;
    }
  }
`;

export const ContainerContacts = styled.div`
  width: 450px;
`;
export const ContainerAdd = styled.div`
  width: 450px;
`;
