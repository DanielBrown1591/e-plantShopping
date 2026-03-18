import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    // Existing reducers like removeItem
    removeItem(state, action) {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Add updateQuantity here inside reducers
    updateQuantity(state, action) {
      const { name, quantity } = action.payload; // Destructure name and quantity
      const itemToUpdate = state.items.find(item => item.name === name); // Find item
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update quantity
      }
    },

    // other reducers if any...
  }
});

export const { removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
