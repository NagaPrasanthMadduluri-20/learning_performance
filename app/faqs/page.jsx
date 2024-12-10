import { getfaqs } from "@/services";
import React from "react";
import FaqsComponent from "./FaqsComponent";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

const templateMapping = {
  FaqPageTabs: ({ content, globaldata }) => (
    <FaqsComponent additionalData={globaldata} />
  ),
};

export async function generateMetadata() {
  const { FaqsData: getFaqsData } = await getfaqs();
  const slug = getFaqsData.page_slug;
  return generateDynamicMetadata(getFaqsData, null, slug);
};

const Faqs = async () => {
  let getFaqsData, error;
  ({ FaqsData: getFaqsData, error } = await getfaqs());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getFaqsData;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getFaqsData} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getFaqsData && getFaqsData.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No infodata available</div>
      )}
    </div>
  );
};

export default Faqs;
