import Text from '@/components/Text';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'

const CourseAbout = ({CourseAboutData}) => {
    const { contents } = CourseAboutData;
  return (
    <>            <Text variant='h2'>{contents?.heading}</Text>
            <Text className="my-3 mb-8">{contents?.description}</Text>

         <Accordion
          type="single"
          collapsible
          className="border border-1 rounded-sm"
          defaultValue="course-0"
        >
          {contents?.courseabouts.map((item, index) => (
            <AccordionItem
              value={`course-${index}`}
              key={`course-${index}`}
              className="border-b-2"
            >
              <AccordionTrigger className="data-[state=open]:bg-background xs:text-left">
                <Text variant="body1" className="font-semibold px-3">
                  {item.FaqQuestion}
                </Text>
              </AccordionTrigger>
              <AccordionContent className="">
                <Text variant="body1" className="px-3 pt-1">
                  {item.FaqAns}
                </Text>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </>

  )
}

export default CourseAbout