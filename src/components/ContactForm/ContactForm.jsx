import { useDispatch } from 'react-redux';
import { addContact } from 'redux/sliceContacts';
import css from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.currentTarget;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
      const personObject = { name: name, number: number }
      dispatch(addContact(personObject))
      form.reset();
    } 

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <p className={css.p}>Name</p>
        <input 
          className={css.input} 
          type='text' 
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p className={css.p}>Number</p>
        <input 
          className={css.input} 
          type='tel' 
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type='submit'>Add contact</button>
      </form>
    )
}

export { ContactForm }