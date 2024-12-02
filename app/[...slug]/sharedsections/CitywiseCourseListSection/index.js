import ExpandableContent from "@/app/components/ExpandableComponent";
import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";


function extractCourseNames(cityLinks) {
  return cityLinks.flatMap(link => 
    link.cities.map(city => 
      city.city_course_name 
        ? `${city.city_course_name} ${city.city_name}`
        : city.city_name
    )
  );
}

const MoveUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(90deg)" }}>
    <path d="M5 11V5H11"></path>
    <path d="M5 5L19 19"></path>
  </svg>
);

const CitywiseCourseList = ({ additionalData }) => {
  const { city_links } = additionalData;
  const courseNames = extractCourseNames(city_links);
  const initialHeight = { mobile: "700px", desktop: "280px" };
  return (
    <Container>
      <Text variant="h2" className="mb-6"> We also deliver{" "} <span className="text-blue-900 font-bold"> {additionalData.page_name} </span> across multiple cities in{" "} Country</Text>
      <ExpandableContent
          initialHeight={initialHeight}
          buttonClassName="rounded-full border border-gray-500 relative z-10 h-8 items-center hover:bg-primary hover:text-primary-foreground mt-1"
          contentClassName="mt-4"
          showFade = "false"
        >
      <ul className="grid grid-cols-1 sm:grid-cols-4 gap-3 list-none p-0">
        {courseNames.map((courseName, index) => (
          <li key={index} className="bg-[#f2f4f7] p-2 rounded flex items-center gap-x-1 hover:bg-primary hover:text-primary-foreground ">
              <Text> {courseName} </Text>
               <MoveUpRightIcon />
          </li>
        ))}
      </ul>
      </ExpandableContent>
    </Container>
  );
};

export default CitywiseCourseList;
