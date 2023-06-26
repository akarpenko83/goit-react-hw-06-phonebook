import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactSlice } from './contactSlice';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer,
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
