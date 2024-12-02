import AnimatedAssessmentCard from '@/app/ResourcesComponents/AnimatedAssessmentCard';
import AssessmentsDescription from '@/app/ResourcesComponents/AssessmentsDescription';
import Container from '@/components/Container'
import Text from '@/components/Text'
import { generateDynamicMetadata } from '@/lib/dynamicmetadata';
import { getAssesmentsLevelList } from '@/services';
import Link from 'next/link'
import React from 'react'


const templateMapping = {
  Assessment_Common_Description: ({ content, globaldata }) => (
    <>
    <AssessmentsDescription AssessmentDescription={content} additionalData={globaldata}/>
    <AnimatedAssessmentCard additionalData={globaldata} dataType="AllAssessment"
 
/>
</>
  ),
};

export async function generateMetadata({params}) {
  const { slug } = params;
  const { assessmentsLevelData: getassessmentsleveldata } = await getAssesmentsLevelList(slug);
  return generateDynamicMetadata(getassessmentsleveldata);
};

const NestedAssesment = async ({params}) => {
  const { slug } = params;
  let getassessmentsleveldata, error;
  ({ assessmentsLevelData: getassessmentsleveldata, error } = await getAssesmentsLevelList(slug));
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getassessmentsleveldata;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getassessmentsleveldata} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getassessmentsleveldata && getassessmentsleveldata.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No assessmentsleveldata data available</div>
      )}
    </div>
  );
};

export default NestedAssesment