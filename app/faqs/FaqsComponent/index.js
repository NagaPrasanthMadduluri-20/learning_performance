import React from "react";
import Container from "@/components/Container";
import Text from "@/components/Text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";

// FAQ Item Component
const FaqItem = ({ question, answer, index }) => (
  <AccordionItem value={`question-${index}`} className="border-b-2">
    <AccordionTrigger className="data-[state=open]:bg-background xs:text-left">
      <Text className="font-semibold px-3">{question}</Text>
    </AccordionTrigger>
    <AccordionContent>
      <Text className="px-3 pt-1">{answer}</Text>
    </AccordionContent>
  </AccordionItem>
);

// FAQ Section Component
const FaqSection = ({ faqs }) => (
  <Accordion
    type="single"
    collapsible
    className="border border-1 rounded-sm mt-16"
    defaultValue="question-0"
  >
    {faqs.map((item, index) => (
      <FaqItem
        key={`question-${index}`}
        question={item.FaqQuestion}
        answer={item.FaqAns}
        index={index}
      />
    ))}
  </Accordion>
);

// Main FAQ Component
const FaqsComponent = ({ additionalData }) => {
  const faqData = additionalData?.FaqPageTabs?.faqs || {
    general_faqs: [],
    course_faqs: [],
    payment_faq: [],
  };

  const tabsConfig = [
    {
      value: "general",
      label: "General FAQs",
      data: faqData.general_faqs,
      image_path:
        "https://stagingbeta.invensislearning.com/static/images/faqs/conversation.svg",
    },
    {
      value: "course",
      label: "Course Releated FAQs",
      data: faqData.course_faqs,
      image_path:
        "https://stagingbeta.invensislearning.com/static/images/faqs/interview.svg",
    },
    {
      value: "payment",
      label: "Payment FAQs",
      data: faqData.payment_faq,
      image_path:
        "https://stagingbeta.invensislearning.com/static/images/faqs/hand.svg",
    },
  ];

  return (
    <>
      <div className="bg-[url('https://stagingbeta.invensislearning.com/static/images/FAQs.svg')] bg-cover bg-no-repeat">
        <Container>
          <Text className="text-[26px] font-bold text-primary dark:text-primary-foreground py-11 text-center">
            How Can We Help You?
          </Text>
        </Container>
      </div>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData?.breadcrumb} />
      </Container>

      <Container>
        <Tabs defaultValue="general">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 justify-between items-center bg-transparent h-auto">
            {tabsConfig.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                <div className="bg-gray-200 px-2 py-2 md:px-20 md:py-5 h-44 w-56 md:h-48 md:w-full text-center shadow-md hover:shadow-lg">
                  <div className="flex justify-center">
                    {" "}
                    <Image
                      src={tab.image_path}
                      alt={tab.label}
                      width={100}
                      height={70}
                    />
                  </div>
                  <Text className="text-[18px] font-semibold mt-3 text-wrap">
                    {tab.label}
                  </Text>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsConfig.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <FaqSection faqs={tab.data} />
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </>
  );
};

export default FaqsComponent;
