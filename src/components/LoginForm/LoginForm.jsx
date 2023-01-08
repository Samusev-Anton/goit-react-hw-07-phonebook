import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/userSlice';
import { LogBtn, LogForm, LogInput } from './LoginForm.styled';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.login.value === '') {
      return alert('Please, pass authorization');
    }
    dispatch(logIn(form.elements.login.value));
    form.reset();

    navigate('/Phonebook', { replace: true });
  };

  return (
    <LogForm onSubmit={handlerSubmit}>
      <LogInput placeholder="User Name" type="text" name="login" />
      <LogBtn type="submit">Войти</LogBtn>
    </LogForm>
  );
};
