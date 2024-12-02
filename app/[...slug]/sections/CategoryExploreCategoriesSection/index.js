import Container from "@/components/Container";
import Text from "@/components/Text";
import Link from "next/link";

import React from "react";

const ExploreOtherCategories = ({ exploreData, additionalData }) => {
  const data = additionalData.ExploreOtherCategories;
  return (
    //dark:bg-lowcontrastbackground
    <div
      className="bg-gradient-to-r from-[#121F66] dark:from-gray-900 to-[#121F66] dark:to-black"
      id= 'explore-categories'
    >
      <Container className="text-primary-foreground">
        <Text variant="h2" className="text-center mb-11 dark:text-darkheadings">
          {" "}
          Explore Our Other Course Categories{" "}
        </Text>
        <div className="grid grid-flow-row gap-8 sm:flex sm:flex-wrap sm:justify-evenly">
          {data.map((category, index) => (
            <div key={index} className="sm:w-[40%] md:w-[30%]">
              <Link href="" className="text-center">
                <Text className="border border-slate-400 p-4 rounded-md h-20 bg-background dark:bg-detailcontrast hover:dark:bg-transparent text-foreground hover:text-primary-foreground hover:transition-opacity duration-500 hover:bg-transparent flex place-items-center justify-center">
                  {category.short_name}
                </Text>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ExploreOtherCategories;
