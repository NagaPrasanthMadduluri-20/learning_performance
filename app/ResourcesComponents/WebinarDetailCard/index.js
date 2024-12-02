import Text from "@/components/Text";
import { Check } from "lucide-react";
import React from "react";

const WebinarDetailCard = ({ cardDetailData }) => {
  return (
    <>
      {" "}
      <Text className="w-full">{cardDetailData.webinar_introduction2}</Text>
      <Text variant="h2" className="text-primary dark:text-primary-foreground mt-5 mb-4">
        {cardDetailData.why_should_heading}
      </Text>
      <Text>{cardDetailData.why_should_description}</Text>
      <Text variant="h2" className="text-primary dark:text-primary-foreground mt-5 mb-4">
        {cardDetailData.why_should_heading}
      </Text>
      <Text>{cardDetailData.why_should_description}</Text>
      <Text variant="h2" className="text-primary dark:text-primary-foreground mt-5 mb-4">
        {cardDetailData.areas_cover_heading}
      </Text>
      {cardDetailData.webinardetails.map((list, index) => (
        <div key={index} className="flex gap-x-3 items-baseline">
          {list.area_cover_list_title && (
            <>
              <Check size={15} stroke="#ffad00" />
              <Text className="mb-3">{list.area_cover_list_title}</Text>
            </>
          )}
        </div>
      ))}
      <Text variant="h2" className="text-primary dark:text-primary-foreground mt-3">
        {cardDetailData.benefits_heading}
      </Text>
      <Text className="mb-4">{cardDetailData.benefits_description}</Text>
      {cardDetailData.webinardetails?.map((list, index) => (
        <div key={index} className="flex gap-x-3 items-baseline">
          {list?.benefits_list_title && (
            <>
              <Check size={15} stroke="#ffad00" />
              <Text className="mb-3">{list?.benefits_list_title}</Text>
            </>
          )}
        </div>
      ))}
      <Text variant="h2" className="text-primary dark:text-primary-foreground mt-3 mb-4">
        {cardDetailData.about_speaker_title}
      </Text>
      <Text>{cardDetailData.about_speaker_description}</Text>
    </>
  );
};

export default WebinarDetailCard;
