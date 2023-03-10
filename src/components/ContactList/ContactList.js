import React from 'react';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import {useDispatch} from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
    const { isLoading } = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch()

    return <div>
        <ul className={css.contacts}>
        {isLoading && <Loader />}
            {contacts.length > 0 && contacts.map(( {id, name, phone} ) => (
                <li className={css.item} key={id}>
                    <p className={css.text}>{name}</p>
                    <p className={css.text}>{phone}</p>
                    <button onClick={() => dispatch(contactsOperations.deleteContact(id))} className={css.delete}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
}

ContactList.propTypes = {
    contacts: PropTypes.array,
  }; 

export default ContactList;

