import { getUpskill } from '@/services'
import React from 'react'
import UpskillBanner from './UpskillBanner';
import UpskillCard from './UpskillCard';
import { generateDynamicMetadata } from '@/lib/dynamicmetadata';


const templateMapping = {

  UpskillBanner: ({ content, globaldata }) =>  <UpskillBanner UpskillPageData={content} additionalData={globaldata} />,
  UpskillCard: ({ content, globaldata }) => <UpskillCard UpskillCardData={content} additionalData={globaldata} />
};

export async function generateMetadata() {
  const { UpskillData: getUpskillData } = await getUpskill();
  const slug = getUpskillData.page_slug;
  return generateDynamicMetadata(getUpskillData, null, slug);
};

const Upskill = async() => {
  let getUpskillData, error;
  ({ UpskillData: getUpskillData, error } = await getUpskill());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getUpskillData;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent
        content={content}
        globaldata={getUpskillData}
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
      {getUpskillData && getUpskillData.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No infodata available</div>
      )}
    </div>
  );
}

export default Upskill