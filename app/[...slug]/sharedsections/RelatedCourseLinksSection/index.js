import Container from "@/components/Container";
import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Text from "@/components/Text";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const RelatedCourseLinks = ({ RelatedCourseLinksData, additionalData }) => {
  const { related_course_internal_links } = additionalData;
  return (
    <Container className="">
      <Text variant="h2" className="mb-6 text-center"> Related Courses</Text>
      <div className="grid lg:grid-cols-3 gap-6 xs:grid-cols-1 sm:grid-cols-2">
        {related_course_internal_links.map((item, index) => (
          <Link href={item.url} key={index}>
          <Card
            key={index}
            className={`border-r-8 hover:shadow-2xl ${
              item.level === "Advanced" ? "border-green-500 dark:border-green-300 dark:hover:shadow-green-300/30 dark:shadow-lg" :
              item.level === "Foundation" ? "border-blue-500 dark:border-blue-300 dark:hover:shadow-blue-300/30 dark:shadow-lg":
              item.level === "Intermediate" && "border-yellow-500 dark:border-yellow-200 dark:hover:shadow-yellow-300/30 dark:shadow-lg"
            }`}
          >
            <CardHeader className="p-3 min-h-20">
              <Text variant="b" className="text-[14px] font-semibold">
                {item.heading}
              </Text>
            </CardHeader>

            <CardFooter className="flex gap-x-2 p-3">
              <Text
                className={`text-[12px] font-semibold ${
                  item.level === "Advanced" ? "text-green-500 ":
                  item.level === "Foundation" ? "text-blue-500":
                  item.level === "Intermediate" && "text-yellow-500 "
                }`}
              >
                {" "}
                {item.level}{" "}
              </Text>
              <Separator orientation="horizantal" />
              <Text className="text-[12px] font-semibold">
                Live Virtual Instructor-Led Training
              </Text>
            </CardFooter>
          </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default RelatedCourseLinks;
