import React from 'react';

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <li key={id}>
        {name} {number}
        <button type="submit" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
