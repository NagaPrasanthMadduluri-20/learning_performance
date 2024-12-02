// "use client"; // Ensure this component is client-side

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { SearchIcon } from 'lucide-react';

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const router = useRouter();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       router.push(`/search?query=${query}`);
//     }
//   };

//     // Handle the click on the search icon
//     const handleIconClick = () => {
//         handleSearch(new Event('submit')); // Trigger the search
//       };

//   return (
//     // <form onSubmit={handleSearch} className="flex">
//     //   <input
//     //     type="text"
//     //     value={query}
//     //     onChange={(e) => setQuery(e.target.value)}
//     //     placeholder="Search..."
//     //     className="border px-2 py-1 rounded-md focus:outline-none"
//     //   />
//     //   <button
//     //     type="submit"
//     //     className="ml-2 bg-blue-500 text-white px-4 py-1 rounded-md"
//     //   >
//     //     Search
//     //   </button>
//     // </form>
//     // <form onSubmit={handleSearch} className="relative flex items-center">
//     //   <input
//     //     type="text"
//     //     value={query}
//     //     onChange={(e) => setQuery(e.target.value)}
//     //     placeholder="Search..."
//     //     className="pr-12 pl-4 py-1 rounded-md border focus:outline-none w-48" // Adjust width here
//     //   />
//     //   <div className="absolute right-0 top-0 h-full flex items-center pr-2 bg-blue-500 rounded-r-md">
//     //     <SearchIcon className="text-white ml-8" style={{ width: '20px', height: '20px' }} />
//     //   </div>
//     // </form>
//     <form onSubmit={handleSearch} className="relative flex items-center">
//     <input
//       type="text"
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       placeholder="Search..."
//       className="pr-12 pl-4 py-1 rounded-md border focus:outline-none w-48" // Adjust width here
//     />
//     <div
//       className="absolute right-0 top-0 h-full flex items-center pr-2 bg-blue-500 rounded-r-md cursor-pointer"
//       onClick={handleIconClick} // Make the icon clickable
//     >
//       <SearchIcon className="text-white ml-8" style={{ width: '20px', height: '20px' }} />
//     </div>
//   </form>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import menuData from "../data/menu.json";

export default function SearchInput({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    if (query) {
      const allCourses = menuData.generic_menu.flatMap(category => category.courses);
      const filteredSuggestions = allCourses
        .filter(course => course.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = (searchQuery) => {
    if (searchQuery) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/search');
    }
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    router.push(`/${suggestion.slug}`);
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What do you want learn today ?"
        className="w-full p-2 border rounded"
      />
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full bg-white border mt-1 rounded shadow-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
       {/* {query && (
        <div className="absolute z-10 w-full bg-white border mt-1 rounded shadow-lg">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )} */}
    </div>
  );
}