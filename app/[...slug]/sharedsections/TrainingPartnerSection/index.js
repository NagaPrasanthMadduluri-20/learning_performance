import Container from '@/components/Container';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from 'next/image';
import Text from '@/components/Text';


const data = {
    header: "Successfully Trained Professionals From Fortune 1000 Companies",
    cardData: [
      {
        src:
          "/training-partner-logo/intel.svg",
        alt: "Intel",
        title: "Intel",
      },
      {
        src:
          "/training-partner-logo/amazon.svg",
        alt: "Amazon",
        title: "Amazon",
      },
      {
        src:
          "/training-partner-logo/verizon.svg",
        alt: "verizon",
        title: "verizon",
      },
      {
        src:
          "/training-partner-logo/qatar.svg",
        alt: "Qatar Airways",
        title: "Qatar Airways",
      },
      {
        src:
          "/training-partner-logo/airbus.svg",
        alt: "Airbus",
        title: "Airbus",
      },
      {
        src:
          "/training-partner-logo/king.svg",
        alt: "King",
        title: "King",
      },
      {
        src:
          "/training-partner-logo/bank-of-america.svg",
        alt: "Bank Of America",
        title: "Bank Of America",
      },
      {
        src:
          "/training-partner-logo/infosys.svg",
        alt: "Infosys",
        title: "Infosys",
      },
      {
        src:
          "/training-partner-logo/ibm.svg",
        alt: "IBM",
        title: "IBM",
      },
      // {
      //   src:
      //     "/training-partner-logo/mobily.svg",
      //   alt: "Mobily",
      //   title: "Mobily",
      // },
      {
        src:
          "/training-partner-logo/etisalat.svg",
        alt: "Etisalat",
        title: "Etisalat",
      },
      {
        src:
          "/training-partner-logo/ge.svg",
        alt: "General Electric - GE",
        title: "General Electric - GE",
      },
      {
        src:
          "/training-partner-logo/boeing.svg",
        alt: "Boeing",
        title: "Boeing",
      },
      {
        src:
          "/training-partner-logo/Swift.svg",
        alt: "Swift",
        title: "Swift",
      },
      {
        src:
          "/training-partner-logo/Total.svg",
        alt: "Total",
        title: "Total",
      }
    ],
  };
const TrainingPartner = () => {
  return (
    <Container className="p-3">
      <div className='p-4'>
        <Text variant='h2'>{data.header}</Text>
      <Carousel className="px-10" opts={{
          align: "start",
          loop: true,
        }}>
        <CarouselContent className="py-5 mx-auto">
          {data.cardData.map((item, index) => (
            <CarouselItem key={index} className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-0 px-4">
              <Card className="xs:w-36  sm:w-44 h-24 object-center grid place-items-center shadow-md hover:shadow-2xl dark:bg-detailcontrast" >
                 <CardContent className="p-0">
                  <Image src={item.src} alt={item.alt} width={100} height={10} loading="lazy"/>
                  </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      </div>  
    </Container>
  )
}

export default TrainingPartner