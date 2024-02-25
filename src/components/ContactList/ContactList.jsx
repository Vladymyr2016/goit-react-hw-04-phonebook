import React from 'react';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, onDeleteContact, filter }) => {
  const newArr = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul>
        <div>
          {newArr.map(contact => {
            return (
              <Contact
                key={contact.id}
                {...contact}
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
