import AnimatedAssessmentCard from "@/app/ResourcesComponents/AnimatedAssessmentCard";
import AssessmentDetail from "@/app/ResourcesComponents/AssessmentDetailBanner";
import AssessmentForm from "@/app/ResourcesComponents/AssessmentForm";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";
import { getAssesmentsDetail } from "@/services";
import React from "react";

const templateMapping = {
  Assessment_Description: ({ content, globaldata }) => (
    <>
      <AssessmentDetail
        AssessmentDetailData={content}
        additionalData={globaldata}
      />
      <AssessmentForm 
        formType="AssessmentForm"
        
      />
      <AnimatedAssessmentCard
        dataType="RelatedAssessments"
        additionalData={globaldata}
      />
    </>
  ),
};

export async function generateMetadata({params}) {
  const { childslug } = params;
  const { assessmentsDetailData: getassessmentsdetaildata } = await getAssesmentsDetail(childslug);
  return generateDynamicMetadata(getassessmentsdetaildata);
};

const NestedChildAssesment = async ({ params }) => {
  const { slug, childslug } = params;
  let getassessmentsdetaildata, error;
  ({ assessmentsDetailData: getassessmentsdetaildata, error } =
    await getAssesmentsDetail(childslug));
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getassessmentsdetaildata;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent
        content={content}
        globaldata={getassessmentsdetaildata}
      />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getassessmentsdetaildata && getassessmentsdetaildata.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No assessmentsleveldata data available</div>
      )}
    </div>
  );
};

export default NestedChildAssesment;
