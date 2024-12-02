'use client';

import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children, initialPageType = '', initialPageName = '', initialcountry = ''}) => {
  const [pageType, setPageTypeState] = useState(initialPageType);
  const [pageName, setPageNameState] = useState(initialPageName);
  const [country, setCountryState] = useState(initialcountry);

  const setPageType = useCallback((newPageType) => {
    setPageTypeState(newPageType);
  }, []);

  const setPageName = useCallback((newPageName) => {
    setPageNameState(newPageName);
  }, []);

const setCountry = useCallback((newCountry) => {
    setCountryState(newCountry);
}, []);

  const value = useMemo(() => ({
    pageType,
    pageName,
    setPageType,
    setPageName,
    country,
    setCountry
  }), [pageType, pageName, setPageType, setPageName, country, setCountry]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};