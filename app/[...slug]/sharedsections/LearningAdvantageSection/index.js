
import Container from "@/components/Container";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser"
const LearningAdvantage = ({advantageData, category}) => {
  
  const data = {
    InvlAdvantages_primaridata: "Get the Invensis Learning <b>Advantage</b>",
    InvlAdvantages: [
      {
        image_url: "/LearningAdv-Highly-qualified.svg",
        title: "<b>Highly qualified</b> and Accredited Trainers",
        alt: "Highly qualified and Accredited Trainers",
      },
      {
        image_url: "/LearningAdv-Guaranteed.svg",
        title: "Training Satisfaction <b>Guaranteed</b>",
        alt: "Training Satisfaction Guaranteed",
      },
      {
        image_url: "/LearningAdv-Courseware.svg",
        title: "Accredited <b>High-Quality Courseware</b>",
        alt: "Accredited High-Quality Courseware",
      },
      {
        image_url: "/LearningAdv-Reinforce.svg",
        title: "Reinforce with <b>Retrospective Session</b>",
        alt: "Reinforce with Retrospective Session",
      },
      {
        image_url: "/LearningAdv-Choose-courses.svg",
        title: "Choose from a <b>Wide Range of Courses</b>",
        alt: "Choose from a Wide Range of Courses",
      },
      {
        image_url: "/LearningAdv-Access.svg",
        title: "Access to all our <b>Latest Resources</b>",
        alt: "Access to all our Latest Resources",
      },
    ],
  };
  
  const advantages = category
    ? advantageData?.contents?.learningadvantages
    : data.InvlAdvantages;
  return (
    <div className="bg-lightbackground">
    <Container className="pt-5">
      <Text variant="h2" className="text-[30px] text-center mb-6">
        {!category
          ? data.InvlAdvantages_primaridata
          : "Get the Invensis Learning Advantage"}
      </Text>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8">
        {advantages?.map((InvlAdvantages, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 bg-background p-10 border border-blue-300 rounded-sm "
          >
            <div className="p-5 w-24 h-24 border border-blue-500 rounded-full place-items-center flex">
              <Image
                src={InvlAdvantages.image_url}
                alt={InvlAdvantages.alt || InvlAdvantages.title}
                width="50"
                height="50"
              />
            </div>

            <Text variant="b" className="text-center">
              {parse(InvlAdvantages.title)}
            </Text>
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
};

export default LearningAdvantage;
