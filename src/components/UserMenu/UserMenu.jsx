import { useSelector } from 'react-redux';
import { User } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(state => state.user.login);
  return <User>{user}</User>;
};
