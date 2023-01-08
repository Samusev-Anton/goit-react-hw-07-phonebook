import React from 'react';
import propTypes from 'prop-types';
import { UserList, Delete, Elem, UserName } from './User.styled';
import { useSelector } from 'react-redux';
import { AiFillPhone, AiFillSmile } from 'react-icons/ai';
import { useGetContactsQuery } from 'redux/formSlice';

const User = () => {
  const { data } = useGetContactsQuery();
  console.log(data);

  // const [deleteContact] = useDeleteContactMutation();
  const input = useSelector(state => state.filter);

  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );
  // console.log(filteredContacts);

  return (
    <UserList>
      {filteredContacts.map(({ name, phone, id }) => (
        <UserName key={id}>
          <Elem>
            <AiFillSmile />
            <span>{name}:</span>
          </Elem>
          <Elem>
            <AiFillPhone />
            <span>{phone}</span>
          </Elem>

          <button
            type="button"
            // onClick={() => deleteContact(contacts.id)}
          >
            <Delete />
          </button>
        </UserName>
      ))}
    </UserList>
  );
};

export default User;

User.propTypes = {
  filter: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
