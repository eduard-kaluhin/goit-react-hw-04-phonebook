import React, { useState, useEffect } from 'react';
import './App.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = ( ) => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialState;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const  onAddContact = contact => {
    const { name } = contact;
    if (contacts.find(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    setContacts(contacts => [ contact,...contacts]);
  };

  const handleDeleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={handleChange} filter={filter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;








