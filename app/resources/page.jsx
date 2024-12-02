import React from "react";
import { ResourcesapiData } from "@/data/ResourcesData";
import StaticPageBanner from "../components/StaticPageComponents/StaticPageBanner";
import ResourcesList from "../ResourcesComponents/ResourcesList";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

const templatemapping = {
  ResourceBanner: ({ content, globaldata }) => <StaticPageBanner ResourcesData={content} additionalData={globaldata} />,
  ListOfAllResources: ({ content, globaldata }) => <ResourcesList/>
};


export function generateMetadata() {
  return generateDynamicMetadata(ResourcesapiData);
};

const Resources = () => {
  const { pageContents } = ResourcesapiData;
  const RenderTemplate = (template, content) => {
    const TemplateComponent = templatemapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={ResourcesapiData} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{RenderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No Resources Data available</div>
      )}
    </div>
  );
};

export default Resources;
