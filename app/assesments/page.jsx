import React from "react";
import { getAssesmentsList } from "@/services";
import AssessmentsBanner from "../ResourcesComponents/AssessmentsBanner";
import AssessmentsTab from "../ResourcesComponents/AssessmentsTab";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

const templateMapping = {
  AssessmentTab: ({ content, globaldata }) => (
    <>
      <AssessmentsBanner AssessmentData={content} additionalData={globaldata} />
      <AssessmentsTab additionalData={globaldata} />
    </>
  ),
};

export async function generateMetadata() {
  const { assessmentsData: getassessmentsdata } = await getAssesmentsList();
  return generateDynamicMetadata(getassessmentsdata);
};

const Assessment = async () => {
  let getassessmentsdata, error;
  ({ assessmentsData: getassessmentsdata, error } = await getAssesmentsList());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getassessmentsdata;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getassessmentsdata} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getassessmentsdata && getassessmentsdata.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No Assessments data available</div>
      )}
    </div>
  );
};

export default Assessment;
