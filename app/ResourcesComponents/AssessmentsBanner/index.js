import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";
import ScrollButton from "@/app/components/ScrollButton";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const AssessmentsBanner = ({ AssessmentData, additionalData }) => {
  const { contents } = AssessmentData;
  return (
    <>
      <div>
        <Container className="py-0">
          <div
            className={`grid grid-cols-1 md:grid-cols-10 md:items-center md:gap-x-28`}
          >
            <div className="col-span-1 md:col-span-6">
              <Text
                variant="h2"
                className="text-primary dark:text-primary-foreground mb-5 !text-[30px]"
              >
                Assessments
              </Text>
              <Text className="mb-10 leading-6">{contents.description}</Text>
              <ScrollButton
                variant="secondary"
                targetId="Assesmentlist"
                className="cursor-pointer"
              >
                Explore All Assessments
              </ScrollButton>
            </div>
            <div className="hidden md:flex md:col-span-4">
              <Image
                src={`/assessment-home-banner.webp`}
                alt="assesmment banner image"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </div>
      <Separator className="mt-10" />
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
      </Container>
    </>
  );
};

export default AssessmentsBanner;
