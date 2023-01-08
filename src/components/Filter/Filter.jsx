import React from 'react';
import { InputStyle, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const input = useSelector(state => state.filter);

  const handleInputChange = event => {
    const inputData = event.currentTarget.value;
    dispatch(addFilter(inputData));
  };

  return (
    <InputStyle htmlFor="">
      Filter
      <Input
        type="text"
        value={input}
        name="name"
        placeholder="Name for search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />
    </InputStyle>
  );
};
