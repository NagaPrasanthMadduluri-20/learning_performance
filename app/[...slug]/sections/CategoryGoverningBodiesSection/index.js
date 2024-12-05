"use client";

import Container from "@/components/Container";
import Text from "@/components/Text";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CategoryGoverningBodies = ({
  CategoryGoverningBodiesData,
  additionalData,
}) => {
  const { governingBodies } = additionalData;
  const { contents } = CategoryGoverningBodiesData;
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="bg-lightbackground">
      <Container>
        <Text variant="h2" className="py-3 text-center">
          {contents.heading}
        </Text>
        <Tabs
          defaultValue={governingBodies[0]?.name}
          className="w-full flex flex-col md:grid md:grid-cols-12 sm:gap-x-2 mt-5"
        >
          <div className="relative md:col-span-5 mb-4 md:mb-0 overflow-hidden">
            <ScrollArea
              className="w-full whitespace-nowrap md:h-auto md:whitespace-normal"
              orientation="horizontal"
            >
              <div className="flex min-w-full">
                <TabsList className="md:col-span-5 flex flex-row gap-x-2 md:flex-col h-auto bg-transparent w-fit md:w-full">
                  {governingBodies.map((item, index) => {
                   
                    <TabsTrigger
                      className="inline-flex items-center justify-between shadow-lg gap-2 bg-background data-[state=active]:bg-primary data-[state=active]:text-primary-foreground mb-0 md:mb-5 h-14 px-4 min-w-[150px] md:w-[90%]"
                      key={index}
                      value={item.name}
                      id={`tab-${item.name}`}
                      aria-controls={`content-${item.name}`}
                      aria-label={`View details for ${item.name} governing body`}
                    >
                      <Image
                        src={item.icon}
                        alt={`${item.name} icon`}
                        width={100}
                        height={100}
                        className=" w-6 h-6 sm:w-9 sm:h-9 object-contain"
                      />
                      <span className="truncate">{item.name}</span>
                      <span className="hidden md:flex">
                        <MoveRight />
                      </span>
                    </TabsTrigger>;
                  })}
                </TabsList>
              </div>
              <ScrollBar orientation="horizontal" className="md:hidden" />
            </ScrollArea>
          </div>

          {governingBodies.map((item, index) => {
            <TabsContent
              key={index}
              value={item.name}
              id={`content-${item.name}`}
              aria-labelledby={`tab-${item.name}`}
              className="md:col-span-7 bg-background shadow-lg"
              role="tabpanel"
            >
              <ScrollArea className="h-80 w-full rounded-md border p-5">
                {item.descriptions.map((descrp, descriptionIndex) => (
                  <div
                    key={descriptionIndex}
                    className={` flex flex-row items-center gap-x-3 justify-between transition-opacity duration-300 ease-in-out ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <Text
                      className="max-w-none"
                      aria-label={`Description for ${item.name}`}
                    >
                      {descrp.description}
                    </Text>
                    <div className="flex-shrink-0">
                      <Image
                        src={descrp.image}
                        alt={`${item.name} illustration`}
                        width={80}
                        height={80}
                        className=" w-16 md:w-24 h-16 md:h-24 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>;
          })}
        </Tabs>
      </Container>
    </div>
  );
};

export default CategoryGoverningBodies;
