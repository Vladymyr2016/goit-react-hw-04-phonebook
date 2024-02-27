import React, { useEffect, useState } from 'react';
import FormInput from './FormInput/FormInput';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const STOREG_KEY = JSON.parse(localStorage.getItem('contacts'));
    if (STOREG_KEY) {
      return STOREG_KEY;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isNameInclud = contacts.some(el => el.name === contact.name);
    console.log(contact);

    isNameInclud
      ? alert(`${contact.name} already in contacts`)
      : setContacts(prev => [
          ...prev,
          { id: nanoid(), name: contact.name, number: contact.number },
        ]);
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleFilterContact = value => {
    setFilter(value);
  };

  return (
    <>
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <FormInput addContact={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterContact={handleFilterContact} />
        <ContactList
          filter={filter}
          contacts={contacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
};

export default App;
