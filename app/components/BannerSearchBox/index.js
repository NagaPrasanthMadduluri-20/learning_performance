"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Search, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { appData } from "@/data/appData";
import useLanguageSlug from "@/lib/useLanguageSlug";

export function SearchBar({ searchData }) {
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const { lang, isValidSlug } = useLanguageSlug(pathName, appData);

  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchTerm: "",
    },
  });

  const searchTerm = watch("searchTerm");

  useEffect(() => {
    if (searchTerm && searchTerm.length > 1) {
      setErrorMessage("");
      // Flatten the search data to include both categories and courses
      const flattenedData = searchData.reduce((acc, category) => {
        // Add category itself
        acc.push({
          name: category.name,
          slug: category.slug,
          type: "category",
        });

        // Add courses from the category
        if (category.courses) {
          const coursesWithCategory = category.courses.map((course) => ({
            ...course,
            type: "course",
            category: category.name,
          }));
          acc.push(...coursesWithCategory);
        }

        return acc;
      }, []);

      // Search logic with multiple match conditions
      const results = flattenedData.filter((item) => {
        const searchTermLower = searchTerm.toLowerCase();

        // Prefix match on name
        const prefixMatch = item.name.toLowerCase().startsWith(searchTermLower);

        // Contains match on name
        const containsMatch = item.name.toLowerCase().includes(searchTermLower);

        // Keyword match (if keywords exist)
        const keywordMatch = item.keywords
          ? item.keywords.toLowerCase().includes(searchTermLower)
          : false;

        return prefixMatch || containsMatch || keywordMatch;
      });

      // Deduplicate and limit results
      const uniqueResults = Array.from(new Set(results));
      setSearchResults(uniqueResults.slice(0, 10)); // Limit to 10 results
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchTerm, searchData]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm || searchTerm.trim() === "") {
      setErrorMessage("Please enter the course name");
      return;
    }

    if (searchResults.length === 0) {
      setErrorMessage("Course not found, search again");
      return;
    }

    // Navigate to the first result's URL
    const firstResult = searchResults[0];
    if (firstResult) {
      setShowResults(false);
      setValue("searchTerm", "");
      router.push(!isValidSlug ? `/${firstResult.slug}` : `/${lang}/${firstResult.slug}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(e);
    }
  };

  const handleResultClick = (slug) => {
    setShowResults(false);
    setValue("searchTerm", "");
    router.push(!isValidSlug ? `/${slug}` : `/${lang}/${slug}`);
  };

  return (
    <div className="relative w-full">
      <form className="relative" onSubmit={handleSearch}>
        <Controller
          name="searchTerm"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <Input
                {...field}
                placeholder="Search Your Courses"
                className="focus-visible:ring-0 focus-visible:ring-offset-0 py-0 border-2 h-14 border-blue-400 rounded-none pr-10"
                autoComplete="off"
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  setErrorMessage("");
                  searchTerm && searchTerm.length > 1 && setShowResults(true);
                }}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {searchTerm ? (
                  <button
                    type="button"
                    onClick={() => {
                      setValue("searchTerm", "");
                      setErrorMessage("");
                      setShowResults(false);
                    }}
                    className="cursor-pointer"
                  >
                    <X className="text-gray-500" />
                  </button>
                ) : (
                  <button type="submit" className="cursor-pointer">
                    <Search className="text-gray-500" />
                  </button>
                )}
              </div>
            </div>
          )}
        />
      </form>

      {/* Error Message */}
      {errorMessage && (
        <div className="absolute mt-2 text-[13px]">{errorMessage}</div>
      )}

      {/* Search Results */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute z-50 w-full mt-1 border">
          <Command className="bg-background">
            <CommandList>
              {searchResults.map((item, index) => (
                <CommandItem
                  key={`${item.type}-${item.slug || item.name}-${index}`}
                  onSelect={() => handleResultClick(item.slug)}
                  className="cursor-pointer border border-collapse rounded-none p-2 data-[selected=true]:text-primary"
                >
                  <div>
                    <span className="font-bold">{item.name}</span>
                    {item.category && item.type === "course" && (
                      <span className="text-muted-foreground ml-2">
                        in {item.category}
                      </span>
                    )}
                    {item.type === "category" && (
                      <span className="text-muted-foreground ml-2">
                        (Category)
                      </span>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
}
