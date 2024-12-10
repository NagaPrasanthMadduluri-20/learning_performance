import React from "react";
import Container from "../../components/Container";
import Text from "@/components/Text";
import { getTestimonials } from "@/services";
import TestimonialBanner from "../components/TestimonialBanner";
import TestimonialTabs from "../components/TestimonialTabs";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

const templateMapping = {
  TestimonialBanner:({ content, globaldata }) =>  <TestimonialBanner Testimonialdata={content} additionalData={globaldata}/>,
  TestiMonialTabs: ({ content, globaldata }) => <TestimonialTabs TestimonialTabdata={content} additionalData={globaldata}/>
};

export async function generateMetadata() {
  // Testimonials Page
  const { TestimonialData: getTestimonialData } = await getTestimonials();
  const slug = getTestimonialData.page_slug;

  return generateDynamicMetadata(getTestimonialData, null, slug);
};

const Testimonials = async () => {
  let getTestimonialData, error;
  ({ TestimonialData: getTestimonialData, error } = await getTestimonials());

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getTestimonialData;

  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent content={content} globaldata={getTestimonialData} />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getTestimonialData && getTestimonialData.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No webinar data available</div>
      )}
    </div>
  );
};

export default Testimonials;
