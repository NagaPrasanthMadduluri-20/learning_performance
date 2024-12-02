import Container from '@/components/Container'
import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Image from 'next/image';
import Text from '@/components/Text';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, CircleCheck, FolderInput, Timer, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import WebinarDetailCard from '../WebinarDetailCard';
import StayConnected from '../StayConnected';
import WebinarFormSection from '@/app/[...slug]/sharedsections/WebinarFormSection';

const WebinarDetailBanner = ({finalcontent, additionalData}) => {
    const { contents } = finalcontent;
  return (
    <>
    <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb}/>
      </Container>
    <Container className="py-6">
        
      <div className="grid grid-cols-10 gap-x-5">
        <div className="col-span-10 md:col-span-7">
       
        <div
          className="grid grid-cols-10 p-2 bg-lightbackground rounded-md shadow-md mb-5"
        >
            
          <div className="col-span-3">
            {contents.trainer_image ? (
              <Image
                src={contents.trainer_image}
                alt={contents.speaker_name}
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
           
          </div>
          <div className="col-span-7 ml-5 md:ml-0">
            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-primary px-1.5 py-0.5 text-[12px] font-medium text-primary-foreground">
              {/* {list.type[0]} Webinar */}
            </span>

            <Text variant="h2" className="mb-3 text-primary dark:text-primary-foreground text-[20px] md:text-[28px]">
              {contents.webinar_name}
            </Text>
            <Separator />
            <div className="mt-3 flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex items-center mb-3">
                <User stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Speaker:</b> {contents.speaker_name}
                </Text>
              </div>
              <div className="flex items-center mb-3">
                <Timer stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Duration:</b> {contents.duration}
                </Text>
              </div>
              <div className="flex items-center mb-3">
                <CircleCheck stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Training Level:</b> {contents.training_level}
                </Text>
              </div>
            </div>
            <div className="flex items-center md:mt-3 mb-3">
                <CalendarDays stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Date:</b> {" "} February 25th 2023 9:00 am IST
                </Text>
              </div>
              <div className="flex items-center md:mt-6 mb-3">
                <CircleCheck stroke="#ffad00" strokeWidth={3} size={16} />
                <Text className="text-[12px] ml-2">
                  {" "}
                  <b> Webinar Id:</b> {contents.webinar_id}
                </Text>
              </div>
              {/* <Button variant="outline" className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground"> <Link  href={`webinars/${list.BtnLink}`} className="flex items-center">{list.BtnLabel}<FolderInput className="ml-2" size={18}/></Link> </Button> */}
          </div>
          <Separator className="my-4 col-span-10" />
          <div className='w-full col-span-10 '>{contents.webinar_introduction1} </div>
        </div>
        <WebinarDetailCard cardDetailData={contents} />
        </div>
        <div className="col-span-10 md:col-span-3">
          <div className=''>

          <StayConnected webinar={true}/>
           <WebinarFormSection formType="Webinar"/>
           </div>
        </div>
        
      </div>
    </Container>
    </>
  )
}

export default WebinarDetailBanner