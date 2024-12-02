import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const ApplyForExam = ({ ApplyForExamData, HowCanYouEngageData, TrainingLocationsData }) => {
  const { contents: ApplyForExamContents } = ApplyForExamData || {};
  const { contents: HowCanYouEngageContents } = HowCanYouEngageData || {};
  const { contents: TrainingLocationsContents } = TrainingLocationsData || {};

  const renderCards = (content) => {
    return content?.map((item, index) => (
      <Card
        key={index}
        className="shadow-xl border-b-4 border-b-blue-700 p-2 rounded-none"
      >
        <CardHeader className="p-2 text-blue-900">
          {item?.cardHeading || item?.location_heading}
        </CardHeader>
        <CardContent className="p-2 text-[14px]">
          {item?.cardContent || item?.sub_heading}
        </CardContent>
        <CardFooter className="p-2">
          <Text variant="b">{item?.phoneNo}</Text>
        </CardFooter>
      </Card>
    ));
  };

  return (
    <Container>
      {ApplyForExamContents && (
        <>
          <Text variant="h2">{ApplyForExamContents?.heading}</Text>
          <Text className="my-5">{ApplyForExamContents?.list}</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-3/4">
            {renderCards(ApplyForExamContents?.howtoapplyfortheexams)}
          </div>
        </>
      )}
      {HowCanYouEngageContents && (
        <>
          <Text variant="h2">{HowCanYouEngageContents?.heading}</Text>
          <Text className="my-5">{HowCanYouEngageContents?.sub_heading}</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4">
            {renderCards(HowCanYouEngageContents?.howcanyouengages)}
          </div>
        </>
      )}
      {
        TrainingLocationsContents && (
          <>
            <Text variant="h2">{TrainingLocationsContents?.heading}</Text>
            <Text className="my-5">
              {TrainingLocationsContents?.content}
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4">
              {renderCards(TrainingLocationsContents?.traininglocations)}
            </div>
          </>
        )
      }
    </Container>
  );
};

export default ApplyForExam;
