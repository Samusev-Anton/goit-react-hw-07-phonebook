import styled from '@emotion/styled';

export const LogBtn = styled.button`
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

export const LogForm = styled.form`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  padding: 30px;
  background-color: ${props => props.theme.colors.gray};
  flex-direction: column;
  gap: 50px;
`;

export const LogInput = styled.input`
  width: 300px;
  padding: 10px 20px;
  font-size: 28px;
`;
