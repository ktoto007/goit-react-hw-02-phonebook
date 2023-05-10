import React, { Component } from 'react';
import { FormContaks } from './form/FormContaks';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    console.log(prevState);
    if (prevState.contacts.length !== this.state.contacts.length) {
      console.log(this.state.contacts);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
