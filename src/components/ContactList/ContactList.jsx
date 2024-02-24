import React from 'react';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, onDeleteContact, filter }) => {
  //   getFilteredData = (contacts, filter) => {
  //     if (filter) {
  //       return
  //       );
  //     }
  //   };
  const newArr = contacts.filter(man =>
    man.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(newArr);
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
