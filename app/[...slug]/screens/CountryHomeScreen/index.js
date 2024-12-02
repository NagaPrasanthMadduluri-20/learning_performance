import HomePageBanner from '@/app/[...slug]/sharedsections/HomePageBanner';
import React from 'react'
import HomeTrainingDelivery from '../../sharedsections/HomeTrainingDeliverySection';
import GlobalAccredatationSlider from '../../sharedsections/GlobaAccredatationSliderSection';
import InvlTrainingAvatar from '../../sharedsections/InvlTrainingAvatarSection';
import HomepageAbout from '../../sections/HomepageAbout';
import CorporateUpskillSliderSection from '../../sharedsections/CorporateUpskillSliderSection';


const templateMapping = {
    Banner: ({ content, globaldata }) => (
      <HomePageBanner BannerData={content} additionalData={globaldata} />
    ),
    InvlTrainingDeliveryMode: ({ content, globaldata }) => (
      <HomeTrainingDelivery deliveryData={content} additionalData={globaldata} />
    ),
    GlobalAccreditationsSlider: ({ content, globaldata }) => (
      <GlobalAccredatationSlider
        GlobalAccredatationSliderData={content}
        additionalData={globaldata}
      />
    ),
    InvlCorporateTrainingAvatar: ({ content, globaldata }) => (
      <InvlTrainingAvatar
        InvlTrainingData={content}
        additionalData={globaldata}
      />
    ),
    EnterpriseGlobally: ({ content, globaldata }) => (
      <CorporateUpskillSliderSection
        CorporateUpskillSliderData={content}
        additionalData={globaldata}
      />
    ),
    AboutInvensisLearning: ({ content, globaldata }) => (
      <HomepageAbout
        AboutInvensisLearningData={content}
        additionalData={globaldata}
      />
    ),
  };

export default async function HomeScreen ({data}) {
  
     const renderTemplate = (template, content) => {
       const TemplateComponent = templateMapping[template];
       return TemplateComponent ? (
         <>
           <TemplateComponent key={content.id} content={content} globaldata={data} />
         </>
       ) : null;
     };
   
     const { pageContents } = data;
    
     const renderContent = (contentArray) => {
       return contentArray?.map((content, index) => {
      
         return <div key={index}>{renderTemplate(content.template, content)}</div>;
       });
       
     };
  
     return <div>{renderContent(pageContents)}</div>;
   }
