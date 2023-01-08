import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 20px 50px;
  border-bottom: 2px solid black;
  margin: 0 30px;
`;

export const NavBtn = styled.button`
  font-size: 30px;
  background-color: whitesmoke;
  padding: 10px 25px;
  border: 1px solid black;
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
    box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  }
`;
export const NanLinkBox = styled.div`
  width: 800px;
  display: flex;
  justify-content: left;
  /* margin-right: 500px; */
`;

export const NavLink = styled(Link)`
  font-size: 30px;
  background-color: whitesmoke;
  padding: 10px 25px;
  border: 1px solid black;
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
    box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: left;
  gap: 30px;
`;
