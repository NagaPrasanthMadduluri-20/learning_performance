"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
//import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock8, Hash, Monitor } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Form, useForm } from "react-hook-form";
import SliderOrderSummary from "../SliderOrderSummary";
// import OrderSummarySlider from "../OrderSummarySlider";
// import OrderSummaryAutoSlider from "../OrderSummaryAutoSlider";

const OrderValue = ({ cartvalue }) => {
  const defaultValues = {
    PromoCode: "",
  };
  const form = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="px-0">
      <Card className="shadow-lg">
        <CardContent className="p-0">
          <Text className="font-bold p-4 border-b-2 text-[22px]">
            Order Summary
          </Text>
          {cartvalue ? (
            <>
          <div className="flex justify-between items-center mt-4 px-4">
        
            <Text className="font-semibold text-[20px]">
              PMP Certification Course
            </Text>
            <span className="underline text-[12px] cursor-pointer">Remove</span>
          </div>
        
              <div className="px-4">
                <Text className="text-primary dark:text-primary-foreground font-semibold">
                  Course Offerings
                </Text>
                <div className="bg-lightbackground p-2">
                  <ul className="ml-5 text-[11px] list-disc font-semibold">
                    <li>Pay Once, Attend Twice</li>
                    <li>Group discount up to 15% applicable</li>
                    <li>
                      Special offer of 10% + 4% (Processing Fee waiver)
                      applicable
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-4 flex items-center justify-between mt-5 ">
                <div className="">
                  <Text className="flex items-center font-semibold">
                    {" "}
                    <CalendarDays size={15} className="mr-2" /> 29th, 30th, 31st
                    - oct 2024
                  </Text>
                  <Text className="flex items-center font-semibold">
                    {" "}
                    <Monitor size={15} className="mr-2" /> Live Virtual
                    Classroom
                  </Text>
                  <Text className="flex items-center font-semibold">
                    <Clock8 size={15} className="mr-2" /> 9:00 - 7:00 (EST)
                  </Text>
                  <Text className="flex items-center font-semibold">
                    <Hash size={15} className="mr-2" /> Event ID: INL15607
                  </Text>
                </div>
                <Text> No of Learners</Text>
              </div>
              <div className="mt-4 px-4">
                <div className="flex justify-between items-center">
                  <Text className="font-semibold text-[20px]">
                    {" "}
                    Course Value{" "}
                  </Text>
                  <Text className="font-semibold text-[20px]"> USD 1500 </Text>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span>
                    {" "}
                    <Text className="text-green-700">Discount Value</Text>
                    <Text className="text-green-700 text-[13px]">
                      (10% Special Offer Applied)
                    </Text>
                  </span>

                  <Text className="font-semibold text-green-700 text-[13px]">
                    {" "}
                    USD 115{" "}
                  </Text>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <Text className="font-semibold ">Processing Fee (4%) </Text>

                  <Text className="font-semibol line-through"> 41.4</Text>
                </div>
                <div className="border-t-2 flex justify-between items-center mt-2 py-5">
                  <Text className="font-bold text-[20px] pl-4">
                    Total Order Value
                  </Text>
                  <Text className="font-bold text-[20px] pr-4">USD 1035</Text>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="border-t-2 flex justify-between items-center mt-2 py-5">
                <Text className={`font-bold text-[20px] pl-4 `}>
                  Total Order Value
                </Text>
                
              </div>
              <Text className="bg-gray-400 p-3 font-semibold text-primary-foreground">Your Cart is Empty</Text>
            </>
          )}
        </CardContent>
      </Card>
      <Text className="text-center my-2 text-[16px]">
        Need help to make a payment?{" "}
        <Link href="/" className="text-primary underline">
          {" "}
          Chat with Us{" "}
        </Link>
      </Text>
     <div className="hidden md:block"> 
      <SliderOrderSummary/>
     </div>
    </Container>
  );
};

export default OrderValue;
