import styled from '@emotion/styled';
import { AiTwotoneDelete } from 'react-icons/ai';

export const UserList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;

  font-size: 20px;
  font-weight: 500;
  background-color: #fff;
  /* width: 300px; */

  gap: 30px;
`;

export const UserName = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;

  gap: 60px;
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;
export const Elem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Delete = styled(AiTwotoneDelete)`
  fill: red;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
    box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  }
`;
