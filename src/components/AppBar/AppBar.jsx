import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/userSlice';
import { Header, NanLinkBox, NavBtn, Nav, NavLink } from './AppBar.styled';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Header>
      <Nav>
        {isLoggedIn ? (
          <NavBtn type="button" onClick={() => dispatch(logOut())}>
            Log Out
          </NavBtn>
        ) : (
          <NanLinkBox>
            <NavLink to="/login">Log In</NavLink>
          </NanLinkBox>
        )}
      </Nav>
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};
