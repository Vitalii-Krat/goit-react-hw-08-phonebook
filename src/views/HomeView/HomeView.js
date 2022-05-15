import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/authUserSelector';
import {
  TitleHomePageStyled,
  ContainerHomePageStyled,
  NavLinkHomeViewStyled,
  SpanApp,
} from './HomeView.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BsBoxArrowInRight } from 'react-icons/bs';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <ContainerHomePageStyled>
      <TitleHomePageStyled>
        Hi, I am your
        <SpanApp>Contacts App!</SpanApp>{' '}
      </TitleHomePageStyled>

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <NavLinkHomeViewStyled to="/register">
            <BsFillPersonPlusFill />
          </NavLinkHomeViewStyled>
          <NavLinkHomeViewStyled to="/login">
            <BsBoxArrowInRight />
          </NavLinkHomeViewStyled>
        </>
      )}
    </ContainerHomePageStyled>
  );
}
