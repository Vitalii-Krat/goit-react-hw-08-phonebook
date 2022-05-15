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
  margin-left: 20px;
  width: 60px;
  background-color: yellow;
  border-radius: 6px;
  color: black;
  padding: 5px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms linear;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ContainerLinkStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
