import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

//intial state
const dataState = [];

export const dataSlice = createSlice({
  name: 'data',
  initialState: dataState,
  reducers: {
    dataadd: (state, action) => {
        state.push(action.payload)
      },
  }
}) 

export const {dataadd} = dataSlice.actions;

export default dataSlice.reducer;