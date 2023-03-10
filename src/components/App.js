import React, {useEffect} from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import {useDispatch, useSelector } from 'react-redux'
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import css from './App.module.css';
import PropTypes from 'prop-types';

export const App = () => {
  const contacts = useSelector(contactsSelectors.getContacts)
  const dispatch = useDispatch()
  const { error } = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filter)

  const normalSize = filter.toLocaleLowerCase()
  const visibleContacts = contacts.filter(contact => 
    contact.name.toLocaleLowerCase().includes(normalSize)
  )

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]);

    return (
        <div>
          {error && <h2 className={css.error}>{error}</h2>}
          <div className={css.main}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactList contacts={visibleContacts} />
          </div>
        </div>
        );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
}; 