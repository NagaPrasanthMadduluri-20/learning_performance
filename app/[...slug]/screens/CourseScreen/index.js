import React from "react";
import CourseBanner from "../../sections/CourseBannerSection";
import Container from "@/components/Container";
import SkillsGain from "../../sharedsections/SkillsGainSection";
import CategoryCourseOutline from "../../sections/CategoryCourseOutlineSection";
import CourseOverview from "../../sections/CourseOverviewSection";
import RelatedCourseLinks from "../../sharedsections/RelatedCourseLinksSection";
import TrainingPartner from "../../sharedsections/TrainingPartnerSection";
import FaqsAccordian from "../../sharedsections/FaqsAccordian";
import LearningAdvantage from "../../sharedsections/LearningAdvantageSection";
import TestimonialSlider from "../../sharedsections/TestimonialSliderSection";
import CourseTrainingDeliveryOptions from "../../sections/courseTrainingDeliveryOptions";
import CorporateTrainingCard from "../../sections/CorporateTrainingCardSection";
import ExamFormat from "../../sections/ExamFormatSection";
import CourseTimeLine from "../../sections/CourseTimeLineSection";
import WhyYouShouldGet from "../../sections/WhyYouShouldGetSection";
import CourseAbout from "../../sections/CourseAboutSection";
import Image from "next/image";
import CorporateTrainingBanner from "../../sharedsections/CorporateTrainingBannerSection";
import Examsuccess from "../../sections/ExamSuccessSection";
import CourseEligible from "../../sections/CourseEligibleSection";
import GreatWorkLocation from "../../sections/GreatWorkLocationsSection";
import ApplyForExam from "../../sections/ApplyForExamSection";
import TopCompanies from "../../sections/TopCompaniesTableSection";
import OurAlumni from "../../sections/OurAlumniSection";
import Schedules from "../../sections/SchedulesSection";
import RequestEnquiryForm from "../../sections/RequestEnquiryForm";
import StickyNavigationBar from "@/app/components/StickyNavigationBar";
import NotFound from "@/app/not-found";
const firstColumnComponents = ["CategoryBanner"];
const twoColumnComponents = [
  "CourseDescription",
  "WhatWillYouLearn",
  "SkillsGain",
  "CourseBenefits",
  "WhoShouldGet",
  "WhyChooseUsNew",
  "InfographicSection",
  "HowToApplyForTheExam",
  "CourseWhoShouldAttend",
  "WhyGreatWorkLoaction",
  "CourseTraningDeliveryMode",
  "CourseMaterial",
  "CourseEligible",
  "ExamSuccess",
  "CourseBenefitsNew",
  "CourseOutline",
  "CourseExamAndCost",
  "CourseTimeLine",
];

const secondfoldtwoColumnComponents = [
  "TopCompaniesHiring",
  "TrainingLocations",
  "OurAlumi",
];

const otherColumnComponents = [
  "Schedules",
  "RelatedCourseinternalLinks",
  "FaqTab",
  "TestimonialSlider",
  "LearningAdvantage",
  "CityWiseCourse",
  "HowCanYouEngage",
  "InvlCorporateTrainingAvatar",
  "CourseAbout",
];

const templateMapping = {
  CategoryBanner: ({ content, globaldata }) => (
    <>
      <CourseBanner CourseBannerData={content} additionalData={globaldata} />
    </>
  ),
  CourseDescription: ({ content }) => (
    <>
      <CourseOverview courseOverviewData={content} />
    </>
  ),
  WhatWillYouLearn: ({ content, globaldata }) => (
    <SkillsGain WhatWillYouLearnData={content} additionalData={globaldata} />
  ),
  SkillsGain: ({ content }) => <SkillsGain SkillsGainData={content} />,
  CourseOutline: ({ content }) => (
    <CategoryCourseOutline courseOutlineData={content} />
  ),
  CourseWhoShouldAttend: ({ content }) => (
    <SkillsGain whoShouldAttendData={content} />
  ),
  CourseBenefitsNew: ({ content }) => (
    <SkillsGain CourseBenefitsNewData={content} />
  ),
  WhyGreatWorkLoaction: ({ content }) => (
    <GreatWorkLocation GreatWorkLocationData={content} />
  ),
  HowToApplyForTheExam: ({ content }) => (
    <ApplyForExam ApplyForExamData={content} />
  ),

  RelatedCourseinternalLinks: ({ content, globaldata }) => (
    <RelatedCourseLinks
      RelatedCourseLinksData={content}
      additionalData={globaldata}
    />
  ),
  TestimonialSlider: ({ content, globaldata }) => (
    <TestimonialSlider sliderData={content} additionalData={globaldata} />
  ),
  ExamSuccess: ({ content, globaldata }) => (
    <Examsuccess ExamsuccessData={content} additionalData={globaldata} />
  ),
  CourseEligible: ({ content, globaldata }) => (
    <CourseEligible CourseEligibleData={content} />
  ),
  FaqTab: ({ content, globaldata }) => (
    <FaqsAccordian faqsData={content} additionalData={globaldata} />
  ),
  LearningAdvantage: ({ content }) => (
    <LearningAdvantage advantageData={content} category={true} />
  ),

  CourseAbout: ({ content, globaldata }) => (
    <Container className="pt-12">
      <div className="flex flex-col md:grid md:grid-cols-10 gap-6 items-start">
        <div className="md:col-span-7">
          <CourseAbout CourseAboutData={content} />
        </div>
        <div className="md:col-span-3 p-2 bg-primary rounded-md mt-36">
          <Image
            src={content.contents.image_path}
            alt="image"
            width={400}
            height={500}
          />
        </div>
      </div>
    </Container>
  ),
  // CourseBenefitsNew: ({ content }) => (
  //   <CourseBenefits CourseBenefitsNewData={content} />
  // ),
  InvlCorporateTrainingAvatar: ({ content, globaldata }) => (
    <CorporateTrainingBanner
      CorporateTrainingBannerData={content}
      additionalData={globaldata}
    />
  ),
  TrainingLocations: ({ content }) => (
    <ApplyForExam TrainingLocationsData={content} />
  ),
  OurAlumi: ({ content }) => <OurAlumni OurAlumiData={content} />,
  TopCompaniesHiring: ({ content, globaldata }) => (
    <TopCompanies TopCompaniesData={content} additionalData={globaldata} />
  ),
  HowCanYouEngage: ({ content }) => (
    <Container className="py-1">
      <div className="flex flex-col md:grid md:grid-cols-10 gap-6 items-start">
        <div className="md:col-span-7">
          <ApplyForExam HowCanYouEngageData={content} />
        </div>
        <div className="md:col-span-3 sticky top-8">
          <div>
            <CorporateTrainingCard />
          </div>
        </div>
      </div>
    </Container>
  ),
  Schedules: ({ content, globaldata }) => (
    <>
      {" "}
      <Schedules additionalData={globaldata} />{" "}
      <RequestEnquiryForm additionalData={globaldata} />{" "}
    </>
  ),

  CourseTraningDeliveryMode: ({ content }) =>
    <div className="bg-lightbackground w-full">
    <div className="lg:bg-[url('https://stagingbeta.invensislearning.com/static/images/training-delivery-mode-bg.webp')] -ml-0 -mr-0  lg:-ml-[200px] lg:-mr-[400px] bg-no-repeat bg-cover py-10 bg-lightbackground"> <CourseTrainingDeliveryOptions /> </div></div>,
  CourseExamAndCost: ({ content }) => <ExamFormat CourseFormatData={content} />,
  CourseTimeLine: ({ content }) => (
    <CourseTimeLine CourseTimeLineData={content} />
  ),
  // CityWiseCourse: ({ content, globaldata }) => (<CitywiseCourseList cityLinks={content} additionalData={globaldata}/>),
  // CourseBenefits: ({ content, globalData }) => (
  //   <CustomAccordion title={content.heading} defaultExpanded={true} id="CourseBenefits">
  //     <CourseBenefitsNew contents={content} price={globalData.courseBenefitsPrice} />
  //   </CustomAccordion>
  // ),
  WhoShouldGet: ({ content, globalData }) => (
    <WhyYouShouldGet WhyYouShouldGetData={content} />
  ),
  // WhyChooseUsNew: ({ content }) => (
  //   <CustomAccordion title={content.heading} defaultExpanded={false} id="WhyChooseUsNew">
  //     <WhyChooseUsNew contents={content} />
  //   </CustomAccordion>
  // ),
  // InfographicSection: ({ content }) => (
  //   <InfographicSection content={content} />
  // ),
  // HowToApplyForTheExam: ({ content }) => (
  //   <HowToApplyForTheExam content={content} />
  // ),

  CourseMaterial: ({ content }) => <SkillsGain CourseMaterialData={content} />,
  // Add other components here...
};

const CourseScreen = ({ data }) => {
  if (!data || !data.pageContents) {
    return <NotFound />;
  }
  
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={data} />
    ) : null;
  };

  const { pageContents } = data;

  const twoColumnContent = pageContents?.filter((content) =>
    twoColumnComponents.includes(content.template)
  );
  const firstColumnContent = pageContents?.filter((content) =>
    firstColumnComponents.includes(content.template)
  );
  const otherContent = pageContents?.filter((content) =>
    otherColumnComponents.includes(content.template)
  );
  const secondfoldtwoColumnContents = pageContents?.filter((content) =>
    secondfoldtwoColumnComponents.includes(content.template)
  );
  return (
    <>
      {firstColumnContent.map((content, index) => (
        <div key={index}>{renderTemplate(content.template, content)}</div>
      ))}
      <div>
        <div
          className="sticky top-0 z-40 backdrop-blur-sm dark:bg-black/30"
          id="stickynavscroll"
        >
          <StickyNavigationBar isCourse={true} />
        </div>
        <div className="relative">
        {/* <div className="absolute top-[303rem] w-full h-[400px]">
            <Image
              src="https://stagingbeta.invensislearning.com/static/images/training-delivery-mode-bg.webp"
              alt="background-delivery"
              width={1000}
              height={400}
              className=""
            />
          </div> */}
          <Container className="py-0">
            <div className="lg:grid lg:grid-cols-10 lg:gap-x-5 lg:items-start xs:flex xs:flex-col xs:items-center">
              <div className="col-span-7 relative">
                {twoColumnContent.map((content, index) => (
                  <div key={index} className="">
                    {renderTemplate(content.template, content)}
                  </div>
                ))}
              </div>

              <div className="col-span-3 sticky top-8">
                <div>
                  <CorporateTrainingCard />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Separate section for CourseTrainingDeliveryOptions with full-width background */}
        {/* <div className="relative w-full">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://stagingbeta.invensislearning.com/static/images/training-delivery-mode-bg.webp"
              alt="background-delivery"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Container>
              <div className="lg:grid lg:grid-cols-10 lg:gap-x-5 lg:items-start xs:flex xs:flex-col xs:items-center">
                <div className="col-span-7 ">
                  <CourseTrainingDeliveryOptions />
                </div>
              </div>
            </Container>
          </div>
        </div> */}

        {secondfoldtwoColumnContents &&
          secondfoldtwoColumnContents.length > 1 && (
            <Container className="py-0 ">
              <div className="lg:grid lg:grid-cols-10 lg:gap-x-5 lg:items-start xs:flex xs:flex-col xs:items-center">
                <div className="col-span-7">
                  {secondfoldtwoColumnContents.map((content, index) => (
                    <div key={index}>
                      {renderTemplate(content.template, content)}
                    </div>
                  ))}
                </div>
                <div className="col-span-3 sticky top-8">
                  <div>
                    <CorporateTrainingCard />
                  </div>
                </div>
              </div>
            </Container>
          )}
        {otherContent.map((content, index) => (
          <div key={index}>{renderTemplate(content.template, content)}</div>
        ))}
      </div>
    </>
  );
};

export default CourseScreen;
