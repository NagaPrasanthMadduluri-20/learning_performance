import React from "react";
import { JoinAsATrainerapi } from "@/services";
import TrainerRegistrationForm from "../components/StaticPageComponents/TrainerRegistrationForm";
import StaticPageBanner from "../components/StaticPageComponents/StaticPageBanner";
import HardEarnedExpertize from "../components/StaticPageComponents/HardEarnedExpertize";
import DriveTheChange from "../components/StaticPageComponents/DriveTheChange";
import StaticFaqsAccordian from "../components/StaticPageComponents/StaticFaqsAccordian";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

const templatemapping = {
  JoinAsTrainerBanner: ({ content, globaldata}) => <StaticPageBanner joinTrainerData={content} additionalData={globaldata}/>,
  TrainerRegistrationForm: ({ content, globaldata }) => (
    <TrainerRegistrationForm formType="TrainerForm" />
  ),
  HardEarnedExpertise: ({ content, globaldata }) => <HardEarnedExpertize HandEarnedData={content} additionalData={globaldata}/>,
  TrainingPossibilities: ({content, globaldata}) => <HardEarnedExpertize TrainingPossibleData={content} additionalData={globaldata}/>,
  DriveTheChange: ({content, globaldata}) => <DriveTheChange DriveTheData={content} additionalData={globaldata}/>,
  FrequentlyAskedQuestions: ({content, globaldata}) => <StaticFaqsAccordian StaticFaqsData={content} additionalData={globaldata} />
  };
  export async function generateMetadata() {
    const { JoinAsATrainerData: getJoinAsATrainerData } = await JoinAsATrainerapi();
    return generateDynamicMetadata(getJoinAsATrainerData);
  };

const JoinAsATrainer = async () => {
  let getJoinAsATrainerData, error;
  ({ JoinAsATrainerData: getJoinAsATrainerData, error } =
    await JoinAsATrainerapi());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getJoinAsATrainerData;

  const RenderTemplate = (template, content) => {
    const TemplateComponent = templatemapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getJoinAsATrainerData} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{RenderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getJoinAsATrainerData && getJoinAsATrainerData?.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No Corporate Group Training Data available</div>
      )}
    </div>
  );
};

export default JoinAsATrainer;
