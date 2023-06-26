import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    update(state, action) {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = filterSlice.actions;

// export default filterSlice.reducer;
