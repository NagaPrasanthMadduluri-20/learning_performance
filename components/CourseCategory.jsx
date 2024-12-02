// components/CourseCategory.js
"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menuData = [
  {
    name: "Most Popular",
    slug: "popular",
    courses: [],
  },
  {
    name: "Generative AI",
    slug: "generative-ai",
    courses: [
      { id: 1, name: "Introduction to GPT Models", label: "Best Seller" },
      { id: 2, name: "Advanced NLP Techniques" },
    ],
  },
  {
    name: "AI & Machine Learning",
    slug: "ai-ml",
    courses: [
      { id: 3, name: "Machine Learning Fundamentals", label: "Best Seller" },
      { id: 4, name: "Deep Learning with TensorFlow" },
    ],
  },
];

menuData[0].courses = menuData.slice(1).flatMap((category) =>
  category.courses.filter((course) => course.label === "Best Seller")
);

export default function CourseCategory({ activeCategorySlug }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const category = menuData.find((cat) => cat.slug === activeCategorySlug) || menuData[0];
    setCourses(category.courses);
  }, [activeCategorySlug]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {menuData.find((cat) => cat.slug === activeCategorySlug)?.name || "Most Popular"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <Card key={course.id} className="w-full mb-4">
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              {course.label && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {course.label}
                </span>
              )}
            </CardHeader>
            <CardContent>{/* Add more course details here */}</CardContent>
            <CardFooter>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
