// import React from 'react';
import propTypes from 'prop-types';
import { UserList, Delete, Elem, UserName, Loader } from './User.styled';
import { useSelector } from 'react-redux';
import { AiFillPhone, AiFillSmile } from 'react-icons/ai';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/formSlice';
import { useEffect, useState } from 'react';
import { Puff } from 'react-loader-spinner';

const User = () => {
  const { data, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
  const [filteredContacts, setFilteredContacts] = useState([]);
  // console.log(data);

  const input = useSelector(state => state.filter);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const filteredContacts = await data.filter(contact =>
          contact.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredContacts(filteredContacts);
      } catch (error) {}
    };
    getContacts();
    // console.log(filteredContacts);
  }, [data, input]);

  return (
    <>
      {isLoading && (
        <Loader>
          <Puff />
        </Loader>
      )}
      {filteredContacts !== [] && (
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
                disabled={isDeliting}
                onClick={() => deleteContact(id)}
              >
                {isDeliting && <Puff height="20" width="20" color="#be2116" />}
                {!isDeliting && <Delete />}
              </button>
            </UserName>
          ))}
        </UserList>
      )}
    </>
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
