import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerHomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleHomePageStyled = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  text-align: center;
  margin-bottom: 100px;
  color: black;
`;

export const NavLinkHomeViewStyled = styled(NavLink)`
  font-weight: 400;
  font-size: 50;
  text-align: center;
  margin-bottom: 10px;
  padding: 20px;
  background-color: yellow;
  transform: scale(1);
  transition: transform 250ms linear;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const SpanApp = styled.span`
  color: rgb(63, 81, 181);
  font-weight: 700;
`;
