'use client';

import { makeStore } from '@/lib/store'
import { addToCart } from '@/lib/store/features/cart/cartSlice'
import { useRef } from 'react'
import { Provider } from 'react-redux'



export default function StoreProvider({ children }) {

  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(addToCart({ serviceId: "serviceId" }))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}