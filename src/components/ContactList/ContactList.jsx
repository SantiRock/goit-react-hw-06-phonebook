import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, statusFilter) => {
  const filter = statusFilter;
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
 }

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <ul>
      {visibleContacts.map( person => (
        <li className={css.li} key={person.id}>
          <Contact contact={person}/>
        </li>

      ))}
    </ul> 
  )
}

export { ContactList }
