import styled from '@emotion/styled';

export const InputStyle = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  font-size: 30px;

  gap: 15px;
`;

export const Submit = styled.button`
  margin: 0 auto;
  display: block;
  padding: 10px 25px;
  background-color: white;
  border-radius: 8px;
  font-size: 24px;
  border: 1px solid black;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
    box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const FormBox = styled.form`
  padding: 30px;
  background-color: ${props => props.theme.colors.gray};
  gap: 30px;
  flex-direction: column;
  display: flex;
`;

export const Input = styled.input`
  font-size: 28px;
  padding: 10px 20px;
`;
