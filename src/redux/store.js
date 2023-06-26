import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactSlice } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
