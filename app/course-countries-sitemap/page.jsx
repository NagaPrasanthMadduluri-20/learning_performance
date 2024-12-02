import Container from "@/components/Container";
import Text from "@/components/Text";
import { appData } from "@/data/appData";
import { categoriesData } from "@/data/categories";
import Link from "next/link";
import React from "react";

const CountryCoursesSitemap = () => {
  const courses = categoriesData?.courses || [];

  return (
    <Container>
      <Text variant="h2" className="text-center mb-5">
        Country Courses SiteMap
      </Text>
      <div className="grid grid-cols-3 gap-4">
        {appData.countries.map((country) => (
          courses.map((course, courseindex) => (
            <ul
            key={courseindex}
              className="list-disc ml-5 marker:text-orange-400"
            >
              <li className="mb-4 hover:underline">
                <Link href={`/${country.code}/${course.slug}`}>{course.name}{" "} in {" "} {country.name}</Link>
              </li>
            </ul>
          ))
        ))}
      </div>
    </Container>
  );
};

export default CountryCoursesSitemap;
