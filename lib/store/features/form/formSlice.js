import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submittedData: null,
  isSubmitting: false,
  error: null,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitFormStart: (state) => {
      state.isSubmitting = true;
      state.error = null;
    },
    submitFormSuccess: (state, action) => {
      state.submittedData = action.payload;
      state.isSubmitting = false;
    },
    submitFormFailure: (state, action) => {
      state.error = action.payload;
      state.isSubmitting = false;
    },
    resetForm: (state) => {
      state.submittedData = null;
      state.error = null;
    },
  },
});

export const { submitFormStart, submitFormSuccess, submitFormFailure, resetForm } = formSlice.actions;

export default formSlice.reducer;