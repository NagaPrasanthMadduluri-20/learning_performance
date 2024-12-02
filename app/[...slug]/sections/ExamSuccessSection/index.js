import ExpandableContent from "@/app/components/ExpandableComponent";
import ScrollButton from "@/app/components/ScrollButton";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";


const Examsuccess = ({ ExamsuccessData }) => {
  const { contents } = ExamsuccessData;
  const initialHeight = { mobile: "700px", desktop: "280px" };
  const renderExamSuccesses = () => {
    return contents?.examsuccesses?.map((item, index) => (
      <div key={index} className="mt-5">
        <Text>
          <span className="font-bold mr-3 leading-6">
            {item.list_heading}
          </span>
          {item.list_description}
        </Text>
      </div>
    ));
  };

  return (
    <Container>
      <Text variant="h2">{contents?.heading}</Text>
      <Text className="my-5">{contents?.description}</Text>
      <Text className="font-bold">{contents?.sub_heading}</Text>

      {contents?.examsuccesses && contents?.examsuccesses.length > 0 && (
         <ExpandableContent
         initialHeight={initialHeight}
         buttonClassName="rounded-full border border-gray-500 relative z-10 h-8 items-center hover:bg-primary hover:text-primary-foreground"
         contentClassName="mb-4"
       >
          {renderExamSuccesses()}
        </ExpandableContent>
      )}

      {contents.image_path && (
        <Image src={contents.image_path} alt="ExamSuccess Image" width={700} height={400}  className="mt-8"/>
      )}
      {contents.image_path2 && (
        <Image src={contents.image_path2} alt="ExamSuccess Congratulations Image" width={750} height={200} className="mt-5" />
      )}
       <Text variant="div" className="font-semibold mt-5 bg-primary p-2 rounded-md text-primary-foreground mr-5">
        <b> Not sure how to get started? </b> Let our Learning Advisor help you.
        {" "}
    <ScrollButton variant="secondary" className="ml-3 rounded-none font-semibold" targetId="inquireform">
      Contact Our Learning Advisor
      <MoveRight className="ml-3" />
    </ScrollButton>
  </Text>
    </Container>
  );
};

export default Examsuccess;