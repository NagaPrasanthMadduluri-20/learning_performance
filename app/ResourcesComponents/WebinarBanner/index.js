import Text from "@/components/Text";
import { Separator } from "@/components/ui/separator";
import React from "react";
import WebinarCard from "../WebinarCard";
import Link from "next/link";
import Container from "@/components/Container";
import { ChevronRight } from "lucide-react";
import StayConnected from "../StayConnected";
import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";

const WebinarBanner = ({ WebinarPageData, additionalData }) => {
  return (
    <>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
      </Container>
      <Container className="py-6">
        <div className="md:grid md:grid-cols-10 md:gap-x-5">
          <div className="col-span-10 md:col-span-7">
            <Text variant="h2" className="text-primary mb-5">
              Webinars
            </Text>
            <WebinarCard additionalData={additionalData} />
          </div>
          <div className="col-span-10 md:col-span-3">
            <StayConnected webinar/>

            <Text className="text-[19px] mb-2 mt-5"> Recommended Courses</Text>
            <Separator />
            {additionalData.RecommendedCourses.map((item, index) => (
              <div key={index} className="mt-5">
                <div className="flex gap-x-5 p-2 items-center hover:bg-gray-200">
                  <ChevronRight size={15} />{" "}
                  <Link href={item.slug}>{item.name}</Link>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default WebinarBanner;
