import { createSlice } from '@reduxjs/toolkit';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

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
// Create a Redux store using configureStore from Redux Toolkit const store = configureStore({ // Define the root reducer object reducer: { // 'cart' is the name of the slice in the store, and it's managed by cartReducer cart: cartReducer, }, }); export default store; // Export the store for use in the app (e.g., in <Provider store={store}>)
export default store;
