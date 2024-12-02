"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
import React, { useCallback, useEffect, useState } from "react";
import CounterComponent from "./CounterComponent";
import OffersComponent from "./OffersComponent";
import EmailEnquire from "./EmailEnquire";
import FilterComponent from "@/app/components/FilterComponent";
import { ChevronDown, Info } from "lucide-react";
import ScheduleTopComponent from "./ScheduleTopComponent";
import ExpandableContent from "@/app/components/ExpandableComponent";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import EnrollPopup from "@/app/components/EnrollPopupSection";

const schedules = require("../../../../data/schedules.json");

const Schedules = ({ additionalData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClickOffer = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  const [monthFilters, setMonthFilters] = useState([]);
  const [dayTypeFilters, setDayTypeFilters] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [filteredSchedules, setFilteredSchedules] = useState(schedules.data);

  const months = ["Aug", "Sep", "Oct", "Nov"];

  const filterSchedules = useCallback(() => {
    const filtered = schedules.data.filter((schedule) => {
      const monthMatch =
        monthFilters.length === 0 ||
        monthFilters.some((filter) => {
          if (filter === "This Month")
            return schedule.months.includes(new Date().getMonth() + 1);
          if (filter === "Next Month")
            return schedule.months.includes((new Date().getMonth() + 2) % 12);
          return true;
        });

      const dayTypeMatch =
        dayTypeFilters.length === 0 ||
        dayTypeFilters.some((filter) => {
          if (filter === "Weekend Class")
            return schedule.event_type === "Weekend";
          if (filter === "WeekDay Class")
            return schedule.event_type === "Weekday";
          return true;
        });

      const selectedMonthMatch =
        !selectedMonth ||
        schedule.schedule_dates.some((date) => date.month === selectedMonth);

      return monthMatch && dayTypeMatch && selectedMonthMatch;
    });

    setFilteredSchedules(filtered);
  }, [monthFilters, dayTypeFilters, selectedMonth]);

  useEffect(() => {
    filterSchedules();
  }, [filterSchedules]);

  const handleMonthFilterChange = (filter) => {
    setMonthFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter);
      } else {
        return [...prev, filter];
      }
    });
  };

  const handleDayTypeFilterChange = (filter) => {
    setDayTypeFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter);
      } else {
        return [...prev, filter];
      }
    });
  };

  const handleMonthSelection = (month) => {
    setSelectedMonth(month);
    if (month === "Aug") {
      setMonthFilters(["This Month"]);
    } else if (month === "Sep") {
      setMonthFilters(["Next Month"]);
    } else {
      setMonthFilters([]);
    }
  };

  const clearFilters = () => {
    setMonthFilters([]);
    setDayTypeFilters([]);
    setSelectedMonth(null);
  };

  const initialHeight = { mobile: "900px", desktop: "1020px" };

  return (
    <div className="bg-lightbackground mt-8" id="schedules">
      <Container>
        <Text variant="h2" className="mb-11">
          Schedules For {additionalData?.page_name}
        </Text>
        <div>
          <FilterComponent
            monthFilters={monthFilters}
            dayTypeFilters={dayTypeFilters}
            selectedMonth={selectedMonth}
            onMonthFilterChange={handleMonthFilterChange}
            onDayTypeFilterChange={handleDayTypeFilterChange}
            onMonthSelection={handleMonthSelection}
            onClearFilters={clearFilters}
            months={months}
          />
        </div>
        <div>
          <ScheduleTopComponent />
        </div>
        <ExpandableContent
          initialHeight={initialHeight}
          buttonClassName="rounded-full border border-gray-500 relative z-10 h-8 items-center hover:bg-primary hover:text-primary-foreground"
          contentClassName="mt-4"
        >
          {filteredSchedules.map((schedule, scheduleindex) => (
            <div key={scheduleindex}>
              {scheduleindex === 0 ? (
                <div className="relative -mb-[12px] sm:-mb-[16px] text-[9px] sm:text-[14px] font-bold text-primary-foreground">
                  <Image
                    src="/waiver-bg.png"
                    alt="waiver-offer"
                    width={530}
                    height={30}
                    className="w-[370px] h-[20px] sm:w-[520px] sm:h-[30px]"
                  />{" "}
                  <div className="absolute top-[3px] ml-1 md:ml-3 flex items-center text-[9px] sm:text-[14px] whitespace-nowrap">
                    {" "}
                    <span className="absolute top-[-10px] bottom-0 left-0 h-[65px] w-[20px] flex items-center justify-center bg-white blur-[10px] opacity-70 rotate-45 white-fade-animation"></span>
                    <span className="text-yellow-400 text-[9px] sm:text-[14px]">
                      SPECIAL OFFER:{" "}
                    </span>{" "}
                    &nbsp;Flat 15% Discount + 4% Processing Fees Waiver{" "}
                    <TooltipProvider>
                      {" "}
                      <Tooltip>
                        <TooltipTrigger>
                          {" "}
                          <Info
                            color="#ffffff"
                            absoluteStrokeWidth
                            size={15}
                            className="ml-2"
                          />
                        </TooltipTrigger>{" "}
                        <TooltipContent className="font-medium w-[300px]">
                          <b> Discount Offer - Terms & Conditions:</b>
                          <Text className="text-[12px] ">
                            {" "}
                            “Special offer is not applicable for a group of 5 or
                            more participants”
                          </Text>
                        </TooltipContent>{" "}
                      </Tooltip>
                    </TooltipProvider>
                  </div>{" "}
                </div>
              ) : (
                ""
              )}
              <div
                key={scheduleindex}
                className={`mb-6 rounded-xl px-4 md:px-8 py-4 border-2 shadow-md w-full ${
                  scheduleindex === 0
                    ? "bg-gradient-to-b from-[#fffbf2] dark:from-lightbackground to-[#ffffff] dark:to-detailcontrast border-orange-400 dark:bg-detailcontrast"
                    : "bg-background border-gray-300"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-10 sm:justify-between md:grid-cols-11">
                  <div className="col-span-1 sm:col-span-4 md:col-span-3">
                    {schedule.schedule_dates.map((dates, datesindex) => (
                      <div key={datesindex}>
                        <div
                          className="flex mr-2 items-center"
                          key={datesindex}
                        >
                          <Text className="text-[13px] md:text-[16px] font-bold mr-4">
                            {" "}
                            {dates.name}{" "}
                          </Text>
                          <span className="text-[10px] md:text-[11px] text-primary bg-lightbackground rounded-md font-semibold py-1 px-1">
                            {schedule.event_type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-2 md:gap-x-3 mt-2">
                          {dates.event_date.map((date, dateindex) => (
                            <div
                              key={dateindex}
                              className=" border-2 border-gray-200 px-1 md:px-2 py-1 shadow-lg text-center rounded-lg bg-background mb-1"
                            >
                              <Text className="font-bold text-[11px] md:text-[15px]">
                                {date.date}
                              </Text>
                              <Text className="text-[11px] md:text-[14px]">
                                {date.day}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-span-1 sm:col-span-6 md:col-span-4 border-gray-200 items-center">
                    <div className="flex justify-between md:flex-row md:w-full md:ml-3 mt-3">
                      <div className="md:my-auto order-2 md:order-1">
                        <CounterComponent CounterData={schedule} />
                      </div>
                      <div className="md:mx-auto md:my-auto order-1 md:order-2">
                        <OffersComponent
                          OffersData={schedule}
                          Offerindex={scheduleindex}
                        />
                      </div>
                    </div>
                  </div>
                  
                   
                
                  <EnrollPopup scheduleindex={scheduleindex}/>
                </div>

                <div className="flex justify-between sm:justify-normal items-start sm:gap-x-14 mt-3">
                  <div className="order-2 sm:order-1">
                    <EmailEnquire />
                  </div>

                  <div
                    className="text-[12px] text-blue-500 flex items-center font-semibold cursor-pointer order-1 sm:order-2"
                    onClick={handleClickOffer}
                  >
                    View offers
                    <ChevronDown size={15} className="ml-2" />
                  </div>
                </div>
                {expanded && (
                  <div
                    className={`${
                      expanded ? "max-h-dvh" : "max-h-16 overflow-hidden"
                    } transition-max-height duration-500 ease-in-out`}
                  >
                    <ul className="text-[10px] sm:text-[13px] font-semibold mr-auto list-disc border-t-2 mt-4 ml-5">
                      <li>Pay Once, Attend Twice</li>
                      <li>Group discount up to 15% applicable</li>
                      <li>
                        Special offer of 10% + 4% (Processing Fee waiver)
                        applicable
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </ExpandableContent>
      </Container>
    </div>
  );
};

export default Schedules;
