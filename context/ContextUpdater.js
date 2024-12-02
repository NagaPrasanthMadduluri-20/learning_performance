'use client';

import { useEffect } from 'react';
import { useGlobalContext } from './GlobalContext';

export default function ContextUpdater({ pageType, pageName, country }) {
  const { setPageType, setPageName, setCountry } = useGlobalContext();

  useEffect(() => {
    setPageType(pageType);
    setPageName(pageName);
    setCountry(country);
  }, [pageType, pageName, setPageType, setPageName, country, setCountry]);

  return null;
}