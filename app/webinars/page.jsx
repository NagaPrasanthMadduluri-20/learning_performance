
import React from 'react'
import { getWebinar } from '@/services'
import WebinarBanner from '../ResourcesComponents/WebinarBanner'
import { generateDynamicMetadata } from '@/lib/dynamicmetadata'


const templateMapping = {

  WebinarListCard: ({ content, globaldata }) =>  <WebinarBanner WebinarPageData={content} additionalData={globaldata} />,

};
const WebinarMetaData = {
  pageSeos: [
  {
    name: "title",
    value: "Webinar - Register for Upcoming Live and Recorded Webinars",
    type: "SEO TITLE",
  },
  {
    name: "description",
    value:
      "Register to join our upcoming live webinars and recorded webinars from Invensis Learning.",
    type: "META",
  },
]
}
export async function generateMetadata() {
  const {webinarData : getwebinardata} = await getWebinar();
  const slug = getwebinardata.page_slug;
  return generateDynamicMetadata(WebinarMetaData, null, slug);
};

const Webinars = async() => {
  let getwebinardata, error;
  ({webinarData : getwebinardata, error} = await getWebinar());

  if (error) {
    return <div>Error: {error.message}</div>;
  }
const { pageContents } = getwebinardata;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getwebinardata} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getwebinardata && getwebinardata.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No webinar data available</div>
      )}
    </div>
  );
};

export default Webinars