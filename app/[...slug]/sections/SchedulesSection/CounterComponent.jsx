"use client";
import Text from "@/components/Text";
import { Hash, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const CounterComponent = ({CounterData}) => {
  const [count, setCount] = useState(1);
  return (
    <div>
       <Text className="text-[11px] text-gray-700 dark:text-primary-foreground font-semibold mb-1">No. of learners</Text>
    <div className="flex mb-3 shadow-lg rounded-lg bg-background">
      <div onClick={() => setCount(count - 1)} className={`border-2 border-gray-300 px-1 py-2 cursor-pointer rounded-l-lg ${count < 0 ? "disabled:" : ""}`}><Minus size={13} className="my-auto" /></div>
      <div className="border-2 border-gray-300 py-1 border-r-0 border-l-0 font-bold text-[14px] w-8 text-center"> {count} </div>
      <div onClick={() => setCount(count + 1)} className="border-2 border-gray-300 px-1 py-2 cursor-pointer rounded-r-lg"><Plus size={13} /></div>
    </div>
    <Text className="text-[12px] flex font-semibold items-center"> <Hash size={14} stroke="#Ec7601" strokeWidth={3} className="mr-2" />{CounterData.event_id}</Text>
    {/* <Text className="text-[12px] flex font-semibold"><Languages size={14} className="mr-2" />{CounterData.language}</Text> */}
    </div>
  );
}; 

export default CounterComponent;
