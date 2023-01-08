import Form2 from '../components/Form/Form2';
import User from '../components/User/User';
import { Filter } from '../components/Filter/Filter';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BookBox } from './PhoneBook.styled';

export const PhoneBook = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const contacts = useSelector(state => state.contacts);
  // console.log(contacts);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <BookBox>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Form2 />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      {contacts && <User />}
      <Filter />
    </BookBox>
  );
};
