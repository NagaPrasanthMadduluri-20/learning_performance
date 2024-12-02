  // Helper function to determine if we should show NotFound
  export const shouldShowNotFound = (slug, lang, isValidSlug, isValidLang) => {
    // Case 1: If lang is not provided (null/undefined), only check slug
    if (!lang) {
      return !isValidSlug; // Show NotFound if slug is invalid
    }

    // Case 2: If lang is provided but slug is not
    if (lang && !slug) {
      return !isValidLang; // Show NotFound if lang is invalid
    }

    // Case 3: If both are provided, both must be valid
    if (lang && slug) {
      return !(isValidSlug && isValidLang); // Show NotFound if either is invalid
    }

    // Default case: show NotFound
    return true;
  };



  