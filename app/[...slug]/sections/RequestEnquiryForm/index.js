import EnquiryForm from "@/app/components/EnquiryForm";
import Container from "@/components/Container";
import React from "react";

const RequestEnquiryForm = ({additionalData, CorporateTraining}) => {
  return (
    <Container className="px-3 py-0" id="inquire-now">
      <div className="bg-lightbackground px-4 md:px-28 py-4 md:py-16">
        <EnquiryForm defaultcoursename={additionalData} CorporateTraining={CorporateTraining}/>
      </div>
    </Container>
  );
};

export default RequestEnquiryForm;
