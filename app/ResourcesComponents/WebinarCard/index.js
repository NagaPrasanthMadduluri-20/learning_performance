import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, CircleCheck, FolderInput, Tags, Timer, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WebinarCard = ({ additionalData }) => {
  const { WebinarList } = additionalData;
  return (
    <>
      {WebinarList?.map((list, index) => (
        <div
          key={index}
          className="grid grid-cols-10 p-2 bg-lightbackground rounded-md shadow-md hover:shadow-xl mb-5"
        >
            
          <div className="col-span-3 relative">
            {list.SpeakerImg ? (
              <Image
                src={list.SpeakerImg}
                alt={list.Speaker}
                width={200}
                height={200}
              />
            ) : (
              <Image
                src="/webinar/speaker.jpg"
                alt="Speaker"
                width={200}
                height={200}
              />
            )}
            <div className="absolute top-0 right-4 text-primary-foreground font-bold text-[10px] flex items-center bg-yellow-500 pl-2 rounded-full animate-bounce">{list.CardTag}<Tags fill="#ffff" stroke="#ffad00" /></div>
          </div>
          <div className="col-span-7 ml-5 md:ml-0">
            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-primary px-1.5 py-0.5 text-[12px] font-medium text-primary-foreground">
              {list.type[0]} Webinar
            </span>

            <Text variant="h2" className="mb-3 text-[20px] md:text-[28px]">
              {list.CardHeading}
            </Text>
            <Separator />
            <div className="mt-3 flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex items-center mb-3">
                <User stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Speaker:</b> {list.Speaker}
                </Text>
              </div>
              <div className="flex items-center mb-3">
                <Timer stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Duration:</b> {list.Duration}
                </Text>
              </div>
              <div className="flex items-center mb-3">
                <CircleCheck stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Training Level:</b> {list.Level}
                </Text>
              </div>
            </div>
            <div className="flex items-center md:my-2 mb-3 md:mb-5">
                <CalendarDays stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Date:</b> {" "} February 25th 2023 9:00 am IST
                </Text>
              </div>
              <Button variant="outline" className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground dark:bg-lightbackground hover:dark:bg-lightbackground/80"> <Link  href={`webinars/${list.BtnLink}`} className="flex items-center dark:text-primary-foreground">{list.BtnLabel}<FolderInput className="ml-2" size={18}/></Link> </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default WebinarCard;
