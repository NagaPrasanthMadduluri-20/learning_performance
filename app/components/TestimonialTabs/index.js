import Container from "@/components/Container";
import Text from "@/components/Text";
import { Quote, User } from "lucide-react";
import React from "react";
import StarRating from "../StarRating";
import Image from "next/image";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialTabs = ({ additionalData }) => {
  const data = additionalData.testimonials.TextTestimonialsCard;
  return (
    <div className="bg-lightbackground">
      <Container>
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12">
          {data.map((item, index) => (
            <div className="p-10 shadow-md bg-background relative" key={index}>
              {item.image_path ? (
                <div className="bg-background rounded-full absolute  -top-9 right-20 md:right-36 border-2 border-blue-200">
                  <Image
                    src={item.image_path}
                    alt="name"
                    width={70}
                    height={70}
                    className=" rounded-full"
                  />
                </div>
              ) : (
                <div className="bg-background rounded-full p-4 absolute -top-9 right-48 md:right-36 border-2 border-blue-200">
                  <User fill="#72767E" strokeWidth={0} size={40} />
                </div>
              )}
              <Text className="text-primary dark:text-primary-foreground font-semibold text-[18px] text-center">
                {item.name}
              </Text>
              <Text className="text-center underline underline-offset-1 text-[13px] font-normal my-2">
                {item.designation}
              </Text>
              <div className="flex justify-center">
                {" "}
                <StarRating rating={Number(item.rating)} />
              </div>

              <Text className="text-center mt-4 ">{item.message}</Text>
              {/* <div className="absolute -top-5 -left-2">
                  {" "}
                  <Quote
                    fill="#72767E"
                    strokeWidth={0}
                    className="rotate-180"
                  />
                </div> */}
              {/* <div className="absolute bottom-0 right-0">
                  {" "}
                  <Quote fill="#72767E" strokeWidth={0} />
                </div> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialTabs;
