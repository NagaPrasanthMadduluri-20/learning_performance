import Container from '@/components/Container';
import Text from '@/components/Text';
import Image from 'next/image';
import React from 'react'

const GreatWorkLocation = ({GreatWorkLocationData}) => {
    const { contents } = GreatWorkLocationData;
    const colors = [
        "#e7f7d2",
        "#fef6e3",
        "#e4f8fe",
        "#fceae2",
        // Define more gradients here as needed
      ];
      const imageMap = {
        0: "/infographicSection-Salary.svg",
        1: "/infographicSection-JobGrowth.svg",
        2: "/infographicSection-Job-Listings.svg",
        3: "/infographicSection-Top-Industries-Hiring.svg"
      };
  return (
    <Container className="py-4">
        <Text variant='h2'>{contents.heading}</Text>
        <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4 mt-5">
        
        {contents.whygreatworkloactions.map((InvlAdvantages, index) => {
            const randomColors = colors[index % colors.length];
            const imagesrc = imageMap[index];
            return (
          <div
            key={index}
            className="flex flex-col p-8 rounded-sm"
            style={{
                background: randomColors,
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
              }}
          >
            <div className="flex items-center gap-x-4">
              <Image
                src={imagesrc}
                alt="infographicSection Images"
                width="70"
                height="70"
              />
            

            <Text variant="b" className="text-left">
              {InvlAdvantages.box_heading}
            </Text>
            </div>
            <Text className="text-left mt-5">
              {InvlAdvantages.subHeaing}
            </Text>
          </div>
            )
})}
      </div>
    </Container>
  )
}

export default GreatWorkLocation