import Container from '@/components/Container'
import { getUpskillDetails } from '@/services';
import React from 'react'
import UpskillDetail from '../UpskillDetail';
import UpskillDetaillist from '../UpskillDetaillist';
import { generateDynamicMetadata } from '@/lib/dynamicmetadata';

const templateMapping = {

    UpskillDetailsBanner: ({ content, globaldata }) =>  <UpskillDetail UpskillDetailPageData={content} additionalData={globaldata} />,
    UpskillDetails: ({ content, globaldata }) => <UpskillDetaillist UpskillDetaillistData={content} additionalData={globaldata} />
  };
  export async function generateMetadata({params}) {
    const { slug } = params;
    const { UpskillDetailData: getUpskillDetailData } = await getUpskillDetails(slug);
    const currentslug = `upskill/${slug}`
    return generateDynamicMetadata(getUpskillDetailData, null, currentslug);
  };

const UpskillDetails = async({params}) => {
    const { slug } = params;
    let getUpskillDetailData, error;
    ({ UpskillDetailData: getUpskillDetailData, error } = await getUpskillDetails(slug));
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    const { pageContents } = getUpskillDetailData;
    const renderTemplate = (template, content) => {
      const TemplateComponent = templateMapping[template];
      return TemplateComponent ? (
        <TemplateComponent
          content={content}
          globaldata={getUpskillDetailData}
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
        {getUpskillDetailData && getUpskillDetailData.pageContents ? (
          renderContent(pageContents)
        ) : (
          <div>No infodata available</div>
        )}
      </div>
    );
}

export default UpskillDetails