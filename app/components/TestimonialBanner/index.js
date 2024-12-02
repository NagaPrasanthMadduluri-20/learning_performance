import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const TestimonialBanner = ({ Testimonialdata, additionalData }) => {
  return (
    <Container className="py-0">
      <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
    </Container>
  );
};

export default TestimonialBanner;
