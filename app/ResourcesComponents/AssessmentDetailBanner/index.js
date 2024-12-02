import BreadCrumb from '@/app/components/BreadCrumb/BreadCrumb';
import Container from '@/components/Container'
import Text from '@/components/Text';
import React from 'react'

const AssessmentDetail = ({AssessmentDetailData, additionalData}) => {
    const { contents } = AssessmentDetailData;
  return (
    <>
    <Container className="p-0">
    <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
  </Container>
    <Container>
        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <div>
                 <Text variant='h2' className="text-primary dark:text-primary-foreground mb-5">{contents.title}</Text>
                 <Text className="leading-6"> {contents.short_description}</Text>
            </div>
            <div>
                <div className='md:ml-48 mt-5 md:mt-0 shadow-md border-2'>
                    <Text className="bg-primary text-primary-foreground font-semibold p-2 text-[20px]">Assessment Info </Text>
                    <Text className="text-[18px] mb-2 mt-2 pl-2">Assessment Code  <span className='text-blue-800 ml-10 '>: {contents.assessment_code}</span> </Text>
                    <Text className="text-[18px] mb-2 pl-2">Language <span className='text-blue-800 ml-28'>: {contents.language}</span></Text>
                    <Text className="text-[18px] mb-2 pl-2">Questions <span className='text-blue-800 ml-28'>: {contents.question_number}</span></Text>
                    <Text className="text-[18px] mb-2 pl-2">Duration <span className='text-blue-800 ml-32'>: {contents.duration}</span></Text>
                    <Text className="text-[18px] mb-2 pl-2">Level <span className='text-blue-800 ml-40'>: {contents.level}</span></Text>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default AssessmentDetail