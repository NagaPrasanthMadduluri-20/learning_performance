import Container from '@/components/Container';
import Text from '@/components/Text';
import React from 'react'

const UpskillDetaillist = ({UpskillDetaillistData, additionalData}) => {
    const { contents } = UpskillDetaillistData;
  return (
    <Container>
        <Text variant='h2' className="mb-5 text-primary dark:text-primary-foreground font-semibold !text-[30px]">{additionalData.page_name}</Text>
        <Text >{contents.UpskillDescription}</Text>
    </Container>
  )
}

export default UpskillDetaillist