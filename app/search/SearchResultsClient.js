// // "use client";

// // import { useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import data from "../../data/search.json"; // Adjust the path as needed

// // export default function SearchResultsClient() {
// //   const searchParams = useSearchParams();
// //   const query = searchParams.get("query");
// //   const [results, setResults] = useState([]);

// //   useEffect(() => {
// //     if (query) {
// //       const filteredResults = data.menu.filter((item) => {
// //         return (
// //           item.title.toLowerCase().includes(query.toLowerCase()) ||
// //           item.category.toLowerCase().includes(query.toLowerCase()) ||
// //           (item.description &&
// //             item.description.toLowerCase().includes(query.toLowerCase()))
// //         );
// //       });
// //       setResults(filteredResults);
// //     }
// //   }, [query]);
  

// //   return (
// //     <div>
// //       <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
// //       {results.length > 0 ? (
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //           {results.map((item, index) => (
// //             <div key={index} className="border p-4 rounded-md shadow">
// //               <h2 className="text-lg font-semibold">{item.title}</h2>
// //               <p className="text-gray-600">{item.category}</p>
// //               <p className="mt-2">{item.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <p>No results found.</p>
// //       )}
// //     </div>
// //   );
// // }
// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import menuData from "../../data/menu.json"; // Adjust the path as needed

// export default function SearchResultsClient() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query");
//   const [results, setResults] = useState([]);
//   const [filters, setFilters] = useState({
//     certifications: false,
//     careerAligned: false,
//   });
//   const [duration, setDuration] = useState("");

//   useEffect(() => {
//     if (query) {
//       const filteredResults = menuData.generic_menu.flatMap((category) =>
//         category.courses.filter((course) =>
//           course.name.toLowerCase().includes(query.toLowerCase())
//         )
//       );
//       setResults(filteredResults);
//     }
//   }, [query]);

//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.checked });
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const filteredResults = results.filter((course) => {
//     if (filters.certifications && !course.Acc) return false;
//     if (filters.careerAligned && course.category !== "Career Aligned Learning Path") return false;
//     if (duration) {
//       const courseDuration = parseInt(course.d);
//       if (duration === "less1" && courseDuration >= 4) return false;
//       if (duration === "1to3" && (courseDuration < 4 || courseDuration > 12)) return false;
//       if (duration === "6to9" && (courseDuration < 24 || courseDuration > 36)) return false;
//     }
//     return true;
//   });

//   return (
//     <div className="flex">
//          <div className="w-1/4 pl-4">
//         <h2 className="text-xl font-bold mb-4">Filters</h2>
//         <div className="mb-4">
//           <h3 className="font-semibold mb-2">Objective</h3>
//           <label className="block">
//             <input
//               type="checkbox"
//               name="certifications"
//               checked={filters.certifications}
//               onChange={handleFilterChange}
//             /> Certifications
//           </label>
//           <label className="block">
//             <input
//               type="checkbox"
//               name="careerAligned"
//               checked={filters.careerAligned}
//               onChange={handleFilterChange}
//             /> Career Aligned Learning Paths
//           </label>
//         </div>
//         <div className="mb-4">
//           <h3 className="font-semibold mb-2">Duration</h3>
//           <label className="block">
//             <input
//               type="radio"
//               name="duration"
//               value="less1"
//               checked={duration === "less1"}
//               onChange={handleDurationChange}
//             /> Less than 1 month
//           </label>
//           <label className="block">
//             <input
//               type="radio"
//               name="duration"
//               value="1to3"
//               checked={duration === "1to3"}
//               onChange={handleDurationChange}
//             /> 1 to 3 months
//           </label>
//           <label className="block">
//             <input
//               type="radio"
//               name="duration"
//               value="6to9"
//               checked={duration === "6to9"}
//               onChange={handleDurationChange}
//             /> 6 to 9 months
//           </label>
//         </div>
//       </div>
//       <div className="w-3/4 pr-4">
//         <h1 className="text-2xl font-bold mb-4">{filteredResults.length} Programs found for "{query}"</h1>
//         {filteredResults.length > 0 ? (
//           <div className="space-y-4">
//             {filteredResults.map((course, index) => (
//               <div key={index} className="border p-4 rounded-md shadow">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-lg font-semibold">{course.name}</h2>
//                     <p className="text-gray-600">{course.category}</p>
//                     {course.label && <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">{course.label}</span>}
//                   </div>
//                   {course.Acc && <img src={`/images/${course.Acc}.svg`} alt={course.Acc} className="w-12 h-12" />}
//                 </div>
//                 <div className="mt-2 flex items-center space-x-2">
//                   <span className="text-yellow-500">★ {(Math.random() * (5 - 4) + 4).toFixed(1)}</span>
//                   <span className="text-gray-500">({Math.floor(Math.random() * 10000)})</span>
//                   <span className="text-gray-500">Duration: {course.d || "N/A"} {course.d === 1 ? "day" : "days"}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
     
//     </div>
//   );
// }

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import menuData from "../../data/menu.json"; // Adjust the path as needed

// export default function SearchResultsClient() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query");
//   const [results, setResults] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const categories = ["All", ...menuData.generic_menu.map(item => item.name)];

//   useEffect(() => {
//     if (query) {
//       const filteredResults = menuData.generic_menu.flatMap((category) =>
//         category.courses.filter((course) =>
//           course.name.toLowerCase().includes(query.toLowerCase())
//         )
//       );
//       setResults(filteredResults);
//     } else {
//       // If no query, show all courses
//       const allCourses = menuData.generic_menu.flatMap(category => category.courses);
//       setResults(allCourses);
//     }
//   }, [query]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredResults = selectedCategory === "All" 
//     ? results 
//     : results.filter(course => {
//         const categoryObj = menuData.generic_menu.find(cat => cat.name === selectedCategory);
//         return categoryObj && categoryObj.courses.some(c => c.name === course.name);
//       });

//   return (
//     <div className="flex">
//       <div className="w-3/4 pr-4">
//         <h1 className="text-2xl font-bold mb-4">
//           {filteredResults.length} Programs found {query ? `for "${query}"` : ""}
//         </h1>
//         {filteredResults.length > 0 ? (
//           <div className="space-y-4">
//             {filteredResults.map((course, index) => (
//               <div key={index} className="border p-4 rounded-md shadow">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-lg font-semibold">{course.name}</h2>
//                     <p className="text-gray-600">{course.category}</p>
//                     {course.label && <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">{course.label}</span>}
//                   </div>
//                   {course.Acc && <img src={`/images/${course.Acc}.svg`} alt={course.Acc} className="w-12 h-12" />}
//                 </div>
//                 <div className="mt-2 flex items-center space-x-2">
//                   <span className="text-yellow-500">★ {(Math.random() * (5 - 4) + 4).toFixed(1)}</span>
//                   <span className="text-gray-500">({Math.floor(Math.random() * 10000)})</span>
//                   <span className="text-gray-500">Duration: {course.d || "N/A"} {course.d === 1 ? "day" : "days"}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
//       <div className="w-1/4 pl-4">
//         <h2 className="text-xl font-bold mb-4">Categories</h2>
//         <div className="space-y-2">
//           {categories.map((category, index) => (
//             <label key={index} className="block">
//               <input
//                 type="radio"
//                 name="category"
//                 value={category}
//                 checked={selectedCategory === category}
//                 onChange={() => handleCategoryChange(category)}
//                 className="mr-2"
//               />
//               {category}
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// option 4

// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import menuData from "../../data/menu.json"; // Adjust the path as needed
// import SearchBar from "@/lib/SearchBox";

// export default function SearchResultsClient() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const query = searchParams.get("query");
//   const [results, setResults] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [visibleResults, setVisibleResults] = useState(6);
//   const categories = ["All", ...menuData.generic_menu.map(item => item.name)];

//   useEffect(() => {
//     let filteredResults;
//     if (query) {
//       filteredResults = menuData.generic_menu.flatMap((category) =>
//         category.courses.filter((course) =>
//           course.name.toLowerCase().includes(query.toLowerCase())
//         )
//       );
//     } else {
//       filteredResults = menuData.generic_menu.flatMap(category => category.courses);
//     }
//     setResults(filteredResults);
//     setSelectedCategory("All");
//     setVisibleResults(6);
//   }, [query]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setVisibleResults(6);
//     if (category === "All") {
//       setResults(menuData.generic_menu.flatMap(cat => cat.courses));
//     } else {
//       const categoryObj = menuData.generic_menu.find(cat => cat.name === category);
//       setResults(categoryObj ? categoryObj.courses : []);
//     }
//     // Update URL without query parameter
//     router.push('/search', undefined, { shallow: true });
//   };

//   const loadMore = () => {
//     setVisibleResults(prev => prev + 6);
//   };

//   const filteredResults = results.slice(0, visibleResults);

//   return (
//     <div className="flex">
      
//       <div className="w-1/4 pl-4">
//       <h2 className="text-xl font-bold mb-4">Search</h2>
//         <SearchBar />
//         <h2 className="text-xl font-bold mb-4">Categories</h2>
//         <div className="space-y-2">
//           {categories.map((category, index) => (
//             <label key={index} className="block">
//               <input
//                 type="radio"
//                 name="category"
//                 value={category}
//                 checked={selectedCategory === category}
//                 onChange={() => handleCategoryChange(category)}
//                 className="mr-2"
//               />
//               {category}
//             </label>
//           ))}
//         </div>
//       </div>
//       <div className="w-3/4 pr-4">
//         <h1 className="text-2xl font-bold mb-4">
//           {results.length} Programs found {query ? `for "${query}"` : ""}
//         </h1>
//         {filteredResults.length > 0 ? (
//           <>
//             <div className="space-y-4">
//               {filteredResults.map((course, index) => (
//                 <div key={index} className="border p-4 rounded-md shadow">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h2 className="text-lg font-semibold">{course.name}</h2>
//                       <p className="text-gray-600">{course.category}</p>
//                       {course.label && <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">{course.label}</span>}
//                     </div>
//                     {course.Acc && <img src={`/images/${course.Acc}.svg`} alt={course.Acc} className="w-12 h-12" />}
//                   </div>
//                   <div className="mt-2 flex items-center space-x-2">
//                     <span className="text-yellow-500">★ {course.rating || (Math.random() * (5 - 4) + 4).toFixed(1)}</span>
//                     <span className="text-gray-500">({course.reviewCount || Math.floor(Math.random() * 10000)})</span>
//                     <span className="text-gray-500">Duration: {course.d || "N/A"} {course.d === 1 ? "day" : "days"}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {visibleResults < results.length && (
//               <button onClick={loadMore} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
//                 Load More
//               </button>
//             )}
//           </>
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "../../data/menu.json";
import SearchInput from "../../lib/SearchBox";

export default function SearchResultsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleResults, setVisibleResults] = useState(6);
  const categories = ["All", ...menuData.generic_menu.map(item => item.name)];

  useEffect(() => {
    let filteredResults;
    if (query) {
      filteredResults = menuData.generic_menu.flatMap((category) =>
        category.courses.filter((course) =>
          course.name.toLowerCase().includes(query.toLowerCase())
        )
      );
      setSelectedCategory("All");
    } else {
      filteredResults = menuData.generic_menu.flatMap(category => category.courses);
    }
    setResults(filteredResults);
    setVisibleResults(6);
  }, [query]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleResults(6);
    if (category === "All") {
      setResults(menuData.generic_menu.flatMap(cat => cat.courses));
    } else {
      const categoryObj = menuData.generic_menu.find(cat => cat.name === category);
      setResults(categoryObj ? categoryObj.courses : []);
    }
    // Maintain query parameter if it exists
    const currentQuery = searchParams.get("query");
    if (currentQuery) {
      router.push(`/search?query=${currentQuery}`, undefined, { shallow: true });
    } else {
      router.push('/search', undefined, { shallow: true });
    }
  };

  const loadMore = () => {
    setVisibleResults(prev => prev + 6);
  };

  const filteredResults = results.slice(0, visibleResults);

  return (
    <div>
     
      <div className="flex gap-x-4 mt-4">
      <div className="w-1/4 pr-4">
      <h2 className="text-xl font-bold mb-4">Search</h2>
         <SearchInput initialQuery={query} />
          <h2 className="text-xl font-bold mb-4 mt-4">Categories</h2>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <label key={index} className="block">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        <div className="w-3/4">
          <h1 className="text-2xl font-bold mb-4">
            {results.length} Courses found {query ? `for "${query}"` : ""}
          </h1>
          {filteredResults.length > 0 ? (
            <>
              <div className="space-y-4">
                {filteredResults.map((course, index) => (
                  <div key={index} className="border p-4 rounded-md shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-lg font-semibold">{course.name}</h2>
                        <p className="text-gray-600">{course.category}</p>
                        {course.label && <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">{course.label}</span>}
                      </div>
                      {/* {course.Acc && <img src={`/images/${course.Acc}.svg`} alt={course.Acc} className="w-12 h-12" />} */}
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="text-yellow-500">★ {course.rating || (Math.random() * (5 - 4) + 4).toFixed(1)}</span>
                      <span className="text-gray-500">({course.reviewCount || Math.floor(Math.random() * 10000)})</span>
                      <span className="text-gray-500">Duration: {course.d || "N/A"} {course.d === 1 ? "day" : "days"}</span>
                    </div>
                  </div>
                ))}
              </div>
              {visibleResults < results.length && (
                <button onClick={loadMore} className="mt-4 bg-primary text-white px-4 py-2 rounded">
                  Load More
                </button>
              )}
            </>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      
      </div>
    </div>
  );
}