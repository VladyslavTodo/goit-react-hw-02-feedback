import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-bottom: 70px;
`;

export const Button = styled.button`
  background-color: aliceblue;
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid transparent;
  color: black;
  background-color: aquamarine;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s linear;
  box-shadow: 9px 9px 18px #438770, -9px -9px 18px #95fff8;
  :hover {
    background-color: aliceblue;
    border: 1px solid black;
  }
`;
