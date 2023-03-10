import { configureStore } from '@reduxjs/toolkit'
// import contactReducer from '../redux/contacts/contactSlice'
import contactsReducer from '../redux/contacts/contactsReducer'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
})