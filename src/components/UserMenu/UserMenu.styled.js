import styled from 'styled-components';

export const ConteinerUserMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const TextUserMenuStyled = styled.div`
  font-weight: 700;
  margin-right: 12;
  margin-bottom: 5px;
  color: white;
`;

export const LogOutBtn = styled.button`
  font-weight: 500;
  font-size: 30;
  text-align: center;
  margin-bottom: 25px;
  padding: 5px;
  background-color: yellow;
  transform: scale(1);
  transition: transform 250ms linear;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
