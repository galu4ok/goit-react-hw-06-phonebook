import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: { contacts: contactsInitialState },
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      payload: {
        id: nanoid(),
      },
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
// Експортуємо редюсер
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
// Експортуємо генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
