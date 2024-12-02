"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Link from "next/link";
import React, { useState } from "react";

const CourseOverview = ({ courseOverviewData }) => {
  const { contents } = courseOverviewData;
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = (e) => {
    e.preventDefault();
    setIsShowMore(!isShowMore);
  };

  const maxCharsToShow = 180; // Define the maximum number of characters to show initially
  const truncatedText = contents.loadmore_para
    ? contents.loadmore_para.slice(0, maxCharsToShow)
    : "";

  return (
    <div id="course-overview">
    <Container>
    <div>
      <Text variant="h2">{contents.new_heading}</Text>
      {contents.first_para && <Text> {contents.first_para} </Text>}
      {contents.loadmore_para && (
        <Text
          variant="body1"
          className={`${
            isShowMore ? "max-h-dvh" : "max-h-16 overflow-hidden"
          } transition-max-height duration-500 ease-in-out`}
        >
          {isShowMore ? contents.loadmore_para : truncatedText}
          {contents.loadmore_para.length > maxCharsToShow && (
            <Link
            href=""
              className="font-semibold cursor-pointer text-blue-600 underline"
              onClick={toggleReadMoreLess}
            >
              {isShowMore ? "...read less" : "....read more"}
            </Link>
          )}
        </Text>
      )}
    </div>
    </Container>
    </div>
  );
};

export default CourseOverview;
