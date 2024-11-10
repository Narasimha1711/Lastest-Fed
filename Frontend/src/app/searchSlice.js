import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
  name: 'userDetails',
  initialState: {
  searchQuery: '' // Keep the naming consistent
  },
  reducers: {
    getSearchQuery: (state, action) => {
      state.searchQuery = action.payload.name; // Use "searchQuery" here
    },
  },
});


export const { getSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;