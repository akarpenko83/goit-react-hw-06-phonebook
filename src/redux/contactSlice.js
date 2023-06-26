import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload);
    },
    removeContact(state, action) {
      state.value = state.value.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

export const { addContact, removeContact } =
  contactSlice.actions;
