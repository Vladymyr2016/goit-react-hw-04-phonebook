import React from 'react';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, onDeleteContact, filter }) => {
  const newArr = contacts.filter(man =>
    man.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul>
        <div>
          {newArr.map(man => {
            return (
              <Contact
                key={man.id}
                {...man}
                onDeleteContact={onDeleteContact}
              />
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default ContactList;
