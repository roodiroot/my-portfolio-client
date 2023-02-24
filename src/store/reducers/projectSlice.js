import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoading: false,
  error: '',
  projects: [],
};

export const projectSlice = createSlice({
  name: 'popap',
  initialState,
  reducers: {
    projectFetching(state) {
      state.isLoading = true;
    },
    projectFetchingSuccess(state, actions) {
      state.isLoading = false;
      state.error = '';
      state.projects = actions.payload;
    },
    projectFetchingError(state, actions) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export default projectSlice.reducer;
