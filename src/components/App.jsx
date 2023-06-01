import React from 'react';
import Form from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: [...savedContacts] });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  submitCathcer = ({ name, number }) => {
    const person = {
      name: `${name}`,
      id: `${nanoid()}`,
      number: `${number}`,
    };
    const isExist = this.state.contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [person, ...prevState.contacts],
      }));
    }
  };

  filteredNames = () => {
    // const contacts = [...this.state.contacts];
    const filter = this.state.filter;
    const filtered = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered;
  };

  onFilter = e => {
    const nameIs = e.target.value;
    this.setState({ filter: nameIs });
  };

  render() {
    return (
      <>
        <p>Phonebook</p>
        <Form onSubmit={this.submitCathcer} />
        <p>Contacts</p>
        <Filter onFilter={this.onFilter} />
        <ContactList contacts={this.filteredNames()} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
