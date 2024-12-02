import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StarRating from "@/app/components/StarRating";
import Image from "next/image";
import {
  CalendarDays,
  GraduationCap,
  House,
  Languages,
  Luggage,
  Users,
  Video,
} from "lucide-react";

const CategorySuccessStories = ({ CategorySuccessStoriesData , additionalData}) => {
  const { contents } = CategorySuccessStoriesData;
  const { page_name } = additionalData;
  return (
    <div className="bg-lightbackground" id= 'success-stories'>
    <Container className="pt-4">
      <Text variant="h2" className="text-center !text-[20px] mb-4">Global Impact: Success Stories from Our {page_name} Training</Text>
      <Carousel
        className="px-10"
        opts={{
            align: "start",
            loop: true,
          }}
      >
        <CarouselContent className="py-5 mx-auto">
          {contents.categorysuccessstories.map((item, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2  md:basis-1/3"
            >
              <Card className="sm:p-5 w-full h-full p-2 border-t-4 border-blue-300 drop-shadow-lg">
                <CardHeader className="pt-0">
                  <CardTitle className="flex-col space-y-3 mx-auto text-center">
                    <Image
                      src="/flag-icon-australia.svg"
                      alt="flags"
                      width={90}
                      height={80}
                      className="rounded-lg mx-auto"
                    />

                    <Text variant="b"> {item.location} </Text>
                    <StarRating rating={item.rating} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[14px] min-h-16 text-center p-3 font-semibold">
                  {item.company}
                </CardContent>
                <Text className="text-[12px]">Course Name</Text>
                <Text
                  variant="b"
                  className="flex text-[12px] items-center gap-x-2"
                >
                  {" "}
                  <GraduationCap fill="#178feb" strokeWidth={1} />
                  {item.course_name}
                </Text>
                <CardFooter className="grid grid-cols-2 gap-6 text-left mt-5 px-0 pb-0">
                  <div className="text-[12px] font-medium">
                    Date{" "}
                    <Text
                      variant="b"
                      className="flex gap-x-2 text-[12px] items-center"
                    >
                      <CalendarDays size={18} fill="#178feb" stroke="#ffffff" />{" "}
                      {item.date}
                    </Text>{" "}
                  </div>
                  <div className="text-[12px] font-medium">
                    Industry{" "}
                    <Text
                      variant="b"
                      className="flex gap-x-2 text-[12px] items-center"
                    >
                      <Luggage
                        size={25}
                        fill="#178feb"
                        stroke="#ffffff"
                        strokeWidth={0.5}
                      />{" "}
                      {item.industry}
                    </Text>{" "}
                  </div>
                  <div className="text-[12px] font-medium">
                    Participants{" "}
                    <Text
                      variant="b"
                      className="flex gap-x-2 text-[12px] items-center"
                    >
                      <Users
                        size={18}
                        fill="#178feb"
                        stroke="#ffffff"
                        strokeWidth={0.1}
                      />{" "}
                      {item.participants}
                    </Text>{" "}
                  </div>
                  <div className="text-[12px] font-medium">
                    TrainingMode{" "}
                    <Text
                      variant="b"
                      className="flex gap-x-2 text-[12px] items-center"
                    >
                      {item.TrainingMode === "on-Site" ? (
                        <>
                          <House
                            size={18}
                            fill="#178feb"
                            stroke="#ffffff"
                            strokeWidth={0.5}
                          />{" "}
                          {item.TrainingMode}
                        </>
                      ) : (
                        <>
                          {" "}
                          <Video
                            size={18}
                            fill="#178feb"
                            stroke="#ffffff"
                            strokeWidth={0.5}
                          />
                          {item.TrainingMode}
                        </>
                      )}
                    </Text>{" "}
                  </div>
                  <div className="text-[12px] font-medium">
                    Language{" "}
                    <Text
                      variant="b"
                      className="flex gap-x-3 text-[12px] items-center"
                    >
                      <Languages
                        size={18}
                        fill="#178feb"
                        stroke="#178feb"
                        strokeWidth={1}
                      />{" "}
                      {item.language}
                    </Text>{" "}
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </Container>
    </div> 
  );
};

export default CategorySuccessStories;
