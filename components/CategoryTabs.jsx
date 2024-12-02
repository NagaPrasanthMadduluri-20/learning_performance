// components/CategoryTabs.js
"use client";

import { useEffect, useState } from "react";

const menuData = [
  { name: "Most Popular", slug: "popular" },
  { name: "Generative AI", slug: "generative-ai" },
  { name: "AI & Machine Learning", slug: "ai-ml" },
];

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("popular");

//   useEffect(() => {
//     onCategoryChange(activeCategory);
//   }, [activeCategory, onCategoryChange]);

  const handleTabClick = (slug) => {
    setActiveCategory(slug);
  };

  return (
    <div className="w-1/4 pr-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        {menuData.map((category) => (
          <li
            key={category.slug}
            className={`cursor-pointer p-2 hover:bg-gray-100 ${
              activeCategory === category.slug ? "bg-gray-200" : ""
            }`}
            onClick={() => handleTabClick(category.slug)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
