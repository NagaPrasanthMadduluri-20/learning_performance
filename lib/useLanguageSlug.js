import { useMemo } from "react";

// Custom hook to extract lang and validate it
const useLanguageSlug = (pathName, appData) => {
  const lang = useMemo(() => pathName.split("/")[1], [pathName]);

  // Check if the lang is valid by comparing with available countries
  const isValidSlug = useMemo(() => 
    appData?.countries?.some((country) => country.code === lang),
    [appData, lang]
  );

  return { lang, isValidSlug };
};

export default useLanguageSlug;
