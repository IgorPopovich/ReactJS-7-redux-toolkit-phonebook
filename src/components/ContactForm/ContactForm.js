import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactForm = () => {
  const [name, setNume] = useState('')
  const [number, setNumber] = useState('')
  const contacts = useSelector(contactsSelectors.getContacts)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]);

  const handleChangeNume = (event) => {
    setNume(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name === '' || number === '') {
      return
    }
    const newContact = {
      name: name,
      phone: number,
      id: nanoid()
    } 

    if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`)
      setNume('')
      setNumber('')
      return;
    }

    dispatch(contactsOperations.addContact(newContact))
    setNume('')
    setNumber('')
  }

    return (
    <div className={css.contactForm}>
      <form onSubmit={handleSubmit} className={css.form} action="">
        <label className={css.label}>
          Name
          <input
            onChange={handleChangeNume }
            value={name}
            className={css.value}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            onChange={handleChangeNumber }
            value={number}
            className={css.value}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type='submit' className={css.btnAdd}>Add contact</button>
      </form>
    </div>
  );
  
};

ContactForm.propTypes = {
  nume: PropTypes.string,
  number: PropTypes.string,
}; 

export default ContactForm;

