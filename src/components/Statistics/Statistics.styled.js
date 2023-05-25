import styled from 'styled-components';

export const Card = styled.h4`
  width: 500px;
  text-align: center;
  font-size: 38px;
  font-weight: 200;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 26px;
  background-color: #33c1c1;
  border-radius: 25px;
  padding: 40px;
  & p {
    background-color: rgb(46 190 190);
    padding: 4px 6px;
    border-radius: 8px;
    box-shadow: 20px 20px 27px #27a2a2, -20px -20px 27px #35dbdb;
  }
`;
