// NavigationContext.js
'use client'
import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [isNavSticky, setIsNavSticky] = useState(false);

  return (
    <NavigationContext.Provider value={{ isNavSticky, setIsNavSticky }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);