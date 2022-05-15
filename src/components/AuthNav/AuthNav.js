import { NavLinkStyled, ContainerLinkStyled } from './AuthNav.styled';

export default function NavAuthentication() {
  return (
    <ContainerLinkStyled>
      <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
    </ContainerLinkStyled>
  );
}
