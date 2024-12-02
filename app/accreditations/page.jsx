import { getAccreditations } from '@/services';
import React from 'react'
import StaticPageBanner from '../components/StaticPageComponents/StaticPageBanner';
import AccreditationsList from './AccreditationsList';
import { generateDynamicMetadata } from '@/lib/dynamicmetadata';


const templateMapping = {

    AccreditationsBanner: ({ content, globaldata }) =>  <StaticPageBanner accreditationData={content} additionalData={globaldata} />,
    AccreditationsListCard: ({ content, globaldata }) => <AccreditationsList  accreditationListData={content} additionalData={globaldata} />
   
  }

  export async function generateMetadata() {
    const { AccreditationData: getAccreditationData } = await getAccreditations();
    return generateDynamicMetadata(getAccreditationData);
  };

const Accreditations = async() => {
    let getAccreditationData, error;
    ({ AccreditationData: getAccreditationData, error } = await getAccreditations());
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    const { pageContents } = getAccreditationData;
    const renderTemplate = (template, content) => {
      const TemplateComponent = templateMapping[template];
      return TemplateComponent ? (
        <TemplateComponent
          content={content}
          globaldata={getAccreditationData}
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
        {getAccreditationData && getAccreditationData.pageContents ? (
          renderContent(pageContents)
        ) : (
          <div>No infodata available</div>
        )}
      </div>
    );
}

export default Accreditations