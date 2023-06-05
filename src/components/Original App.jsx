import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

const Notification = ({message}) => <p>{message}</p>

const App = () => {

//Estados ------------------------------------------------------------------

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');
  const [contactsToShow, setContactsToShow ] = useState(contacts);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
 // -----------------------------------------------------------------------------  

// Logica -------------------------------------------------------------------------

// AddContact
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const namee = name.toLowerCase();

    for (let person of contacts) {
      if (person.name.toLowerCase() === namee) {
        setMessage(name + ' is already in contacts')
        return
      } else {
        continue
      }
    }

    const number = form.elements.number.value;
    const id = nanoid();
    const personObject = { name: name, number: number, id: id }
    setContacts(prevState => prevState.concat(personObject));
    form.reset()
    setName('')
  }
// -------------------

// Delete -------------------------------
  const handleDelete = contactId => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== contactId) )
  }

// -------------------------------------------

// Filter -------------------------------------------
  const onChangeFilter = ({target}) => setFilter(target.value)
  const onChangeName = ({target}) => setName(target.value)
// -----------

// Efectos secundarios -------------------
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
  useEffect(() => {
    setContactsToShow(contacts)
  }, [contacts])

  useEffect(() => {
    setContactsToShow(contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())))
  }, [filter, contacts])

  useEffect(() => {
    setMessage('')
  }, [name])

// --------------------------
// Render --------------

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Notification message={message}/>
      <ContactForm handleSubmit={handleSubmit} name={name} onChangeName={onChangeName}/>
      <h2>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} filter={filter}/>
      <ContactList arr={contactsToShow} handleDelete={handleDelete} />
    </div>
  );
}

export { App }