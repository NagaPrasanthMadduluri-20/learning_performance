import React from "react";

import SearchBox from "@/app/components/CoursesPageComponents/SearchBox/Index";
import InvlTrainingAvatar from "../../sharedsections/InvlTrainingAvatarSection";
import HomepageAbout from "../../sections/HomepageAbout";
import StaticCounters from "@/app/components/StaticPageComponents/StaticCounters";
import RequestEnquiryForm from "../../sections/RequestEnquiryForm";
import CorporateUpskillSliderSection from "../../sharedsections/CorporateUpskillSliderSection";
import TestimonialSlider from "../../sharedsections/TestimonialSliderSection";
import LearningAdvantage from "../../sharedsections/LearningAdvantageSection";


const templateMapping = {
  CertificationTrainingCourse: ({ content, globaldata }) => (
    <SearchBox additionalData={globaldata} />
  ),
  InvlCorporateTrainingAvatar: ({ content, globaldata }) => (
    <InvlTrainingAvatar />
  ),
  AboutInvensisLearning: ({ content, globaldata }) => (
    <HomepageAbout
      AboutInvensisLearningData={content}
      additionalData={globaldata}
    />
  ),
  Counters: ({ content, globaldata }) => (
    <StaticCounters StaticCounterData={content} />
  ),
  EnquiryFormTab: ({ content, globaldata }) => <RequestEnquiryForm />,
  EnterpriseGlobally: ({ content, globaldata }) => (
    <CorporateUpskillSliderSection CorporateUpskillSliderData={content} />
  ),
  TestimonialSlider: ({ content, globaldata }) => (
    <TestimonialSlider additionalData={globaldata} />
  ),
  LearningAdvantage: ({ content, globaldata }) => <LearningAdvantage />,
  };

export default async function CoursesScreen ({data}) {
  
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
