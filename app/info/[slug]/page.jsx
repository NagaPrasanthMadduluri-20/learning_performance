import RequestEnquiryForm from '@/app/[...slug]/sections/RequestEnquiryForm';
import Schedules from '@/app/[...slug]/sections/SchedulesSection';
import InvlTrainingAvatar from '@/app/[...slug]/sharedsections/InvlTrainingAvatarSection';
import LearningAdvantage from '@/app/[...slug]/sharedsections/LearningAdvantageSection';
import InfoDescription from '@/app/ResourcesComponents/InfoDescriptionSection';
import { generateDynamicMetadata } from '@/lib/dynamicmetadata';
import { getInfoDetail } from '@/services';
import React from 'react'

const templateMapping = {

  InfoDescription: ({ content, globaldata }) =>  <InfoDescription InfoData={content} additionalData={globaldata}/>,
  Schedules: ({ content, globaldata }) => <Schedules additionalData={globaldata}/>,
  LearningAdvantage: ({ content, globaldata }) => <LearningAdvantage category={false} />,
  CorporateGroupTrainingCard: ({ content, globaldata }) => <InvlTrainingAvatar CorporateTrainingBannerData={content} additionalData={globaldata}/>,
  EnquiryFormTab: ({ content, globald}) => <RequestEnquiryForm/>
};

export async function generateMetadata({params}) {
  const { slug } = params;
  const { infoDetailData: getinfodetaildata } = await getInfoDetail(slug);
  return generateDynamicMetadata(getinfodetaildata);
};

const InfoChild = async({params}) => {
  const { slug } = params;
  let getinfodetaildata, error;
  ({infoDetailData : getinfodetaildata, error} = await getInfoDetail(slug));
  if (error) {
    return <div>Error: {error.message}</div>;
  }
const { pageContents } = getinfodetaildata;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getinfodetaildata} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getinfodetaildata && getinfodetaildata.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No infodata available</div>
      )}
    </div>
  );
}

export default InfoChild