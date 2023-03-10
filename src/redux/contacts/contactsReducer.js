import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './contactsOperations'

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload
    },
    [addContact.fulfilled]: (state, action) => {
       state.contacts.items = [
            ...state.contacts.items,
            action.payload
        ]
    },
    [deleteContact.fulfilled]: (state, action) => {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id)
    },
  }
})

export default contactSlice.reducer
export const { filterContacts } = contactSlice.actions
