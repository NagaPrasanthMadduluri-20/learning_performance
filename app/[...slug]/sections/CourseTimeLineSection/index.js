import Container from '@/components/Container'
import Text from '@/components/Text';
import Image from 'next/image';
import React from 'react'

const CourseTimeLine = ({CourseTimeLineData}) => {
    const {contents} = CourseTimeLineData;
  return (
    <Container className="pt-5 pb-0">
       <Text variant='h2'>{contents.heading}</Text>
       <Text className="mb-5">{contents.sub_heading} </Text>

      <div >
        <Image src={contents.image_path} alt='90day Roadmap Sucesss' width={900} height={500} className='dark:bg-slate-300' />
      </div>
    </Container>

  )
}

export default CourseTimeLine