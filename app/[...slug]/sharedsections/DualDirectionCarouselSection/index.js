import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import React from "react";

const DualDirectionCarouselSection = ({ordersummary}) => {
  const content = {
    enterprise_Primary_title: "Upskilling Professionals <br/> of Leading",
    enterprise_Secondary_title: "Organizations Worldwide",
    enterprisegloballies: [
      {
        name: "Intel",
        title: "Intel",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/intel.svg",
      },
      {
        name: "UN",
        title: "UN",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/united-nation.svg",
      },
      {
        name: "IBM",
        title: "IBM",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/ibm.svg",
      },
      {
        name: "Verizon",
        title: "Verizon",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/verizon.svg",
      },
      {
        name: "Airbus",
        title: "Airbus",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/airbus.svg",
      },
      {
        name: "Bank of America",
        title: "Bank of America",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/bank-of-america.svg",
      },
      {
        name: "Ge",
        title: "Ge",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/ge.svg",
      },
      {
        name: "Amazon",
        title: "Amazon",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/amazon.svg",
      },
      {
        name: "novo nordisk",
        title: "novo nordisk",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/novo-nordisk.svg",
      },
      {
        name: "Swift",
        title: "Swift",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/Swift.svg",
      },
      {
        name: "Qatar airways",
        title: "Qatar airways",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/qatar.svg",
      },
      {
        name: "Total",
        title: "Total",
        image_path:
          "https://alpha.invensislearning.com/storage/images/logos/clients/Total.svg",
      },
    ],
  };

  const RTL_SCROLL_SPEED = -0.5;
  const LTR_SCROLL_SPEED = 0.5;

  const rtlAutoScrollPlugin = AutoScroll({
    speed: RTL_SCROLL_SPEED,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });
  const ltrAutoScrollPlugin = AutoScroll({
    speed: LTR_SCROLL_SPEED,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const carouselItems = [
    ...content.enterprisegloballies,
    ...content.enterprisegloballies,
  ].map((Acc, index) => (
    <CarouselItem
      key={index}
      className={`xs:basis-[5%] sm:basis-[5%] md:basis-[30%] ${ordersummary ? "xs:basis-[40%] sm:basis-[30%] md:basis-[40%] lg:basis-[35%]" : "lg:basis-1/4"} pl-0 px-0 shadow-lg `}
    >
      {/* <Image src={Acc.image_path} alt={Acc.title} width={80} height={50} className='grayscale hover:grayscale-0'/> */}
      <Card className="xs:w-36  sm:w-32 h-16 object-center grid place-items-center">
        <CardContent className="p-0">
          <Image
            src={Acc.image_path}
            alt={Acc.title}
            width={100}
            height={20}
            className="w-16 h-12"
            loading="lazy"
          />
        </CardContent>
      </Card>
    </CarouselItem>
  ));
  return (
    <>
      <div>
        <div className={`relative overflow-hidden ${ordersummary ? "mt-0" : "mt-10"}`}>
          {!ordersummary  && 
          <>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
          </>
}
          {!ordersummary &&
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            plugins={[rtlAutoScrollPlugin]}
            className="w-full mb-8"
          >
            <CarouselContent className="flex items-center">
              {carouselItems}
            </CarouselContent>
          </Carousel>
          }
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            plugins={[ltrAutoScrollPlugin]}
            className="w-full mb-8"
          >
            <CarouselContent className="flex items-center">
              {carouselItems}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default DualDirectionCarouselSection;
