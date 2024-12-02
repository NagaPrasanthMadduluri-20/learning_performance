import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";

const DateFormField = (form) => {
  const [date, setDate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const Months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "september",
    "october",
    "november",
    "december",
  ];
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );
  const handleTriggerClick = () => {
    
    console.log("Popover trigger clicked");

    setIsOpen(!isOpen);
  };
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  return (
    <>
      <FormField
        control={form.control}
        name="date"
        render={({ field }) => (
          <FormItem className="flex flex-col relative">
            <div className="relative" style={{ zIndex: isOpen ? 50 : 0 }}>
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[100%] justify-between text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                    onClick={handleTriggerClick}
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      console.log("Button pointer down");
                    }}
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 bg-white"
                  align="start"
                  side="bottom"
                  onPointerDownOutside={handleClickOutside}
                 
                  style={{
                    zIndex: 100,
                    position: "relative",
                  }}
                >
                    {/* <div>
                      <Select>
                        <SelectTrigger className="w-[110px]">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          {Months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div> */}
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                        setDate(selectedDate);
                        form.setValue("date", selectedDate);
                        setIsOpen(false); // Close popover after selection
                        
                      }}
                      onPointerDown={(e) => {
                        e.stopPropagation();
                        console.log("Calendar container clicked");
                      }}
                      initialFocus
                      
                    />
                </PopoverContent>
              </Popover>
            </div>
            <FormMessage className="text-[12px] !mt-0" />
          </FormItem>
        )}
      />
    </>
  );
};

export default DateFormField;
