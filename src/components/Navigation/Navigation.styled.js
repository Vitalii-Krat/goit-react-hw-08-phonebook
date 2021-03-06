import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: lightgreen;
    background-color: rgb(48, 63, 159);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  width: 55px;
  background-color: yellow;
  border-radius: 10px;
  color: black;
  padding: 5px;
  cursor: pointer;
  transform: scale(1.004);
  transition: transform 250ms linear;
  :hover,
  :focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ConteinerLinkStyled = styled.nav`
  display: flex;
  align-items: center;
`;
