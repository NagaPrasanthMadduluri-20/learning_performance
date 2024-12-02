import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Image from "next/image";
import { Star, UserRound } from "lucide-react";
import SocialMediaLinks from "../SocialMediaLinks";
import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";
import ScrollButton from "@/app/components/ScrollButton";

const CategoryBannerNew = ({ BannerData, additionalData }) => {
  const { contents } = BannerData;

  return (
    <>
      {/* Background image - hidden on mobile */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-[length:60%_120%] bg-no-repeat bg-right-top hidden md:block"
          style={{
             backgroundImage: `url('${contents.new_category_banner_image_link}')`,
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F66] dark:from-black via-[#3F51B5] dark:via-gray-900 to-transparent md:to-[rgba(63,81,181,0)]"></div>

        {/* Mobile gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(63,81,181,4)] dark:from-black to-[#12133D] dark:to-gray-900 md:hidden"></div>

        
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-10 relative z-10">
            <div className="col-span-6">
              <Text
                variant="h1"
                className="text-primary-foreground mb-6 max-w-[600px]"
              >
                {contents.course_name}
              </Text>
              <Text
                variant="body1"
                className="text-primary-foreground mb-6 leading-6 opacity-80"
              >
                {contents.course_content}
              </Text>
              <div className="sm:flex sm:flex-row sm:items-start gap-x-16 flex-col mt-10">
                <ScrollButton targetId="global-courses" variant="secondary" className="xs:mb-4 px-9"> View Courses </ScrollButton>
                <div className="flex gap-x-8 ">
                  {contents.categorybanners &&
                    contents.categorybanners.length > 0 &&
                    contents.categorybanners[0]["Accrediations"] !== null &&
                    contents.categorybanners.map((accrediate, index) => (
                      <Image
                        alt={accrediate.AccrediationsTitle}
                        src={accrediate.Accrediations}
                        key={index}
                        width={50}
                        height={40}
                        className="mr-2 bg-white rounded-full"
                      />
                    ))}
                </div>
              </div>
              <div className="text-primary-foreground mt-6 flex-col items-center sm:flex sm:flex-row sm:gap-x-24 ">
                {" "}
                <Text variant="b" className="flex gap-x-2 items-center">
                  <Star fill="#fff" strokeWidth={0} size={20} />{" "}
                  {contents.course_rating_value} Rating
                </Text>{" "}
                <Text className="flex items-center gap-x-2">
                  {" "}
                  <UserRound fill="#fff" strokeWidth={0} size={20} />{" "}
                  {contents.Course_Learners_count}{" "}
                </Text>{" "}
                <div>
                  <SocialMediaLinks />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb}/>
      </Container>
    </>
  );
};

export default CategoryBannerNew;
