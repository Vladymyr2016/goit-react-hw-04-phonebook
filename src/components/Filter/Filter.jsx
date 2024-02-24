import React from 'react';

const Filter = ({ filter, handleFilterContact }) => {
  return (
    <>
      <p>find contacts by name</p>
      <input
        type="text"
        onChange={e => handleFilterContact(e.target.value)}
        value={filter}
      />
    </>
  );
};

export default Filter;
