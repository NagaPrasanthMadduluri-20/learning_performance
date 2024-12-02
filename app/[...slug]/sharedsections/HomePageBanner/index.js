import Container from "@/components/Container";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import { CircleCheck, Search, Star } from "lucide-react";
import { SearchBar } from "@/app/components/BannerSearchBox";
const mainData = require("../../../../data/searchData.json");

const HomePageBanner = ({ BannerData, additionalData}) => {
  const { contents } = BannerData;
  const img =
    "https://www.invensislearning.com/static/images/Home-Page-Vector-only.webp";

  // const imagedata = [
  //   {
  //     imgslug: "/Testimonial/martha-johnson-testimonial.jpg",
  //   },
  //   {
  //     imgslug: "/Testimonial/joel-getz-testimonial.jpg",
  //   },
  //   {
  //     imgslug: "/Testimonial/Testimonial-Steven-Rushton.jpg",
  //   },
  //   {
  //     imgslug: "/Testimonial/scott-vonier-testimonial.jpg",
  //   },
  //   {
  //     imgslug: "/Testimonial/Testimonial-shawn-stoyer-itil-hawaii.jpg",
  //   },
  // ];
  return (
    <div className="bg-lightbackground dark:bg-background relative">
      <div className="shadow-lg backdrop-blur-sm">
        <Container>
          <div className="grid grid-cols-10 gap-x-10 items-start mt-5">
            <div className="col-span-10 md:col-span-6 mt-10">
              {additionalData.type === "COUNTRY HOME" &&  (
                <Text className="text-[32px] font-medium">
                  {contents.banner_heading}
                </Text>
              )}
               {additionalData.type === "HOME" &&  (
                <>
                  <Text variant="h1" className="font-normal">
                    Achieve Professional Excellence With{" "}
                  </Text>
                  <span className="text-primary text-[32px] font-bold dark:text-primary-foreground">
                    {" "}
                    60+ Globally-acclaimed Training & Certification Courses
                  </span>
                  </>
               )}
            
              <div className="relative w-[90%] mt-10">
                {/* <Input
                  placeholder="Search Your Courses"
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 py-0 border-2 h-14 border-blue-400 rounded-none"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none border-l-2">
                  <Search className="text-gray-500 ml-3" />
                </div> */}
                 <SearchBar searchData={mainData.searchData} />
              </div>

              <Text className="mt-12 text-[16px]">
                Gain an Edge with Invensis Learning. Register for any course and
                get
              </Text>
              <div className="flex gap-x-10 mt-10">
                <div className="flex gap-x-3 items-start">
                  <CircleCheck fill="#008000" stroke="#ffffff" size={50} />
                  <Text className="text-primary font-semibold text-[16px] dark:text-primary-foreground">
                    Interactive Live-training with Industry Experts
                  </Text>
                </div>
                <div className="flex gap-x-3 items-start">
                  <CircleCheck fill="#008000" stroke="#ffffff" size={50} />
                  <Text className="text-primary font-semibold text-[16px] dark:text-primary-foreground">
                    Interactive Live-training with Industry Experts
                  </Text>
                </div>
              </div>
              <div className="flex mt-8 ml-4 items-center">
                {/* {imagedata.map((item, index) => (
                  <div
                    key={index}
                    className="-ml-3 border-2 border-white rounded-full"
                  >
                    <Image
                      src={item.imgslug}
                      alt="learners"
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                  </div>
                ))} */}
                <div className="flex flex-col ml-5">
                  <Text className="text-[14px] font-semibold ">
                    Enrolled Learners
                  </Text>
                  <div className="flex gap-x-3 items-center">
                    <Star fill="#ffff00" strokeWidth={0} size={20} />{" "}
                    <Text>4.8/5 Rating</Text>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-0 right-0 md:flex hidden">
              <div className="bg-[url('/Vector.png')] bg-no-repeat bg-right w-[1000px] h-[590px] ml-auto"></div>
            </div> */}
            <div className="col-span-4 col-span-0 md:flex hidden">
              <div className="relative w-[500px] h-[500px]">
                <Image src={img} alt="bannerimage" width={500} height={500} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePageBanner;

