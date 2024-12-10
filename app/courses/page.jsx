import React from "react";
import SearchBox from "../components/CoursesPageComponents/SearchBox/Index";
import { getCourses } from "@/services";
import InvlTrainingAvatar from "../[...slug]/sharedsections/InvlTrainingAvatarSection";
import LearningAdvantage from "../[...slug]/sharedsections/LearningAdvantageSection";
import HomepageAbout from "../[...slug]/sections/HomepageAbout";
import StaticCounters from "../components/StaticPageComponents/StaticCounters";
import RequestEnquiryForm from "../[...slug]/sections/RequestEnquiryForm";
import CorporateUpskillSliderSection from "../[...slug]/sharedsections/CorporateUpskillSliderSection";
import TestimonialSlider from "../[...slug]/sharedsections/TestimonialSliderSection";
import { categoriesData } from "@/data/categories";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

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

export async function generateStaticParams() {
  const params = [{ lang: null }];
  categoriesData?.countries.forEach((country) => {
    params.push({ lang: country });
  });
  return params;
}

function parsePathParams(params) {
  const lang = params.lang || null;
  return { lang };
}

export async function generateMetadata({ params }) {
  const { lang } = params;
  const slug = 'courses';
  const { AllCoursesData: getAllCoursesData } = await getCourses(lang);

  return generateDynamicMetadata(getAllCoursesData, lang, slug);
}

export default async function Page({ params }) {
  const { lang } = parsePathParams(params);

  let getAllCoursesData, error;
  ({ AllCoursesData: getAllCoursesData, error } = await getCourses(lang));
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { pageContents } = getAllCoursesData;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getAllCoursesData} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return <div>{renderContent(pageContents)}</div>;
}
