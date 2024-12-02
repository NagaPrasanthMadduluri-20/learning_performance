"use client";

import Text from "@/components/Text";
import React, { useEffect } from "react";
import Container from "@/components/Container";
import { BadgeCheck, GraduationCap } from "lucide-react";
import DualDirectionCarouselSection from "../DualDirectionCarouselSection";

const CorporateUpskillSliderSection = () => {
  return (
    <Container>
      <div className="overflow-hidden w-full py-12 flex flex-col md:grid md:grid-cols-2 md:gap-x-20 items-center">
        <div>
          <Text variant="h2" className="text-[20px] md:!text-[28px]">
            {" "}
            Upskilling Professionals of Leading{" "}
            <span className="text-orange-400 block">
              {" "}
              Organizations Worldwide{" "}
            </span>{" "}
          </Text>

          <Text className="mt-3 mb-5 leading-8">
            A leading player in the training and certifications space, Invensis
            Learning has transformed the lives of thousands of IT and business
            professionals,
          </Text>
          <div className="flex md:flex-row md:justify-between flex-col">
            <div className="flex gap-x-5">
              <div className="bg-primary my-auto p-3 rounded-lg mx-0 md:mx-auto">
                <BadgeCheck stroke="#ffffff" size={35} />
              </div>
              <div>
                <Text className="text-[35px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1b3874] to-[#BDC0FF]">
                  {" "}
                  4500+{" "}
                </Text>
                <Text className="font-semibold text-wrap">
                  {" "}
                  Enterprize Clients
                </Text>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="bg-primary my-auto p-3 rounded-lg mx-0 md:mx-auto">
                <GraduationCap stroke="#ffffff" size={35} />
              </div>
              <div>
                <Text className="text-[35px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1b3874] to-[#BDC0FF]">
                  {" "}
                  50000+{" "}
                </Text>
                <Text className="font-semibold text-wrap">
                  {" "}
                  Professionals Certified{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div>
          <DualDirectionCarouselSection/>
        </div>
      </div>
    </Container>
  );
};

export default CorporateUpskillSliderSection;
