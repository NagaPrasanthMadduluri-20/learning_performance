import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Text from '@/components/Text';
import {   CalendarCheck,
    CalendarDays,
    Clock,
    Hash,
    Info,
    User, } from 'lucide-react';

const OrderDetailCard = () => {
  return (
    <>
    <Card>
            <CardHeader className="text-left bg-lightbackground font-semibold text-[23px] p-4">
              Order Details
            </CardHeader>
            <CardContent>
              <Text className="text-[18px] text-primary dark:text-primary-foreground font-semibold text-left mb-6 mt-4">
                PMP CERTIFICATION
              </Text>
              <Text className="flex items-center gap-x-2 mb-3 text-[16px] font-normal">
                <CalendarDays size={15} stroke='#3f51b5' className="" />
                <b> 4th, 15th, 21st, 22nd Dec-2024 </b>
              </Text>
              <Text className="flex items-center gap-x-2 mb-3 text-[16px] font-normal">
                <Info size={15} stroke='#3f51b5' className="" />
                <b> Live Virtual Classroom </b>
              </Text>
              <Text className="flex items-center gap-x-2 mb-3 text-[16px] font-normal">
                <Clock size={15} stroke='#3f51b5' className="" />
                Time: <b> 09:00 - 17:00 </b>
              </Text>
              <Text className="flex items-center gap-x-2 mb-3 text-[16px] font-normal">
                <User size={15} stroke='#3f51b5' className="" />
                No of Participants: <b>1</b>
              </Text>
              <Text className="flex items-center gap-x-2 mb-3 text-[16px] font-normal">
                <Hash size={15} stroke='#3f51b5' className="" />
                EventId: <b> #INO03678</b>
              </Text>
              <Text className="flex items-center gap-x-2 mb-3 text-[16px] font-normal">
                <CalendarCheck size={15} stroke='#3f51b5' className="" />
                Order Placed on: <b> 11th November 2024, 02:05 PM</b>
              </Text>
            </CardContent>
          </Card>
    </>
  )
}

export default OrderDetailCard