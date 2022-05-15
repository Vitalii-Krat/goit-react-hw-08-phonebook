import Navigation from '../Navigation';
import NavAuthentication from '../AuthNav';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/authUser/authUserSelector';
import { HeaderStyled } from './App.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavAuthentication />}
    </HeaderStyled>
  );
}
