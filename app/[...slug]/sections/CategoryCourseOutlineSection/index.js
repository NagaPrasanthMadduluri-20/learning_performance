
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Text from "@/components/Text";
import Container from "@/components/Container";

const CategoryCourseOutline = ({courseOutlineData}) => {
   const { contents } = courseOutlineData;
  return (
    <div id= 'syllabus'>
      <Container className="py-0">
        <div className="mb-10">
          <Text variant="h2" className="!font-bold !text-[24px] mb-8">
            {contents.heading}
          </Text>
          <Accordion
            type="single"
            collapsible
            className=""
            defaultValue="item-0"
          >
            {contents.courseoutlines.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-1"
              >
                <AccordionTrigger className="mb-3 xs:text-left">
                  <Text variant="body1" className="font-semibold px-3">
                    {" "}
                    {item.list_heading}{" "}
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text variant="body1" className="px-3 pt-1">
                    {" "}
                    {item.lists_text}{" "}
                  </Text>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default CategoryCourseOutline;
