"use client";
import Container from "@/components/Container";
import StarRating from "@/app/components/StarRating";
import Text from "@/components/Text";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoveRight, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";
import Schema from "@/lib/schema";
import ScrollButton from "@/app/components/ScrollButton";

const CourseBanner = ({ CourseBannerData, additionalData }) => {
  const { contents } = CourseBannerData;
  const { page_name, breadcrumbSchema } = additionalData;
  const imageAccreditations = contents.categorybanners?.filter(
    (item) => item.instuctor === "image"
  );
  const textAccreditations = contents.categorybanners?.filter(
    (item) => item.instuctor === "text"
  );
  const pagePmp =
    page_name == "PMP Certification" || page_name == "CAPM Exam Prep"
      ? true
      : false;
  const pageItil = [
    "ITIL 4 Foundation",
    "Change Management Foundation & Practitioner Certification",
    "Business Analysis Foundation & Practitioner Certification",
    "Oracle Primavera P6 Certification Training",
  ].includes(page_name);
  const pagePMI = page_name == "PMI-ACP Exam Prep" ? true : false;
  const pageRFF = page_name == "Project Management Fundamentals" ? true : false;

  return (
    <div className="relative">
      {/* <div
        className="absolute inset-0 top-10 right-44 bg-[length:33%_80%] bg-no-repeat bg-right-top hidden md:block "
        style={{
          backgroundImage: `url('${contents.vector_image_webp_path}')`,
        }}
      /> */}

      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(63,81,181)] dark:from-black to-[#12133D] dark:to-gray-700 sm:hidden"></div>
      <div className="bg-lightbackground">
        <Container className="pb-3 pt-4 sm:pt-12">
          <div className="grid grid-cols-12 relative z-10 text-primary-foreground sm:text-foreground">
            <div className="space-y-4 md:col-span-7 col-span-12">
              <Text variant="h1" className="max-w-[600px]">
                HELLO, I AM HEADING
              </Text>

              <Text className="">HI, I am Content</Text>
              <div className="flex-col sm:flex sm:flex-row sm:gap-x-5 ">
                <ScrollButton
                  variant="secondary"
                  className="p-6 text-[18px] w-full rounded-sm flex gap-x-2 whitespace-nowrap"
                  targetId="schedules"
                >
                  {" "}
                  {page_name == "PMP Certification"
                    ? "View Dates & Enroll for PMP"
                    : " View Dates & Enroll Now"}{" "}
                  <MoveRight />
                </ScrollButton>

                <ScrollButton
                  variant="outline"
                  className="p-6 text-[18px] w-full rounded-sm bg-background hover:text-primary text-primary border-blue-500 xs:mt-4 sm:mt-0"
                  targetId="inquireform"
                >
                  {" "}
                  {page_name == "PMP Certification"
                    ? "Enquire about PMP Training"
                    : "Enquire about this Training"}{" "}
                </ScrollButton>
              </div>

              <div>
                <div className="flex-col sm:flex sm:flex-row gap-x-20">
                  <div className="flex xs:mb-4">
                    <StarRating rating={Number(contents.course_rating_value)} />
                    <Text className="ml-2">
                      {contents.course_rating_content}
                    </Text>
                  </div>
                  <Text className="flex gap-x-2">
                    <UserRound fill="#Ec7601" strokeWidth={0} size={20} />
                    {contents.Course_Learners_count}
                    {""} Learners
                  </Text>
                </div>
              </div>

              <Text className="mt-0">
                {" "}
                <Link href="" className="underline decoration-solid">
                  Get a Quote
                </Link>{" "}
                : Request for group Training
              </Text>

              <div className="grid grid-rows-2 grid-cols-4 gap-4 ">
                {imageAccreditations?.map((item, index) => (
                  <div
                    className="sm:row-span-3 sm:col-span-1 row-span-2 col-span-2"
                    key={index}
                  >
                    {" "}
                    <Image
                      src={item.Accrediations}
                      alt={item.Accrediations}
                      width={140}
                      height={87}
                      className="xs:bg-white xs:w-[120px] sm:bg-transparent dark:bg-detailcontrast"
                      priority
                    />
                    {item.AccrediationsLink && (
                      <Button
                        className="bg-[#6AA942] hover:bg-[#6AA942] py-0 px-3 rounded-md h-6 text-center mt-5"
                        asChild
                      >
                        <Link href={item.AccrediationsLink} target="blank">
                          {" "}
                          Verify Badge{" "}
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}

                {/* {textAccreditations.map((item, index) => (
                  <div
                    className="row-span-1 col-span-1 hidden md:block w-[80%]"
                    key={index}
                  >
                    {item.instuctor === "text" ||
                    item.instuctor != undefined ? (
                      <>
                        {item.Accrediations}
                        <Text>{item.AccrediationsTitle}</Text>
                      </>
                    ) : (
                      <Avatar src={item.Accrediations} key={index} />
                    )}
                  </div>
                ))} */}

                {contents.Pay_Once_Attend_Twice !== "disable" && (
                  <div className="row-span-1 col-span-3 hidden md:block">
                    <div className="flex gap-x-5 mt-5">
                      <Text className="text-[20px] font-bold text-primary dark:text-green-100 dark:opacity-65 underline decoration-solid">
                        Pay Once!
                      </Text>
                      <Text className="text-[20px] font-bold text-secondary dark:text-orange-100 dark:opacity-65 underline decoration-solid">
                        Attend Twice*
                      </Text>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="sm:col-span-5 col-span-0 md:flex hidden">
              <Image
                src={contents.vector_image_webp_path}
                alt="course-banner"
                width={500}
                height={800}
                className="max-w-[90%] h-[85%]"
                priority
              />
            </div>
          </div>
        </Container>
      </div>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
        {breadcrumbSchema ? (
          <Schema schema={additionalData.breadcrumbSchema} />
        ) : (
          <p>Schema not there</p>
        )}
      </Container>
    </div>
  );
};

export default CourseBanner;
