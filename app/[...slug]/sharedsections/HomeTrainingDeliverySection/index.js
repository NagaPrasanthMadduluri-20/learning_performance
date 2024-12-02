"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
import useIntersectionObserver from "@/lib/useIntersectionObserver";
import Image from "next/image";
import { useState, useEffect } from "react";

const content = {
  heading: "Training Delivery Modes",
  deliverContent: [
    {
      index: "1",
      heading: "Classroom Training",
      content:
        "You will learn from qualified, accredited, certified & highly experienced trainers in a classroom.",
    },
    {
      index: "2",
      heading: "Live Virtual Training",
      content:
        "Enroll for Instructor-led Live Online Sessions and attend from Anywhere.",
    },
    {
      index: "3",
      heading: "Corporate Group Training",
      content:
        "Cost Effective and Customized Instructor led On-site Group Training for Enterprises.",
    },
    {
      index: "4",
      heading: "Focused 1-to-1 training",
      content:
        "Achieve focused learning with a dedicated trainer and custom dates.",
    },
  ],
};

// Counter Component
const Counter = ({ stat }) => {
  const [count, setCount] = useState(0);
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.5, // Adjust the threshold to your needs
  });
//console.log("isVisible", isVisible);
  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000; // Total duration of the animation in milliseconds
    const increment = stat.value / (duration / 10); // Increment the count every 10ms

    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev < stat.value) {
          return Math.min(prev + increment, stat.value);
        }
        clearInterval(counter);
        return prev;
      });
    }, 10);

    // Cleanup the interval on component unmount or visibility change
    return () => clearInterval(counter);
  }, [isVisible, stat.value]);
  return (
    <div ref={elementRef}>
      <Text className="text-[28px] font-bold">
        {Math.floor(count)}
        {stat.label === "Learners"
          ? "K+"
          : stat.label === "Courses" || stat.label === "Locations"
          ? "+"
          : "%"}
      </Text>
      <Text>{stat.label}</Text>
    </div>
  );
};

const HomeTrainingDelivery = () => {
  const statistics = [
    {
      label: "Courses",
      value: 60,
      image: "/TrainingDelivery/Training-Delivery-Modes-course-icon.webp",
    },
    {
      label: "Learners",
      value: 50,
      image:
        "/TrainingDelivery/Training-Delivery-Modes-training-satisfaction-icon.webp",
    },
    {
      label: "Locations",
      value: 130,
      image: "/TrainingDelivery/Training-Delivery-Modes-location-icon.webp",
    },
    {
      label: "Training Satisfaction",
      value: 99,
      image: "/TrainingDelivery/Training-Delivery-Modes-learners-icon.webp",
    },
  ];

  return (
    <div className="bg-lightbackground">
      <Container>
        <div className="flex-col md:grid md:grid-cols-10 ">
          <div className="md:col-span-6">
            <Text variant="h2">{content.heading}</Text>
            <div className="text-[22px] ">
              Invensis learning offers{" "}
              <span className="text-blue-500">4 learning modes</span> to choose{" "}
            </div>
            {content.deliverContent.map((item, index) => (
              <div className="flex mt-8 gap-x-3" key={index}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full border bg-background flex items-center justify-center mt-1">
                  <Text className="text-[14px] font-semibold text-primary">
                    {" "}
                    {item.index}{" "}
                  </Text>
                </div>
                <div>
                  <Text className="text-primary font-semibold text-[20px] mb-2 dark:text-primary-foreground">
                    {item.heading}
                  </Text>
                  <Text className="text-[17px]"> {item.content} </Text>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-4 p-10 mt-10 md:ml-20 md:p-0">
            <div className="bg-[#E7EDFE] dark:bg-lightbackground pl-16 py-10 pb-4">
              {statistics.map((stat, index) => (
                <div key={index} className="flex items-center mb-8 gap-x-7">
                  <div className="bg-background rounded-full p-3 w-20 h-20 flex items-center justify-center">
                    <Image
                      src={stat.image}
                      alt="TrainingDelivery"
                      width={50}
                      height={50}
                      className=""
                    />
                  </div>
                  <div>
                    {" "}
                    <Counter stat={stat} />{" "}
                  </div>
                </div>
              ))}
              {/* <div className="flex items-center mb-7">
                <div className="bg-background rounded-full p-3 w-24 h-24 flex items-center justify-center"><Image src="/TrainingDelivery/Training-Delivery-Modes-course-icon.webp" alt="TrainingDelivery" width={80} height={80} className="w-full h-auto"/></div>
                <div className="flex flex-col ml-5">
                  <Text className="text-[28px] font-bold">60+</Text>
                  <Text> Courses </Text>
                  </div>
              </div>
              <div className="flex items-center mb-7">
               <div className="bg-background rounded-full p-3 w-24 h-24 flex items-center justify-center"> <Image src="/TrainingDelivery/Training-Delivery-Modes-training-satisfaction-icon.webp" alt="TrainingDelivery" width={80} height={80} className="w-full h-auto"/></div>
                <div className="flex flex-col ml-5">
                  <Text className="text-[28px] font-bold">50 K+</Text>
                  <Text> Learners </Text>
                  </div>
              </div>
              <div className="flex items-center mb-7">
               <div className="bg-background rounded-full p-3 w-24 h-24 flex items-center justify-center"> <Image src="/TrainingDelivery/Training-Delivery-Modes-location-icon.webp" alt="TrainingDelivery" width={50} height={50}/></div>
                <div className="flex flex-col ml-5">
                  <Text className="text-[28px] font-bold">130 +</Text>
                  <Text> Locations </Text>
                  </div>
              </div>
              <div className="flex items-center mb-7">
               <div className="bg-background rounded-full p-3 w-24 h-24 flex items-center justify-center"> <Image src="/TrainingDelivery/Training-Delivery-Modes-learners-icon.webp" alt="TrainingDelivery" width={80} height={80} className="w-full h-auto"/></div>
                <div className="flex flex-col ml-5">
                  <Text className="text-[28px] font-bold">99 %</Text>
                  <Text> Training Satisfaction </Text>
                  </div>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeTrainingDelivery;
