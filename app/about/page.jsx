import { AboutusData } from '@/data/aboutUsData';
import { generateDynamicMetadata } from '@/lib/dynamicmetadata';
import React from 'react'
import StaticPageBanner from '../components/StaticPageComponents/StaticPageBanner';
import LearningAdvantage from '../[...slug]/sharedsections/LearningAdvantageSection';
import CorporateUpskillSliderSection from '../[...slug]/sharedsections/CorporateUpskillSliderSection';
import GlobalAccredatationSlider from '../[...slug]/sharedsections/GlobaAccredatationSliderSection';
import MissionandVision from './MissionandVision';
import WhatWeOffer from './WhatweOffer';


const templatemapping = {
  AboutUsBanner: ({ content, globaldata }) => <StaticPageBanner AboutusData={content} additionalData={globaldata} />,
  WhoWeAre: ({ content, globaldata }) =>  <StaticPageBanner whoweareData={content} additionalData={globaldata} />,
  WhatWeOffer: ({ content, globaldata }) => <WhatWeOffer whatweofferData={content} additionalData={globaldata} />,
  OurVision:({ content, globaldata }) =>  <MissionandVision VisionData={content} additionalData={globaldata}/>,
  OurMission: ({ content, globaldata }) => <MissionandVision MissionData={content} additionalData={globaldata}/>,
  LearningAdvantage: ({ content, globaldata }) => <LearningAdvantage/>,
  EnterpriseGlobally: ({ content, globaldata }) => <CorporateUpskillSliderSection/>,
  GlobalAccreditationsSlider: ({ content, globaldata }) => <GlobalAccredatationSlider/>,
};

export function generateMetadata() {
  return generateDynamicMetadata(AboutusData);
};
const AboutUs = () => {
  const { pageContents } = AboutusData;
  const RenderTemplate = (template, content) => {
    const TemplateComponent = templatemapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={AboutusData} />
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
}

export default AboutUs