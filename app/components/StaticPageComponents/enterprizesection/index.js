import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";

const EnterprizeSection = ({ enterprizeData }) => {
  const { contents } = enterprizeData;
  return (
    <Container className="pb-0">
      <Text variant="h3" className="mb-4"> {contents.Heading}</Text>
      <Text>{contents.SectionParagraphOne}</Text>
      <Text>{contents?.SectionParagraphTwo}</Text>
    </Container>
  );
};

export default EnterprizeSection;
