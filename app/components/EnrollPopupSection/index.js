import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Text from "@/components/Text";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { Info, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Tooltip from "@/components/ui/tooltip";

const EnrollPopup = ({ scheduleindex }) => {
  return (
    <>
      <div className="col-span-1 sm:col-span-12 md:col-span-4 border-gray-200 md:items-center md:my-auto md:mt-11 mt-2">
        <div className="flex flex-col sm:flex-row sm:gap-x-3">
          <div className="w-full md:w-[70%] order-2 sm:order-1">
            <Button
              variant="outline"
              className="w-full text-[12px] md:text-[13px] h-10 md:h-12 leading-4 font-bold hover:bg-primary hover:text-primary-foreground flex-col "
            >
              Request For Group Training
              <Text className="text-[12px] font-semibold"> Onsite/Virtual</Text>
            </Button>
          </div>
          <div className="w-full md:w-[40%] order-1 sm:order-2">
            <Dialog>
              <DialogTrigger
                className={`w-full text-primary-foreground px-2 flex items-center justify-center rounded-md mb-2 h-10 md:h-12 ${
                  scheduleindex === 0
                    ? "bg-secondary hover:bg-secondary/80 dark:bg-[#Ec7601] hover:dark:bg-[#ec7601]/80"
                    : "bg-[#00c24e] hover:bg-[#00c24e]/80 "
                } align-middle`}
                id="Enroll now"
                aria-label="enroll now"
              >
                Enroll Now
              </DialogTrigger>
              <DialogContent className="max-w-[80%] sm:max-w-[50%]">
                <DialogHeader>
                  <DialogTitle className="text-foreground text-center mt-24 mb-4 text-[24px]">
                    Proceed to Checkout
                  </DialogTitle>
                  <DialogDescription className="text-center text-foreground relative">
                    <Image
                      src="/invensis.jpg"
                      alt="logo"
                      width={120}
                      height={70}
                      className="absolute -top-36 left-5"
                    />
                    <Text className="text-[20px] font-semibold my-4 hidden sm:block">
                      PMP Certification Course - Nov-2024 09th - 17th
                    </Text>
                    <Text className="text-18px font-semibold hidden sm:block">
                      Number of learners: 1
                    </Text>
                    <Image
                      src="/we-accepted-cardss.webp"
                      alt="schedulecertification"
                      width={400}
                      height={30}
                      className="mx-auto my-5"
                    />
                    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 gap-1 text-center mx-auto w-[80%] relative">
                      <div className="absolute -right-10 top-32 md:top-4">
                        <Tooltip
                          className="!bg-transparent border-0"
                          content={
                            <div className="absolute right-0 -top-5 md:right-56 md:-top-48 w-[200px] md:w-[300px] bg-background p-2 text-[12px] font-semibold rounded-lg">
                              <p className="bg-transparent">
                                You can Generate and Download a Proforma invoice
                                for the selected course. Make Payment when you
                                are Ready
                              </p>
                            </div>
                          }
                          position="top"
                        >
                          <Info />
                        </Tooltip>
                      </div>
                      <div className="absolute left-[48%] top-24 md:top-4 bg-background px-1 py-1 text-[13px] font-medium">
                        OR
                      </div>

                      <div className="bg-[#00c24e] text-primary-foreground rounded-none h-14 w-[90%] md:w-[50%] mx-auto pt-2 cursor-pointer">
                        <Link href="/ordersummary">
                          Pay Online
                          <div className="text-[12px]">
                            {" "}
                            Credit Card / Debit Card{" "}
                          </div>
                        </Link>
                      </div>

                      <Separator
                        className="bg-gray-400 w-[1px] mx-10"
                        orientation="vertical"
                      />
                      <div className="rounded-none h-14 w-[90%] md:w-[50%] mx-auto bg-lightbackground border-2 pt-2 cursor-pointer">
                        <Link href="/ordersummary">
                          Pay Via Bank Transfer
                          <div className="text-[12px]">
                            {" "}
                            Generate Proforma Invoice{" "}
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start mr-1 mt-6">
                      <LockKeyhole size={12} className="mt-1" />
                      <Text className="text-[10px]">
                        {" "}
                        Transactions on this site are safe, secure & PCI-DSS
                        complaint as indicated by the secure lock in your
                        address bar. Over 500,000+ users like you have enrolled
                        for courses
                      </Text>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollPopup;

