
import Text from '@/components/Text'
import Link from 'next/link'
import React from 'react'
import Container from '../../components/Container'
import InfoBanner from '../ResourcesComponents/InfoBanner'
import { getInfo } from '@/services'
import { generateDynamicMetadata } from '@/lib/dynamicmetadata'

const templateMapping = {

  InfoTab: ({ content, globaldata }) =>  <InfoBanner InfoTabData={content}  additionalData={globaldata} />,

};

export async function generateMetadata() {
  const { infoData: getinfodata } = await getInfo();
  const slug = getinfodata.page_slug;
  return generateDynamicMetadata(getinfodata, null, slug);
};


const Info = async() => {
  let getinfodata, error;
  ({infoData : getinfodata, error} = await getInfo());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
const { pageContents } = getinfodata;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getinfodata} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getinfodata && getinfodata.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No infodata available</div>
      )}
    </div>
  );
}

export default Info