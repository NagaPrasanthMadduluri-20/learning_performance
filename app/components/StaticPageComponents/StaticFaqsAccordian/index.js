import Container from "@/components/Container";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Text from "@/components/Text";

const StaticFaqsAccordian = ({ StaticFaqsData }) => {
  const { contents } = StaticFaqsData;
  return (
    <Container>
    <Text variant="h2" className="text-primary text-center">Frequently Asked Questions</Text>
    <Text className="text-center my-5 mb-10">Below are the answers to some of the most frequently asked questions by instructors/trainers while joining Invensis Learning.</Text>

      <Accordion
        type="single"
        collapsible
        className="border border-1 rounded-sm"
        defaultValue="question-0"
      >
        {contents.map((content, index) => (
          <AccordionItem value={`question-${index}`} key={`question-${index}`}  className="border-b-2">
            <AccordionTrigger className="data-[state=open]:bg-background xs:text-left"> 
              <Text className="font-semibold px-3">{content.question} </Text></AccordionTrigger>
            <AccordionContent><Text className="px-3 pt-1">{content.answer}</Text></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default StaticFaqsAccordian;
