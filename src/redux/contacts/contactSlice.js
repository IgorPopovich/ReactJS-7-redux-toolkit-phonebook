// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts', async (_, {rejectWithValue}) => {
//     try {
//       const response = await fetch('https://640815ca8ee73db92e37ec78.mockapi.io/contacts')
      
//       if (!response.ok) {
//         throw new Error('Server error!')
//       }
      
//       const data =  response.json()
//       return data

//     } catch (error) {
//       return rejectWithValue(error.message)
//     }
//   }
// )

// export const deleteContactId = createAsyncThunk(
//   'contacts/deleteContactId', async (id, {rejectWithValue, dispatch}) => {
//     try {
//       const response = await fetch(`https://640815ca8ee73db92e37ec78.mockapi.io/contacts/${id}`, {
//         method: 'DELETE'
//       })
      
//       if (!response.ok) {
//         throw new Error('Can not delete contact. Server error!')
//       }

//       dispatch(deleteContact({id}))

//     } catch (error) {
//       return rejectWithValue(error.message)
//     }
//   }
// )

// export const addNewContact = createAsyncThunk(
//   'contacts/addNewContact', async (contact, {rejectWithValue, dispatch}) => {
//     console.log('contact - ', contact)
//     try {
//       const response = await fetch('https://640815ca8ee73db92e37ec78.mockapi.io/contacts', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application.json'
//         },
//         body: JSON.stringify(contact)
//       })
      
//       if (!response.ok) {
//         throw new Error('Can not add contact. Server error!')
//       }

//       const data = await response.json()
//       dispatch(addContact(data))

//       console.log('data - ', data)

//     } catch (error) {
//       return rejectWithValue(error.message)
//     }
//   }
// )

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//         state.contacts.items.push(action.payload)
//     },
//     deleteContact(state, action) {
//         state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id)
//     },
//     filterContact(state, action) {
//       state.filter = action.payload
//     },
//   },
//   extraReducers: {
//     [fetchContacts.pending]: (state, action) => {
//       state.contacts.isLoading = true;
//       state.contacts.error = null;
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//       state.contacts.isLoading = false;
//       state.contacts.items = action.payload
//     },
//     [fetchContacts.rejected]: (state, action) => {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload
//     },
//     [addNewContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts.items.push(action.payload);
//     },
//     [deleteContactId.rejected]: (state, action) => {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload
//     },
//     // [deleteContactId.pending]: (state, action) => {
//     //   state.contacts.isLoading = true;
//     //   state.contacts.error = null;
//     // },
//     // [deleteContactId.fulfilled]: (state, action) => {
//     //   state.contacts.isLoading = false;
//     //   state.contacts.items = action.payload
//     // },
//     // [deleteContactId.rejected]: (state, action) => {
//     //   state.contacts.isLoading = false;
//     //   state.contacts.error = action.payload
//     // },
//   }
// })

// export const { addContact, deleteContact, filterContact } = contactSlice.actions

// export default contactSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   contacts: [],
//   filter: ''
// }


// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//         state.contacts.push(action.payload)
//     },
//     deleteContact(state, action) {
//         state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
//     },
//     filterContact(state, action) {
//       state.filter = action.payload
//     },
//   },
// })


// export const { addContact, deleteContact, filterContact } = contactSlice.actions

// export default contactSlice.reducer

