import { useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/authUserSelector';
import { ConteinerLinkStyled, NavLinkStyled } from './Navigation.styled';
import { AiFillHome } from 'react-icons/ai';
export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <ConteinerLinkStyled>
      <NavLinkStyled to="/">
        <AiFillHome />
      </NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </ConteinerLinkStyled>
  );
}
