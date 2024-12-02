"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import StarRating from "@/app/components/StarRating";

const TestimonialSlider = ({ sliderData, additionalData }) => {
  const { TestimonialSlider } = additionalData;
  const testimonialdata = TestimonialSlider;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  const plugin = React.useRef(
    Autoplay({
      delay: 9000,
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
      // Trigger animation
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100);
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    // Initial animation
    setAnimate(true);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Function to duplicate slides if count is less than 3
  const getSlides = () => {
    if (testimonialdata.length < 3) {
      // Duplicate the slides to ensure we have at least 3 items
      return [...testimonialdata, ...testimonialdata, ...testimonialdata];
    }
    return testimonialdata;
  };
  const slides = getSlides();
  return (
   
    <div className="bg-primary text-primary-foreground dark:text-darkheadings" id="testimonial" >
       {testimonialdata && testimonialdata.length > 0 ? <>
      <Container className="pb-20">
        <Text variant="h2" className="mb-2 !text-[33px]">
          Recommended by our Participants Globally
        </Text>
        <Text className="mb-10 text-[17px] dark:text-foreground">
          Checkout what they have to say about their experience with Invensis
          Learning
        </Text>
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            dragFree: testimonialdata.length < 3,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className={`lg:-ml-36 `}>
            {slides.map((testimonial, index) => (
              <CarouselItem key={index} className={`lg:pl-12 lg:basis-[80%]`}>
                <Card className="sm:p-6 w-full h-full p-2">
                  <CardHeader>
                    <CardTitle className="mb-8 flex items-start gap-x-3">
                      <Image
                        src="/double-code.png"
                        alt="quote"
                        width={20}
                        height={20}
                      />

                      <Text
                        variant="b"
                        className={`max-w-3xl leading-8 md:leading-10 opacity-90 transition-opacity duration-500 ${
                          animate ? "animate-[fadeIn_0.5s_ease-in-out]" : ""
                        }`}
                      >
                        {" "}
                        {testimonial.message}{" "}
                      </Text>
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="flex justify-between items-center -ml-6 ">
                    <div
                      className={`flex gap-x-4 items-center transition-all duration-500 ${
                        animate ? "animate-[slideIn_1.0s_ease-in-out]" : ""
                      }`}
                    >
                      <Avatar>
                        <AvatarImage src={testimonial.image_path} />
                        <AvatarFallback>
                          <Image
                            src="https://stagingbeta.invensislearning.com/static/images/testmonial-default-icon.svg"
                            alt="client-image"
                            width={50}
                            height={50}
                          />
                        </AvatarFallback>
                      </Avatar>
                      <Text variant="b" className="text-[24px]">
                        {" "}
                        {testimonial.name}{" "}
                      </Text>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent xs:left-[30%] xs:top-[110%] sm:left-[45%] sm:top-[110%] lg:left-[91%] lg:top-[-20%] rounded-none" />
          <CarouselNext className="bg-transparent xs:right-[30%] xs:top-[110%] sm:right-[45%] sm:top-[110%] lg:right-[3%] lg:top-[-20%] rounded-none" />
        </Carousel>
      </Container>
      </> : null}
    </div>
    
  );
};

export default TestimonialSlider;
