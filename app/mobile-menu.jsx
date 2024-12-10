"use client";
import React, { lazy, Suspense, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
const generic_menu = require('../data/menu.json');
import { ChevronRight } from "lucide-react";
import Text from "@/components/Text";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

// Lazy load the Drawer component
const Drawer = lazy(() => import("@/app/components/drawercustom"));


const Mobilemenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isExploreCourses, setIsExploreCourses] = useState(false);
  const [isDrawerLoaded, setIsDrawerLoaded] = useState(false);

  const handleDrawerOpen = () => {
    // Load drawer on first open
    if (!isDrawerLoaded) {
      setIsDrawerLoaded(true);
    }
    setIsDrawerOpen(true);
  };

  return (
    <div>
      <div onClick={handleDrawerOpen}>
        <div className="flex flex-col gap-y-[2px]">
          <div className="w-5 h-1 bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
          <div className="w-5 h-1 bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
          <div className="w-5 h-1 bg-[#0000008a] dark:bg-slate-50 rounded-sm" />
        </div>
      </div>
      {isDrawerLoaded && 
      <Suspense fallback={<div>Loading...</div>}>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className=""
      >
        <div className="pt-3 flex flex-col">
          {/* <DrawerClose className="self-end mb-4">
              <button className="p-2">✕</button>
            </DrawerClose> */}

          <div
            onClick={() => setIsExploreCourses(!isExploreCourses)}
            className="flex items-center justify-between cursor-pointer mb-4"
          >
            <span className="font-semibold">Explore Courses</span>
            <ChevronRight
              className={`transition-transform ${
                isExploreCourses ? "rotate-90" : ""
              }`}
            />
          </div>

          {isExploreCourses && (
            <>
              <div className="overflow-y-auto custom-scrollbar">
                <Accordion type="single" collapsible>
                  {generic_menu.generic_menu.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="bg-transparent">
                        <Text>{item.name} </Text>
                      </AccordionTrigger>

                      <AccordionContent>
                        <ul className="space-y-2 leading-7 h-full overflow-y-auto text-[13px] font-semibold custom-scrollbar">
                          {item.courses.map((list, index) => (
                            <li key={index}>
                              <Link href={list.slug} onClick={() => setIsDrawerOpen(false)}>
                                <div className="flex items-center gap-x-5">
                                  <span>
                                    {" "}
                                    <Image
                                      src={`https://alpha.invensislearning.com/storage/new_menu_design/${list.image}`}
                                      alt={list.name}
                                      width="42"
                                      height="42"
                                      className="bg-white rounded-full"
                                    />
                                  </span>
                                  <span>
                                    <Text className="font-medium">
                                      {list.name}
                                      {list.label && (
                                        <sup
                                          className="text-white rounded-full p-1"
                                          style={{
                                            backgroundColor:
                                              list.label === "Best Seller"
                                                ? "#00C24E"
                                                : list.label === "Trending"
                                                ? "#FD600E"
                                                : list.label === "New"
                                                ? "#9747FF"
                                                : "#3f51b5",
                                          }}
                                        >
                                          {list.label}
                                        </sup>
                                      )}
                                    </Text>
                                    <Text className="text-[10px] text-[#858BB1] flex flex-wrap items-center space-x-2 font-semibold">
                                      {list.Acc && (
                                        <>
                                          {" "}
                                          <span> {list.Acc} </span>{" "}
                                          <Separator orientation="vertical" className="h-3 w-[2px] opacity-65 mx-3"/>
                                        </>
                                      )}
                                      {list.d ? (
                                        <span>{list.d} Days</span>
                                      ) : (
                                        <span>Flexible training options</span>
                                      )}
                                      <Separator orientation="vertical" className="h-3 w-[2px] opacity-65 mx-3"/>
                                      <span>Instructor led</span>
                                      {/* <span
                                        style={{
                                          marginRight: 8,
                                          opacity: 0.6,
                                        }}
                                      >
                                        {" "}
                                        &nbsp;|
                                      </span> */}
                                      <span>Live Training</span>
                                    </Text>
                                  </span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </>
          )}
          <Text variant="body1">
            <ul className="gap-y-3 flex flex-col ">
              <li>
                <Link href={`/corporategrouptraining`}  onClick={() => setIsDrawerOpen(false)}>
                  Corporate Group Training
                </Link>
              </li>
              <li>
                <Link href={`/testimonials`}  onClick={() => setIsDrawerOpen(false)}>Testimonials</Link>
              </li>
              <li>
                <Link href={`/join_as_a_trainer`}  onClick={() => setIsDrawerOpen(false)}>Join as a Trainer</Link>
              </li>
              <li>
                <Link href={`/resources`}  onClick={() => setIsDrawerOpen(false)}>Resources</Link>
              </li>
            </ul>
          </Text>
        </div>
      </Drawer>
      </Suspense>
      }
    </div>
  );
};

export default Mobilemenu;