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


const contents = {
    heading: "Trusted by Global Governing Bodies",
    globalaccreditationssliders: [
      {
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/pmi-logo-slider.svg",
        title: "PMI - Project Management Institute",
      },
      {
        image_path:
          "https://alpha.invensislearning.com/storage/images/accreditations/prince2-ato.svg",
        title: "Prince2",
      },
      {
        image_path:
          "https://alpha.invensislearning.com/storage/images/accreditations/itil-ato.svg",
        title: "ITIL",
      },
      // {
      // image_path: "https://alpha.invensislearning.com/storage/images/accreditations/axelos-ato.svg",
      // title: "Axelos"
      // },
      {
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/devops-foundation-logo-new.svg",
        title: "Devops",
      },
      {
        image_path:
          "https://alpha.invensislearning.com/storage/images/accreditations/ec-ato.svg",
        title: "EC",
      },
      {
        image_path:
          "https://alpha.invensislearning.com/storage/images/accreditations/exin-ato.svg",
        title: "EXIN",
      },
      {
        image_path:
          "https://alpha.invensislearning.com/storage/images/accreditations/Iassc-logo2.svg",
        title: "ISSAC",
      },
    ],
  };
  const GlobalAccredatationSlider = () => {
  return (
    <div className="bg-[url('/global-accreditations-bg.png')] dark:bg-none dark:bg-lightbackground py-12">
    <Container className="p-3">
      <div className='p-4'>
      <Text variant='h2' className="text-center mb-5">{contents.heading}</Text>
      <Carousel className="px-10" 
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 4,
                
              }} >
        <CarouselContent className="py-5 mx-auto">
         
          {contents.globalaccreditationssliders.map((item, index) => (
            <CarouselItem key={index} className="xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 pl-0 px-4">
              <Card className="w-full h-auto object-center grid place-items-center shadow-md hover:shadow-2xl p-0 dark:bg-detailcontrast" >
                 <CardContent className="p-0">
                    <div className='p-3 flex items-center justify-center'>
                  <Image src={item.image_path} alt={item.title} width={100} height={50} className='w-full h-20'/>
                  </div>
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
    </div>
  )
}

export default GlobalAccredatationSlider;