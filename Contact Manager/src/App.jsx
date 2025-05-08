import React, { useEffect, useState } from 'react'
import Contact from './Components/Contact/Contact'
import ContactList from './Components/ContactList/ContactList'
import Header from './Components/Header/Header'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {

  const [contacts, setContacts] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    else {
      setIsInitialLoad(false);
    }
  }, [contacts, isInitialLoad]);

  useEffect(() => {
    const data = localStorage.getItem('contacts');
    if (data) {
      setContacts(JSON.parse(data));
    }
  }, []);

  const addContact = (data) => {
    setContacts([...contacts, { id: uuidv4(), data }]);
  }

  const deleteContact = (id) => {
    const updatedList = contacts.filter((value) => {
      return value.id !== id;
    })
    setContacts(updatedList);
  }

  return (
    <>
      <Header />
      <Contact addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </>
  )
}

export default App
