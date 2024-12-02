"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Image from "next/image";
import { CalendarDays, Clock4Icon, Star } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Badge } from "@/components/ui/badge";

const CourseCard = ({ course, index, animationKey }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset visibility when animationKey changes
    setIsVisible(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index, animationKey]);

  return (
    <div
      className={`transition-all duration-500 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Card className="flex flex-col relative rounded-t-[23px] h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {course.course_label && (
          <Badge
            className={`absolute top-0 right-0 rounded-ss-none rounded-ee-none ${
              course.course_label === "Best Seller"
                ? "bg-green-500 hover:bg-green-500"
                : course.course_label === "Trending"
                ? "bg-orange-500 hover:bg-orange-500"
                : "hover:bg-primary"
            }`}
          >
            {course.course_label}
          </Badge>
        )}
        <Image
          src={course?.course_banner ? course.course_banner : "/prinzimage.png"}
          alt="Course thumbnail"
          width={300}
          height={300}
          className="w-full object-contain rounded-t-[23px]"
        />
        <CardHeader className="pt-2 pb-2 min-h-14 p-3">
          <CardTitle className="font-semibold tracking-tight text-[16px]">
            {course.course_name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 grid grid-flow-row text-[13px] pb-2 p-3">
          <div className="flex gap-x-3 items-center flex-wrap">
            <div className="flex gap-x-2 items-center">
              <Star size={20} fill="#facc15" stroke="0" />{" "}
              {course.course_rating}
            </div>
            <Separator orientation="vertical" />
            {course?.course_learner && (
              <div> {course.course_learner} Learners</div>
            )}
          </div>
          {course?.course_info?.event_date && (
            <>
              <div className="flex gap-x-3">
                <CalendarDays stroke="#3f51b5" size={20} />{" "}
                {course?.course_info?.event_date}
              </div>
              {course?.course_days && (
                <div className="flex gap-x-3">
                  <Clock4Icon stroke="#3f51b5" size={20} />{" "}
                  {course.course_days + " days"}
                </div>
              )}
            </>
          )}
          {!course?.course_info && (
            <div>
              <ul className="list-disc mt-3 pl-4">
                <li>Instructor-led (On-site/Virtual)</li>
                <li>Flexible Scheduling Options</li>
                <li>Tailored Corporate Group Training</li>
              </ul>
            </div>
          )}
          {course.accrediation && (
            <div className="pt-5 pb-0">
              <Image
                src={course.accrediation}
                alt="accredattation"
                width={80}
                height={30}
                className="object-contain"
              />
            </div>
          )}
        </CardContent>
        <Separator />
        <CardFooter className="rounded-sm px-2 py-1 flex flex-col items-start">
          <div className="flex flex-col mb-2 pl-2">
            {course?.course_info &&
              course.course_info?.cost &&
              course.course_info?.discount_amount > 0 && (
                <div className="text-[12px] font-normal line-through">
                  {" "}
                  {course.course_info.currency + " " + course.course_info.cost}
                </div>
              )}
            {course.course_info?.amount && (
              <div className="text-[13px] font-semibold">
                {" "}
                {course.course_info.currency + " " + course.course_info.amount}
              </div>
            )}
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-2 text-center border-[#Ec7601] hover:bg-[#Ec7601] hover:text-secondary-foreground w-full"
          >
            View Course
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const CourseLevelCardSection = ({ CardData }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [animationKey, setAnimationKey] = useState(0);

  const filterCourses = () => {
    if (activeTab === "Foundation") {
      return CardData.foundation;
    } else if (activeTab === "Intermediate") {
      return CardData.intermediate;
    } else if (activeTab === "Advanced") {
      return CardData.advanced;
    }
    // Return all courses if "All" is active
    return [
      ...CardData.foundation,
      ...CardData.intermediate,
      ...CardData.advanced,
    ];
  };

  const coursesToDisplay = filterCourses().sort(
    (a, b) => a.course_order - b.course_order
  );
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Increment animationKey to trigger re-render and reset animation
    setAnimationKey((prev) => prev + 1);
  };
  return (
    <Container>
      <div className="mb-4">
        <div className="flex gap-3 md:gap-5 flex-wrap">
          {["All", "Foundation", "Intermediate", "Advanced"].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 md:px-6 md:py-2 rounded-md border-2 font-semibold ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {coursesToDisplay.map((course, index) => (
          <CourseCard
            key={`${animationKey}-${index}`}
            course={course}
            index={index}
            animationKey={animationKey}
          />
        ))}
      </div>
    </Container>
  );
};
export default CourseLevelCardSection;
