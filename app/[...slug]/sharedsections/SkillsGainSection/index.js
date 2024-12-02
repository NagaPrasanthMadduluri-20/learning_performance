import CheckList from "@/app/components/CheckListComponent";
import Container from "@/components/Container";
import ExpandableContent from "@/app/components/ExpandableComponent";
import NotFound from "@/app/not-found";
import { Check } from "lucide-react";
import React from "react";
import Text from "@/components/Text";

const SkillsGain = ({
  SkillsGainData,
  whoShouldAttendData,
  CourseMaterialData,
  CourseBenefitsNewData,
  WhatWillYouLearnData,
}) => {
  const { contents: skillsGainContents } = SkillsGainData || {};
  const { contents: whoShouldAttendContents } = whoShouldAttendData || {};
  const { contents: CourseMaterialContents } = CourseMaterialData || {};
  const { contents: CourseBenefitsNewContents } = CourseBenefitsNewData || {};
  const { contents: WhatWillYouLearnContents } = WhatWillYouLearnData || {};

  const skillsGainItems = skillsGainContents?.skillsgains || [];
  const skillsGainHeading = skillsGainContents?.new_heading || skillsGainContents?.heading || "";
  const skillsGainDescription = skillsGainContents?.description || "";

  const whoShouldAttendItems = whoShouldAttendContents?.coursewhoshouldattends || [];
  const whoShouldAttendHeading = whoShouldAttendContents?.heading || whoShouldAttendContents?.new_heading ||"";
  const whoShouldAttendDescription = whoShouldAttendContents?.description || "";

  const CourseMaterialItems = CourseMaterialContents?.coursematerials || "";
  const CourseMaterialHeading = CourseMaterialContents?.heading ||  CourseMaterialContents?.new_heading || "";
  const CourseMaterialDescription = CourseMaterialContents?.description || "";

  const CourseBenefitsNewItems = CourseBenefitsNewContents?.coursebenefitsnews || {};
  const CourseBenefitsNewIcons = CourseBenefitsNewContents?.coursebenefitsnews.lists_icons || {};
  const CourseBenefitsNewHeading = CourseBenefitsNewContents?.heading || CourseBenefitsNewContents?.new_heading ||  "";
  const CourseBenefitsNewDescription = CourseBenefitsNewContents?.description || "";

  const WhatWillYouLearnItems =
    WhatWillYouLearnContents?.whatwillyoulearns || [];
  const WhatWillYouLearnHeading = WhatWillYouLearnContents?.heading || "";

  const hasSkillsGainData =
    skillsGainItems.length > 0 && (skillsGainHeading || skillsGainDescription);
  const hasWhoShouldAttendData =
    whoShouldAttendItems.length > 0 &&
    (whoShouldAttendHeading || whoShouldAttendDescription);
  const hasCourseMaterialData =
    CourseMaterialItems.length > 0 &&
    (CourseMaterialHeading || CourseMaterialDescription);
  const hasCourseBenefitsNewData =
    CourseBenefitsNewItems.length > 0 &&
    (CourseBenefitsNewHeading || CourseBenefitsNewDescription);
  const hasWhatWillYouLearnData =
    WhatWillYouLearnItems.length > 0 &&
    (WhatWillYouLearnHeading || WhatWillYouLearnItems);
    const initialHeight = { mobile: "600px", desktop: "300px" };

    const headactive = skillsGainHeading 
  return (
   
    <Container className="py-6">
      <div>
        {hasSkillsGainData ? (
          <div className="pt-8">
          <CheckList
            heading={skillsGainHeading }
            description={skillsGainDescription}
            items={skillsGainItems}
            icon={Check}
            columns={2}
            className="bg-lightbackground p-4 mb-4"
          />
      </div>
        ) : null}

        {hasWhoShouldAttendData ? (
          <CheckList
            heading={whoShouldAttendHeading}
            description={whoShouldAttendDescription}
            items={whoShouldAttendItems}
            columns={3}
            className=""
          />
        ) : null}


        {hasCourseMaterialData ? (
        
          <CheckList
            heading={CourseMaterialHeading}
            description={CourseMaterialDescription}
            items={CourseMaterialItems}
            columns={2}
            className=""
          />
        ) : null}
 
        {hasCourseBenefitsNewData ? (
          <div id="key-highlights" className="pt-8">
          <CheckList
            heading={CourseBenefitsNewHeading}
            description={CourseBenefitsNewDescription}
            items={CourseBenefitsNewItems}
            columns={2}
            variant="customIcon"
            className="gap-8"
          />
          </div>
        ) : null}
     
      
        {hasWhatWillYouLearnData ? (
          <div>
            <ExpandableContent
            initialHeight={initialHeight}
            buttonClassName="rounded-full border border-gray-500 relative z-10 h-8 items-center hover:bg-primary hover:text-primary-foreground"
            contentClassName="mt-4"
          >
          <CheckList
            heading={WhatWillYouLearnHeading}
            items={WhatWillYouLearnItems}
            columns={2}
            className="gap-4"
            variant="numbered"
          />
           </ExpandableContent>
           </div>
        ) : null}
  
        {!hasSkillsGainData &&
        !hasWhoShouldAttendData &&
        !hasCourseMaterialData &&
        !hasCourseBenefitsNewData &&
        !hasWhatWillYouLearnData ? (
          <NotFound />
        ) : null}
      </div>
    </Container>
  );
};

export default SkillsGain;
