import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice';
import formReducer from './features/form/formSlice';
import dataReducer from './features/data/dataSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        cart: cartReducer,
        userdata: formReducer,
        data: dataReducer,
    },
  })
}