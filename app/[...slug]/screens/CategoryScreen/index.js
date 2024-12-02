import React from "react";
import CategoryBannerNew from "../../sections/CategoryBannerNewSection";
import CategoryCourseOutline from "../../sections/CategoryCourseOutlineSection";
import TestimonialSlider from "../../sharedsections/TestimonialSliderSection";
import FaqsAccordian from "../../sharedsections/FaqsAccordian";
import CategoryTrends from "../../sections/CategoryTrendsSection";
import LearningAdvantage from "../../sharedsections/LearningAdvantageSection";
import ExploreOtherCategories from "../../sections/CategoryExploreCategoriesSection";
import SkillsGain from "../../sharedsections/SkillsGainSection";
//import CategoryGoverningBodies from "../../sections/CategoryGoverningBodiesSection";
import TrainingPartner from "../../sharedsections/TrainingPartnerSection";
import OnlineAdvantage from "../../sections/OnlineAdvantageSection";
import CategorySuccessStories from "../../sections/CategorySuccessStoriesSection";
import TrainingDeliveryOptions from "../../sections/TrainingDeliveryOptionsSection";
import CategoryJobRoles from "../../sections/CategoryJobRolesSection";
import Image from "next/image";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { MoveRight } from "lucide-react";
import CategoryCostTable from "../../sections/CategoryCostTableSection";
import PrerequisitesTable from "../../sections/PrerequisitesTableSection";
import CategoryCourseListTab from "../../sections/CategoryCourseListTabSection";
import StickyNavigationBar from "@/app/components/StickyNavigationBar";
import RequestEnquiryForm from "../../sections/RequestEnquiryForm";
import ScrollButton from "@/app/components/ScrollButton";
import CategoryGoverningBodies from "../../sections/CategoryGoverningBodiesSection";

const templateMapping = {
  CategoryBanner: ({ content, globaldata }) => (
    <>
      {" "}
      <CategoryBannerNew BannerData={content} additionalData={globaldata} />
    </>
  ),
  CategoryCourseLevel: ({ content, globaldata }) => (
    <>
      {" "}
      <CategoryCourseListTab
        CategoryCourseListTabData={content}
        additionalData={globaldata}
      />{" "}
    </>
  ),
  ExploreOtherCategories: ({ content, globaldata }) => (
    <ExploreOtherCategories exploreData={content} additionalData={globaldata} />
  ),
  CategoryGoverningBodies: ({ content, globaldata }) => (
    <>
      <CategoryGoverningBodies
        CategoryGoverningBodiesData={content}
        additionalData={globaldata}
      />
     </>
  ),
  CategoryStrengthen: ({ content }) => (
    <CategoryJobRoles strengthenData={content} />
  ),
  IndustryTrends: ({ content }) => <CategoryTrends trendsData={content} />,
  CourseOutline: ({ content }) => (
    <>
      <CategoryCourseOutline courseOutlineData={content} />
    </>
  ),
  SkillsGain: ({ content }) => <SkillsGain SkillsGainData={content} />,
  EnquiryFormTab: ({ content }) => <RequestEnquiryForm />,
  KnowAboutOurTrainers: ({ content }) => (
    <Container className="pt-3">
      <div className="flex flex-col md:grid md:grid-cols-10 gap-6 items-start">
        <div className="md:col-span-7">
          <CategoryJobRoles KnowAboutOurTrainersData={content} />

          <Text className="font-semibold ">
            Elevate your Skills With our Top Trainers!{" "}
            <ScrollButton
              variant="secondary"
              className="ml-3 rounded-none font-semibold"
              targetId="inquireform"
            >
              Enquire Now
              <MoveRight className="ml-3" />
            </ScrollButton>
          </Text>
        </div>
        <div className="md:col-span-3">
          <Image
            src="/cat-trainers-bg.png"
            alt="image"
            width={400}
            height={500}
            className="mt-14"
          />
        </div>
      </div>
    </Container>
  ),
  OnlineAdvantage: ({ content }) => (
    <OnlineAdvantage OnlineAdvantageData={content} />
  ),
  CategorySuccessStories: ({ content, globaldata }) => (
    <CategorySuccessStories
      CategorySuccessStoriesData={content}
      additionalData={globaldata}
    />
  ),
  CategoryKnowAbout: ({ content }) => (
    <CategoryJobRoles CategoryKnowAboutData={content} />
  ),

  CategoryJobRoles: ({ content }) => (
    <CategoryJobRoles CategoryJobRolesData={content} />
  ),
  CategoryCostDescriptionTable: ({ content }) => (
    <CategoryCostTable CategoryCostTableData={content} />
  ),
  CategoryPrerequisites: ({ content, globaldata }) => (
    <PrerequisitesTable PrerequisitesTableData={content} />
  ),
  CourseWhoShouldAttend: ({ content }) => (
    <>
      <SkillsGain whoShouldAttendData={content} />
    </>
  ),
  TestimonialSlider: ({ content, globaldata }) => (
    <TestimonialSlider sliderData={content} additionalData={globaldata} />
  ),
  FaqTab: ({ content, globaldata }) => (
    <FaqsAccordian
      faqsData={content}
      additionalData={globaldata}
      category={true}
    />
  ),
  LearningAdvantage: ({ content }) => (
    <LearningAdvantage advantageData={content} category={true} />
  ),
  ModeofTraining: () => (
    <>
      <TrainingPartner />
      <TrainingDeliveryOptions />
    </>
  ),
};

const CategoryScreen = ({ data }) => {
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <>
        <TemplateComponent content={content} globaldata={data} />
      </>
    ) : null;
  };

  const { pageContents, pageSeos } = data;
  const renderContent = (contentArray) => {
    let hasBannerRendered = false;

    return contentArray.map((content, index) => {
      if (!hasBannerRendered && content.template === "CategoryCourseLevel") {
        hasBannerRendered = true;
        return (
          <React.Fragment key={index}>
            <div
              className="sticky top-0 z-30 backdrop-blur-sm bg-white/30 dark:bg-black/30"
              id="stickynavscroll"
            >
              <StickyNavigationBar isCourse={false} />
            </div>

            {renderTemplate(content.template, content)}
          </React.Fragment>
        );
      }

      return (
        <div key={index} className="">
          {renderTemplate(content.template, content)}
        </div>
      );
    });
  };

  return <div>{renderContent(pageContents)}</div>;
};

export default CategoryScreen;
