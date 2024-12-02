import Container from "@/components/Container";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import ScrollButton from "../../ScrollButton";

const DriveTheChange = ({ DriveTheData, additionalData }) => {
  const { contents } = DriveTheData;
  return (
    <Container>
      <div className="grid flex-col md:grid-cols-2 items-center">
        <div>
          <Text className="text-primary text-[25px] text-center ">
            {contents.heading}
          </Text>
          <Text className="text-center my-4">{contents.sub_title}</Text>
          <div className="bg-lightbackground px-4 py-6 text-center space-y-4 mt-12">
            <Text>{contents.bg_heading}</Text>
            <Text>{contents.bg_sub_heading}</Text>
            <ScrollButton variant="default" targetId="join-as-trainer">{contents.button_name}</ScrollButton>
          </div>
        </div>
        <div>
          <Image
            src={contents.bgImg}
            alt="why-book-with-invensis"
            width={700}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default DriveTheChange;
