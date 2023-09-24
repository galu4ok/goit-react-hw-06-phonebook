import { createSlice } from '@reduxjs/toolkit';

export const filterInitialState = '';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: { filter: filterInitialState },
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
// Експортуємо редюсер та генератори екшенів
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
