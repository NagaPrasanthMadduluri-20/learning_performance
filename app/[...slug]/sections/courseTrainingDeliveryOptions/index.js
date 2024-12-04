import CheckList from "@/app/components/CheckListComponent";
import ScrollButton from "@/app/components/ScrollButton";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import React from "react";

const TrainingDeliveryOptionsData = {
    lists1: [
        {
          list: "Experience immersive learning from the comfort of your own space",
        },
        {
          list: "Direct and real-time interaction with expert instructors online",
        },
        {
          list: "Access online course materials and resources conveniently",
        },
        {
          list: "Training accessible across various devices ensures seamless learning experience",
        },
      ],
      lists2: [
        {
          list: "Face to Face in-person training at your physical location",
        },
        {
          list:
            "Customized training programs tailored to meet your business objectives",
        },
        {
          list:
            "Engaging and interactive workshops that enables superior peer-to-peer learning experience",
        },
        {
          list: "Receive dedicated guidance from Subject Matter Experts",
        },
      ],
  };

  const TrainingDeliveryItems =
  TrainingDeliveryOptionsData?.lists1 ||
  TrainingDeliveryOptionsData?.lists2 ||
  [];

const CourseTrainingDeliveryOptions = () => {
  return (
  <div className="pl-0 pr-0 lg:pl-[200px] lg:pr-[400px]">
      <Text
        variant="h2"
        className="dark:text-darkheadings relative z-10"
      >
        Training Delivery Options{" "}
      </Text>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-x-6 relative z-10 mt-3">
        <Card className="p-5 bg-background rounded-lg mb-5 md:mb-0">
          <Text
            variant="b"
            className="dark:text-primary-foreground text-[22px] mb-4 opacity-85"
          >
            Live Virtual Instructor-led Training
          </Text>
          <Separator className="mb-5 w-10/12 bg-blue-700"/>
          <CheckList
            items={TrainingDeliveryItems}
            columns={1}
            icon={Check}
            className=""
          />
          <ScrollButton
            variant="secondary"
            className="p-6 mt-6 w-full text-[18px] font-semibold"
            targetId="schedules"
          >
             View Training Dates & Prices
          </ScrollButton>
        </Card>
        <Card className="p-5 bg-background rounded-lg">
          <Text
            variant="b"
            className="dark:text-primary-foreground text-[22px] mb-4 opacity-85"
          >
            Corporate Group Training-Onsite
          </Text>
          <Separator className="mb-5 w-10/12 bg-orange-600"/>
          <CheckList
            items={TrainingDeliveryItems}
            columns={1}
            icon={Check}
            className=""
          />
          <Button
            variant="outline"
            className="p-6 mt-6 w-full text-[18px] text-primary dark:text-primary-foreground border-blue-500 font-normal"
          >
            Contact Course Advisor
          </Button>
        </Card>
      </div>
    </div>
    )
};

export default CourseTrainingDeliveryOptions;
