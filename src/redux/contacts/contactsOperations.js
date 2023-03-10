import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', async (any, {rejectWithValue}) => {
    try {
      const response = await fetch('https://640815ca8ee73db92e37ec78.mockapi.io/contacts')
      if (!response.ok) {
        throw new Error('Server connection error!')
      }
        return response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact', async (newTask, {rejectWithValue}) => {
    try {
      const response = await fetch('https://640815ca8ee73db92e37ec78.mockapi.io/contacts', {
          method: 'POST',
          headers: {'content-type':'application/json'},
          body: JSON.stringify(newTask)
        })
      if (!response.ok) {
        throw new Error('Error adding contact!')
      }
        return response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', async (id, {rejectWithValue}) => {
    try {
      const response = await fetch(`https://640815ca8ee73db92e37ec78.mockapi.io/contacts/${id}`, {
        method: 'DELETE',
        })
      if (!response.ok) {
        throw new Error('Error delete... !')
      }
        return response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)