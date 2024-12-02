import Container from "@/components/Container";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import ScrollButton from "../../ScrollButton";

const HardEarnedExpertize = ({
  HandEarnedData,
  additionalData,
  TrainingPossibleData,
  CommitmentData,
}) => {
  const { contents: HandEarnedContent } = HandEarnedData || {};
  const { contents: CommitmentContent } = CommitmentData || {};
  const { contents: TrainingPossibleContent } = TrainingPossibleData || {};
  const Headings =
    HandEarnedContent?.heading || TrainingPossibleContent?.heading || CommitmentContent?.heading || "";
  const SubHeadings =
    HandEarnedContent?.sub_heading || TrainingPossibleContent?.subHeading || "";
  const supplies =
    HandEarnedContent?.hardearnedexpertises ||
    TrainingPossibleContent?.trainingpossibilities ||
    CommitmentContent?.ourcommitments ||
    [];

  return (
    <div className={`${CommitmentData ? "bg-lightbackground" : "bg-background"} `}>
    <Container>
      <div>
        <Text
          className={`${
            HandEarnedContent
              ? "text-center text-primary dark:text-primary-foreground text-[28px]"
              : "text-[28px] text-center text-primary mb--5 dark:text-primary-foreground"
          }`}
        >
          {Headings || ""}
        </Text>
        <Text
          className={`${
            HandEarnedContent
              ? "text-center text-primary dark:text-primary-foreground mb-10 font-bold text-[28px]"
              : " text-center mb-8 text-foreground"
          }`}
        >
          {SubHeadings || ""}
        </Text>
        <div className={`flex-col md:grid ${CommitmentContent ? "md:grid-cols-4" : "md:grid-cols-3"} md:gap-10 md:justify-center md:items-center`}>
          {supplies?.map((item, index) => (
            <div key={index} className="mb-10 md:mb-0">
              <div className={`flex ${CommitmentContent ? "justify-start" : "justify-center "}`}>
                <Image
                  src={item.icon_url || item.iconUrl || ""}
                  alt={item.imgHeading}
                  width={100}
                  height={100}
                  className={`${HandEarnedContent || CommitmentContent  ? "w-24 h-24" : "w-48 h-48"}`}
                />
              </div>
              <div className={` ${CommitmentContent ? "text-left" : "text-center"}`}>
                <Text
                  className={`font-bold mb-2 text-${item.color}-500 ${CommitmentContent ? "text-[17px]" : "text-[21px]"} whitespace-nowrap mt-2  md:mt-4`}
                >
                  {item.imgHeading || item.title || ""}
                </Text>
                <Text className={`mt-5 ${CommitmentContent ? "text-[14px]" : "text-[18px]"} `}>
                  {item.imgDescription || item.description || ""}
                </Text>
              </div>
            </div>
          ))}
        </div>
        {TrainingPossibleContent && (
          <div className="flex justify-center">
            <ScrollButton
              variant="outline"
              className="border-blue-500 text-primary mt-5 hover:bg-primary hover:text-primary-foreground"
              targetId="join-as-trainer"
            >
              {" "}
              Join us Now{" "}
            </ScrollButton>
          </div>
        )}
      </div>
    </Container>
    </div>
  );
};

export default HardEarnedExpertize;
