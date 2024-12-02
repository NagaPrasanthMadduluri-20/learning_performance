import Text from '@/components/Text'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'
import React from 'react'

const ScheduleTopComponent = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-between mb-8 items-center">
    <Image
      src="/schedulecertification.svg"
      alt="schedule certification"
      width={200}
      height={50}
    />
    <div className="ml-8">
      <Text className="font-semibold text-primary dark:text-green-100 dark:opacity-65 underline decoration-solid">
        Pay Once!
      </Text>
      <Text className="font-semibold text-secondary dark:text-orange-100 dark:opacity-65 underline decoration-solid">
        Attend Twice*
      </Text>
    </div>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image
            src="/we-accepted-cardss.webp"
            alt="schedulecertification"
            width={400}
            height={30}
          />
        </TooltipTrigger>
        <TooltipContent>
          <ul className="list-disc ml-5 text-[12px] font-semibold">
            <li>Online Payment (Credit Card / Debit Card)</li>
            <li>Bank Transfer (Generate Proforma Invoice)</li>
            <li>Pay in Installments</li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <Button variant="outline" className="w-80%">
      Download all Schedules
    </Button>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image
            src="/Groupdiscount.svg"
            alt="Groupdiscount"
            width={140}
            height={30}
          />
        </TooltipTrigger>
        <TooltipContent>
          <Text className="border-b-2 font-semibold">
            Group Discount up to <b> 15% </b>
          </Text>
          <ul className="list-disc ml-5 text-[13px] font-normal">
            <li>
              2 or more participants get <b>5%</b>
            </li>
            <li>
              5 or more participants get <b>12%</b>
            </li>
            <li>
              10 or more participants get <b>15%</b>
            </li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
  )
}

export default ScheduleTopComponent