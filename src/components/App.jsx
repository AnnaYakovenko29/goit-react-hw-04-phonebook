import { useEffect, useState } from 'react';
import Form from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts([...savedContacts]);
    }
  }, []);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const submitCathcer = ({ name, number }) => {
    const person = {
      name: `${name}`,
      id: `${nanoid()}`,
      number: `${number}`,
    };
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => [person, ...prevContacts]);
    }
  };

  const onDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredNames = () => {
    const filtered = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered;
  };

  return (
    <>
      <p>Phonebook</p>
      <Form onSubmit={submitCathcer} />
      <p>Contacts</p>
      <Filter onFilter={setFilter} />
      <ContactList contacts={filteredNames()} onDelete={onDelete} />
    </>
  );
};
 
