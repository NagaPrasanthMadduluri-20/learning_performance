"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CircleUser, Quote, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import StarRating from "../../StarRating";
import OrderSummaryAutoSlider from "../OrderSummaryAutoSlider";

const OrderSummarySlider = () => {
  const TextTestimonialsCard = [
    {
      name: "M Hadi Aldowais",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path:
        "https://alpha.invensislearning.com/storage/images/testimonials/Hadi-aldowais.jpg",
      message:
        "The ITIL Foundation training was a great experience. The trainer was excellent and had good command over the subject matter. Hope to get another training in the future from Invensis Learning.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
    {
      name: "Joel G",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path:
        "https://alpha.invensislearning.com/storage/images/testimonials/joel-getz-testimonial.jpg",
      message:
        "The PMP training was good, even better was the instructor who helped in creating an easy learning environment. The trainer was knowledgeable and his ability to adapt and teach the PMBOK was excellent.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
    {
      name: "Jane Doe",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path: "",
      message:
        "PRINCE2 Agile certification training expanded my project management skills. The well-structured content covered various agile concepts, allowing for practical application in our agile projects.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
    {
      name: "Alex K",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path:
        "https://alpha.invensislearning.com/storage/images/testimonials/Testimonial-alex-key-capm-denver.jpg",
      message:
        "I had a very deep understanding of CAPM content. The training was excellent with a relaxed schedule and atmosphere. The training material was comprehensive, and the trainer was an expert trainer with in-depth knowledge about the subject.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
    {
      name: "Pablo Ortiz",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path: "",
      message:
        "I am fully satisfied with the Prince 2 Foundation and Practitioner course content and the guidance provided with well trained instructors. I am eager to take more courses to build my knowledge in this field.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
    {
      name: "Martha J",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path:
        "https://alpha.invensislearning.com/storage/images/testimonials/martha-johnson-testimonial.jpg",
      message:
        "The training facility provided by Invensis Learning were excellent. The trainer was a subject matter expert and paced the training really well. The examples and case studies were good and gave me an in-depth understanding of the subject.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
    {
      name: "Kamal Solanki",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path: "",
      message:
        "Excellent course and I found it very beneficial. The instructor explained the concepts clearly, and the material provided was helpful for the training. My understanding of SIAM increased greatly because of this course.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },

    {
      name: "LIDIA SOLER",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path: "",
      message:
        "The training was highly professional and satisfying. The program included official DevOps Training material, and the trainer created an interesting environment for learning.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
    {
      name: "Jeson Gaybrell",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path: "",
      message:
        "I am fully satisfied with the course content and the guidance provided with professional expertise. I am eager to take more courses to build my knowledge in IT service management by taking other courses.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
    {
      name: "German Ormaechea",
      designation: "",
      course: "PRINCE2 Agile Foundation and Practitioner Certification",
      linked_in: "",
      image_path: "",
      message:
        "Really useful training, helped me to get a more organized understanding of RCA with Six Sigma. The material that was covered was exceptional. The instructor was well versed in the quality management domain and explained with the help of real-world examples that made the understanding an enriching learning experience.",
      rating: 5,
      location: "",
      testimonial_course:
        "PRINCE2 Agile Foundation and Practitioner Certification",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState(null);
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

  return (
    <Container className="py-3 px-0">
      <Card>
        <CardContent className="py-4">
          <Text className="text-[20px] font-semibold mb-4">
            Here's What our Customers Say
          </Text>
          <div className="bg-lightbackground ">
            <div>
              <Carousel
                className=""
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="py-5 mx-auto">
                  {TextTestimonialsCard.map((testimonial, index) => (
                    <CarouselItem key={index} className=" pl-0 px-4">
                      <Card className="object-center p-4 grid place-items-center shadow-md hover:shadow-2xl dark:bg-detailcontrast">
                        <CardContent className="p-0">
                          <div className="flex gap-x-3 items-center">
                            <Avatar>
                              <AvatarImage src={testimonial.image_path} />
                              <AvatarFallback>
                                <div className="bg-gray-400 p-1 rounded-full">
                                  <User fill="#fff" stroke="#fff" />
                                </div>
                              </AvatarFallback>
                            </Avatar>
                        
                              <div>
                                <Text className="whitespace-nowrap font-semibold text-[18px]">{testimonial.name}</Text>
                                <StarRating
                                  rating={Number(testimonial.rating)}
                                />
                              </div>{" "}

                              <div className="ml-auto"><Quote fill="#3f51b5" strokeWidth={0} /></div>
                            </div>
                         
                          <Text className="text-[13px] mt-5 leading-7 line-clamp-4">
                            {" "}
                            {testimonial.message}
                          </Text>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" /> */}
              </Carousel>
              <DotNavigation
                slides={TextTestimonialsCard}
                currentSlide={currentSlide}
                onDotClick={(index) => {
                  api?.scrollTo(index);
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <OrderSummaryAutoSlider/>
    </Container>
    
  );
};
const DotNavigation = ({ slides, currentSlide, onDotClick }) => (
  <div className="flex justify-center mt-4">
    {slides.map((_, index) => (
      <button
        key={index}
        className={`w-2 h-2 mx-1 rounded-full ${
          currentSlide === index ? "bg-secondary" : "bg-gray-300"
        }`}
        onClick={() => onDotClick(index)}
      />
    ))}
  </div>
);
export default OrderSummarySlider;
