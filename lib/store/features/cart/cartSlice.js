import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

//intial state
const cartState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    addToCart: (state, action) => {
        state.push(action.payload)
      },
    updateQuantity(state, action) {
      state[action.payload.id].quantity = action.payload.quantity;
    }
  }
}) 

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;