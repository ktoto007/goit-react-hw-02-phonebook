import React, { Component } from 'react';
import { FormContaks } from './form/FormContaks';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = values => {
    this.setState(prevState => {
      if (
        prevState.contacts.some(
          ({ name }) => name.toLowerCase() === values.name.toLowerCase()
        )
      ) {
        alert(`${values.name} is already in contacts`);
        return { contacts: [...prevState.contacts] };
      } else {
        return { contacts: [...prevState.contacts, values] };
      }
    });
  };

  filtredParam = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onFilterContact = (contacts, param) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(param.toLowerCase())
    );
  };

  deleteContact = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = this.onFilterContact(contacts, filter);
    return (
      <>
        <h2>Phonebook</h2>
        <FormContaks addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filtredParam={this.filtredParam} />
        <ContactList
          contacts={filtredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
