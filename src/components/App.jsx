import React, { Component } from 'react';
import FormInput from './FormInput/FormInput';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const STOREG_KEY = JSON.parse(localStorage.getItem('contacts'));
    if (STOREG_KEY) {
      this.setState({ contacts: STOREG_KEY });
    }
  }

  addContact = man => {
    const { contacts } = this.state;
    console.log(man);

    const isNameInclud = contacts.some(contact => contact.name === man.name);
    isNameInclud
      ? alert(`${man.name} already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { name: man.name, number: man.number, id: nanoid() },
          ],
        }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(man => man.id !== id),
    }));
  };

  handleFilterContact = value => {
    this.setState({ filter: value });
  };

  render() {
    const { filter } = this.state;

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
          <FormInput addContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter
            filter={filter}
            handleFilterContact={this.handleFilterContact}
          />
          <ContactList
            filter={filter}
            contacts={this.state.contacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
