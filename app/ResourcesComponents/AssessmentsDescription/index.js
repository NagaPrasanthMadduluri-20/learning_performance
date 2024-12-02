"use client";
import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AssessmentsDescription = ({ AssessmentDescription, additionalData }) => {
  const { contents } = AssessmentDescription;
  const { AllAssessment } = additionalData;
  const pathname = usePathname();
  //console.log("path", pathname);
  return (
    <>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
      </Container>
      <Container>
        <div className="grid grid-cols-10">
          {AllAssessment.assessment_by_type &&
            AllAssessment.assessment_by_type.length > 0 && (
              <div className="col-span-4">
                <Text
                  variant="h2"
                  className="text-primary dark:text-primary-foreground mb-5"
                >
                  {" "}
                  Related Assessments
                </Text>
                {AllAssessment.assessment_by_type?.map((item, index) => (
                  <div key={index}>
                    <Link href={item.page_slug} className="">
                      <div
                        className={`mb-3 p-2 font-semibold inline-flex border-2 rounded-md shadow-md w-[80%] ${
                          pathname === `/assesments/${item.page_slug}`
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }`}
                      >
                        {item.link_title}{" "}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          <div className="col-span-6">
            <div className="sticky top-24">
              <Text
                variant="h2"
                className="text-primary dark:text-primary-foreground mb-5"
              >
                {contents?.title}
              </Text>
              <Text>{contents?.description}</Text>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AssessmentsDescription;
