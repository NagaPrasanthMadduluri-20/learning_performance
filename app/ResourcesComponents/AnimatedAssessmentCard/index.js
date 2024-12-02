"use client";
import React, { useState } from "react";
import { Clock, Book, Globe, MoveDown } from "lucide-react";
import Link from "next/link";
import Text from "@/components/Text";
import Container from "@/components/Container";

const AssessmentCard = ({ assessment, isFlipped, onClick }) => {
  const content = assessment.contents[0];
  return (
      <div
        className="w-[350px] h-[450px] perspective-1000 cursor-pointer"
        onClick={onClick}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md bg-gradient-to-br from-[rgb(63,81,181)] dark:from-gray-600 to-[#12133D] dark:to-black text-white p-5 flex flex-col justify-evenly">
            <Text className="text-2xl font-bold ">{assessment.link_title}</Text>

            <div className="mt-10">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {content.assessment_code}
              </span>
              <div className="space-y-3 mt-10">
                <div className="flex items-center">
                  <Book className="mr-2" size={18} />
                  <span>{content.question_number} Questions</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2" size={18} />
                  <span>{content.duration}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-2" size={18} />
                  <span>{content.language}</span>
                </div>
              </div>
            </div>
            <button className="bg-white text-indigo-700 border-none py-2 px-4 rounded font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg mt-auto">
              View Assessment Details
            </button>
          </div>
          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md bg-gradient-to-br from-[rgb(63,81,181)] dark:from-black to-[#ffffff] dark:to-gray-600 text-primary-foreground p-5 flex flex-col justify-between rotate-y-180">
            <div>
              <h3 className="text-2xl font-bold mb-4">Assessment Details</h3>
              <p className="text-center mb-4">
                This assessment will test your knowledge and skills in project
                coordination and management.
              </p>
              <p className="font-semibold text-center">
                Click on Start Button to start the assessment
              </p>
              <div className="flex justify-center items-center mt-16 animate-bounce">
                <MoveDown strokeWidth={3} size={25} />
              </div>
            </div>
            <Link
              href={`/assesments/${assessment.page_slug}`}
              className="block"
            >
              <button
                className="w-full bg-indigo-700 dark:bg-background text-white border-none py-2 px-4 rounded font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

const AnimatedAssessmentCard = ({ additionalData, dataType }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  let assessments = [];
  if (dataType === "AllAssessment") {
    assessments = additionalData?.AllAssessment?.all_assessment || [];
  } else if (dataType === "RelatedAssessments") {
    assessments = additionalData?.RelatedAssessments || [];
  }

  return (
    <div className="">
    <Container>
      {!additionalData?.RelatedAssessments.length > 0 ? (
        <Text variant="h2" className="text-primary dark:text-primary-foreground mb-10">
          {" "}
          All {additionalData?.link_title} Assessments{" "}
        </Text>
      ) : ""}
      {additionalData?.RelatedAssessments.length > 0 ? (
        <Text variant="h2" className="text-primary dark:text-primary-foreground mb-10">
          {" "}
          Related Assessments{" "}
        </Text>
      ) : ""}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assessments.map((assessment, index) => (
            <AssessmentCard
              key={index}
              assessment={assessment}
              isFlipped={flippedIndex === index}
              onClick={() => handleCardClick(index)}
            />
        ))}
      </div>
    </Container>
    </div>
  );
};

export default AnimatedAssessmentCard;
