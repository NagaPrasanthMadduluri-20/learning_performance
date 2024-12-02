import Container from "@/components/Container";
import ExpandableContent from "@/app/components/ExpandableComponent";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const CategoryJobRoles = ({
  CategoryJobRolesData,
  strengthenData,
  CategoryKnowAboutData,
  KnowAboutOurTrainersData,
}) => {
  const jobRolesContents = CategoryJobRolesData?.contents || {};
  const strengthenContents = strengthenData?.contents || {};
  const KnowAboutContents = CategoryKnowAboutData?.contents || {};
  const KnowAboutOurTrainersContents = KnowAboutOurTrainersData?.contents || {};
  const initialHeight =
    KnowAboutContents && Object.keys(KnowAboutContents).length > 0
      ? { mobile: "700px", desktop: "600px" }
      : { mobile: "400px", desktop: "220px" };

  return (
    <div >
      <div>
    <Container
      className={`relative ${KnowAboutOurTrainersContents ? "pt-0" : ""}`}
    >
      <div>
        <Text variant="h2" className="!text-[24px] mb-3 mt-6">
          {jobRolesContents.heading}
        </Text>
        <Text> {jobRolesContents.description} </Text>
        <Text variant="h2" className="!text-[24px] mb-3 mt-10">
          {strengthenContents.heading}
        </Text>
        <Text> {strengthenContents.description} </Text>
        <Text variant="h2" className="!text-[24px] mb-3">
          {KnowAboutContents.heading}
        </Text>
        <Text> {KnowAboutContents.description} </Text>
        <Text variant="h2" className="!text-[24px] mb-3">
          {KnowAboutOurTrainersContents.heading}
        </Text>
        <Text> {KnowAboutOurTrainersContents.description} </Text>
       
        <ExpandableContent
          initialHeight={initialHeight}
          buttonClassName="rounded-full border border-gray-500 relative z-10 h-8 items-center hover:bg-primary hover:text-primary-foreground"
          contentClassName="mt-4"
        >
          {KnowAboutOurTrainersContents && (
            <>
              <ul className="space-y-2 list-disc ml-5">
                {KnowAboutOurTrainersContents.knowaboutourtrainers?.map(
                  (trainer, index) => (
                    <li key={index} className="">
                      <Text variant="h3" className="!text-[20px] mb-2">
                        {" "}
                        {trainer.list_heading}{" "}
                      </Text>

                      <Text> {trainer.lists_text} </Text>
                    </li>
                  )
                )}
              </ul>
          
            </>
            
          )}

          {jobRolesContents && (
            <ul className="space-y-2 list-disc ml-5">
              {jobRolesContents.categoryjobroles?.map((jobRole, index) => (
                <li key={index} className="">
                  <Text variant="h3" className="!text-[20px] mb-2">
                    {" "}
                    {jobRole.list_heading}{" "}
                  </Text>

                  <Text> {jobRole.lists_text} </Text>
                </li>
              ))}
            </ul>
          )}
     
       
          {strengthenContents && (
              
            <ul className="mt-4 space-y-2 list-disc ml-5">
              {strengthenContents.categorystrengthens?.map((jobRole, index) => (
                <li key={index} className="">
                  <Text variant="h3" className="!text-[20px] mb-2">
                    {" "}
                    {jobRole.list_heading}{" "}
                  </Text>

                  <Text> {jobRole.list_description} </Text>
                </li>
              ))}
            </ul>
          
          )}
         
          {KnowAboutContents && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-8" id="knowmoreabout">
                {KnowAboutContents.categoryknowabouts?.map((jobRole, index) => (
                  <Text
                    className="mb-2 p-2 rounded-md border-[1px] border-blue-600 text-primary dark:text-primary-foreground text-center hover:bg-primary hover:text-primary-foreground duration-500 cursor-pointer"
                    key={index}
                  >
                   {jobRole.list}
                  </Text>
                ))}
              </div>

              <ul className="mt-4 space-y-8">
                {KnowAboutContents.categoryknowabouts?.map((jobRole, index) => (
                  <>
                    <li key={index} className="">
                      <Text variant="h3" className="!text-[20px] mb-2" >
                        {" "}
                        {jobRole.course_heading}{" "}
                      </Text>

                      <Text> {jobRole.course_description} </Text>
                    </li>
                    <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-8">
                    <Link href={jobRole.page_slug}> <Button variant="secondary">{jobRole.link_title}</Button></Link>
                      <Link href={jobRole.download_brochure_link}> <Button variant="outline"> Download Brochure </Button></Link>
                    </div>
                  </>
                ))}
              </ul>
            </>
          )}
        </ExpandableContent>
      </div>
  
    </Container>
    </div>
    </div>
  );
};

export default CategoryJobRoles;
