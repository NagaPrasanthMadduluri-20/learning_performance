"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const CategoryTrends = ({ trendsData }) => {
  const { contents } = trendsData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState(null);

  //   const carouselRef = React.useRef(null);
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // This effect updates the currentSlide when the carousel changes
  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);
  const gradients = [
    "linear-gradient(139.9deg, #3F51B5 27.23%, #04BDDD 97.66%)",
    "linear-gradient(139.9deg, #223645 27.23%, #597CF6 97.66%)",
    "linear-gradient(139.9deg, #5118A7 27.23%, #597CF6 97.66%)",
    "linear-gradient(139.9deg, #223645 27.23%, #5118A7 97.66%)",
    // Define more gradients here as needed
  ];
const Description = contents?.description;
  return (
    <div id= 'category-trends'>
   <Container>
      <div className="sm:grid sm:grid-cols-10 sm:gap-x-7 items-center space-y-3">
        <div className="sm:col-span-6">
          <Text variant="h2" className="mb-3">
            {contents.heading}
          </Text>
          <Text variant="b" className="mb-3">
            {" "}
            {contents.sub_heading}
          </Text>
        
          <div
              className="info-description"
              dangerouslySetInnerHTML={{ __html: Description }}
            />
        
        </div>
        <div className="sm:col-span-4">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            // onSlideChange={(index) => setCurrentSlide(index)}
          >
            <CarouselContent className="-ml-4">
              {contents.industrytrends.map((trend, index) => {
                const randomGradient = gradients[index % gradients.length];

                return (
                  <CarouselItem key={index} className="pl-4">
                    <Card
                      className={`py-3 px-5 w-[100%] h-[100%] text-primary-foreground dark:bg-gradient-to-tl from-gray-800 to-black`}
                      style={{
                        background: randomGradient,
                        backgroundSize: "cover",
                        //backgroundBlendMode: "overlay",
                      }}
                    >
                      <CardHeader>
                        <CardTitle className="text-darkheadings text-[40px] font-bold">
                          {trend.trend_heading}
                        </CardTitle>
                        <CardDescription className="text-primary-foreground mt-4">
                          {trend.trend_description}
                        </CardDescription>
                        <CardContent></CardContent>
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center text-[12px] mt-auto">
                        {trend.source}
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
          <DotNavigation
            slides={contents.industrytrends}
            currentSlide={currentSlide}
            onDotClick={(index) => {
              api?.scrollTo(index);
            }}
          />
        </div>
      </div>
    </Container>
    </div> 
  );
};

const DotNavigation = ({ slides, currentSlide, onDotClick }) => (
  <div className="flex justify-center mt-4">
    {slides.map((_, index) => (
      <button
        key={index}
        className={`w-10 h-1 mx-1 rounded-full ${
          currentSlide === index ? "bg-secondary" : "bg-gray-300"
        }`}
        onClick={() => onDotClick(index)}
        aria-label="Dot-navigation-buttons"
      />
    ))}
  </div>
);

export default CategoryTrends;
