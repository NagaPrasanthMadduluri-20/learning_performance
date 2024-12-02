import ScrollButton from "@/app/components/ScrollButton";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { MoveRight } from "lucide-react";
import React from "react";

const CourseEligible = ({ CourseEligibleData }) => {
  const { contents } = CourseEligibleData;

  const renderListItem = (item) => {
    if (item.lists_text?.includes("|")) {
      const listItems = item.lists_text.split("|").map((text) => text.trim());
      return (
        <ul className="list-disc pl-5 mt-5">
          {listItems.map((listItem, idx) => (
            <li key={idx} className="mt-5">
              {listItem}
            </li>
          ))}
        </ul>
      );
    }
    return <Text className="mt-1">{item.lists_text}</Text>;
  };

  return (
    <div>
      <Container id="pre-requisites" className="py-5">
        <Text variant="h2"> {contents?.heading}</Text>
        <Text className="mt-3">{contents?.description}</Text>
     
          <div
            className={
              contents.long_list === "yes" ? "" : "grid grid-cols-2 gap-8"
            }
          >
            {contents.courseeligibles?.map((item, index) => (
              <div key={index}>
                   {item.list_heading !== null ? (
                <Text className="bg-gray-500 dark:bg-gray-800 py-1 text-secondary-foreground mt-5 pl-2">
                  {item.list_heading}
                </Text>
                   ) : null}
                {renderListItem(item)}
              </div>
            ))}
          </div>
     
        <ScrollButton
          variant="secondary"
          className="rounded-none font-semibold mt-4"
          targetId="schedules"
        >
          Enroll for this Training
          <MoveRight className="ml-3" />
        </ScrollButton>
      </Container>
    </div>
  );
};

export default CourseEligible;
