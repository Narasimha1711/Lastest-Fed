import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'userDet',
  initialState: {
  username: '',
  cartCount: 0 // Keep the naming consistent
  },
  reducers: {
    getUsername: (state, action) => {
      state.username = action.payload; // Use "searchQuery" here
    },

    getCartCount: (state, action) => {
        state.cartCount += action.payload;
    },
    clearDetails: (state) => {
        state.username = '',
        state.cartCount = 0;
    },
    clearCart: (state) => {
        state.cartCount = 0;
    } 
  },
});

export const { getUsername, getCartCount, clearDetails, clearCart } = userSlice.actions;
export default userSlice.reducer;
