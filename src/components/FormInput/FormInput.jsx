import React, { useState } from 'react';
import s from './FormInput.module.css';

const FormInput = ({ addContact }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addContact(state);
    setState(prevState => ({ ...prevState, name: '', number: '' }));
  };
  console.log(state);
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={s.formInput}>
      <form onSubmit={handleSubmit}>
        <p className={s.name}>Name</p>
        <input type="text" name="name" required onChange={handleChange} />
        <input type="tel" name="number" required onChange={handleChange} />
        <p className={s.name}>Number</p>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default FormInput;
