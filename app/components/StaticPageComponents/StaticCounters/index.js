'use client'
import Container from "@/components/Container";
import Text from "@/components/Text";
import useIntersectionObserver from "@/lib/useIntersectionObserver";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Counter = ({ stat }) => {
  const [count, setCount] = useState(0);
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.5, // Adjust the threshold to your needs
  });
  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000; // Total duration of the animation in milliseconds
    const increment = stat.counter_value / (duration / 10); // Increment the count every 10ms

    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev < stat.counter_value) {
          return Math.min(prev + increment, stat.counter_value);
        }
        clearInterval(counter);
        return prev;
      });
    }, 10);

    // Cleanup the interval on component unmount or visibility change
    return () => clearInterval(counter);
  }, [isVisible, stat.counter_value]);
  return (
    <div ref={elementRef}>
      <Text className="text-[28px] text-orange-300 font-bold mb-4">
        {Math.floor(count)}
        {stat.counter_symbol}
      </Text>
      <Text className="text-primary-foreground">{stat.counter_caption}</Text>
    </div>
  );
};

const StaticCounters = ({StaticCounterData}) => {
  const { contents } = StaticCounterData;
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
    <div className="bg-primary py-12">
    <Container className="py-0">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-evenly text-center">
        {contents.map((stat, index) => (
          <div key={index} className="flex-col mx-auto gap-x-7 mb-5 md:mb-0">
            <div className={`w-20 h-20 flex items-center mb-3 justify-center ${stat.counter_caption === "TRAINING SATISFACTION" ? "ml-10" : ""} `}>
              <Image
                src={stat.img_path}
                alt="TrainingDelivery"
                width={70}
                height={70}
                className={`${stat.counter_caption === "LOCATIONS" === "" ? "w-12 h-14" : "w-16 h-16 "}`}
              />
            </div>
            <div>
              {" "}
              <Counter stat={stat} />{" "}
            </div>
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
};

export default StaticCounters;
