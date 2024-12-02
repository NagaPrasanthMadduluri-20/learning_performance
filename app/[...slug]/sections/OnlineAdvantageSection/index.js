import Container from '@/components/Container';
import Text from '@/components/Text';
import React from 'react'

const OnlineAdvantage = ({ OnlineAdvantageData }) => {
    const { contents } = OnlineAdvantageData;
  return (
    <Container className="py-3">
        <Text variant="h2">{contents.heading}</Text>
        <Text>{contents.description}</Text>
    </Container>
  )
}

export default OnlineAdvantage;