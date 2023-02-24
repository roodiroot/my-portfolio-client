import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  languageRU: true,
};

export const languageSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLeng(state) {
      state.languageRU = !state.languageRU;
    },
  },
});
export default languageSlice.reducer;
