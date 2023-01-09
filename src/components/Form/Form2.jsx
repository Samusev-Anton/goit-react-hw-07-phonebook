import React from 'react';
import { InputStyle, Submit, FormBox, Input } from './Form.styled';
import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'redux/formSlice';
import { Puff } from 'react-loader-spinner';

const Form2 = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  // console.log(isLoading);
  const { data } = useGetContactsQuery();
  const [user, setUser] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    // console.log(event.currentTarget.name);
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'user':
        setUser(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: user,
      phone: number,
    };

    formSubmitHandler(newContact);

    reset();
  };

  const formSubmitHandler = newContact => {
    const checkContact = data.some(
      existContact =>
        existContact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    return checkContact ? alert('такое имя уже есть') : addContact(newContact);
  };

  const reset = () => {
    setUser('');
    setNumber('');
  };

  return (
    <>
      <FormBox onSubmit={handleSubmit}>
        <InputStyle htmlFor="">
          Name
          <Input
            type="text"
            value={user}
            name="user"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </InputStyle>
        <InputStyle htmlFor="">
          Number
          <Input
            type="tel"
            value={number}
            name="number"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </InputStyle>

        <Submit type="submit" disabled={isLoading}>
          {isLoading && <Puff height="25" width="25" color="#130b0b" />}
          Add contacts
        </Submit>
      </FormBox>
    </>
  );
};

export default Form2;
