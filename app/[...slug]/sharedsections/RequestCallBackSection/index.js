"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
//import Select from "react-select";
import { CalendarIcon, Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { options } from "@/data/options";
import { getFormSchema } from "@/lib/formschema";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { PhoneNumberInput } from "@/app/components/EnquiryForm/PhoneNumberInput";
import { useState, useRef, useEffect, lazy, Suspense } from "react";

// Dynamically import react-select
const Select = lazy(() => import("react-select"));

const RequestCallBackForm = ({ formType }) => {
  const [isSelectLoaded, setIsSelectLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);
  const buttonRef = useRef(null);
  const { toast } = useToast();

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    selectedCourse: [],
    date: null,
    time: null,
    timezone: null,
    message: "",
    terms: false,
  };

  const schema = getFormSchema(formType);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  // Custom styles with lazy loading consideration
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "white" : "transparent",
    }),
  };

  const onSubmit = async (data) => {
    // Dynamically import both the component and its styles
    if (!isSelectLoaded) {
      await Promise.all([
        import("react-select"),
      ]);
      setIsSelectLoaded(true);
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(
        `Form submission successful with formatted data: ${formType}`,
        data
      );
      toast({
        title: "Success",
        description: "Your data has been successfully submitted!",
        variant: "success",
      });
      form.reset();
    } catch (error) {
      console.error("Form submission failed:", error);
      toast({
        title: "Error",
        description: "Form submission failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Static time options array with 15-minute intervals
  const timeOptions = [
    { value: "00:00", label: "12:00 AM" },
    { value: "00:15", label: "12:15 AM" },
    { value: "00:30", label: "12:30 AM" },
    { value: "00:45", label: "12:45 AM" },
    { value: "01:00", label: "1:00 AM" },
    { value: "01:15", label: "1:15 AM" },
    { value: "01:30", label: "1:30 AM" },
    { value: "01:45", label: "1:45 AM" },
    { value: "02:00", label: "2:00 AM" },
    { value: "02:15", label: "2:15 AM" },
    { value: "02:30", label: "2:30 AM" },
    { value: "02:45", label: "2:45 AM" },
    { value: "03:00", label: "3:00 AM" },
    { value: "03:15", label: "3:15 AM" },
    { value: "03:30", label: "3:30 AM" },
    { value: "03:45", label: "3:45 AM" },
    { value: "04:00", label: "4:00 AM" },
    { value: "04:15", label: "4:15 AM" },
    { value: "04:30", label: "4:30 AM" },
    { value: "04:45", label: "4:45 AM" },
    { value: "05:00", label: "5:00 AM" },
    { value: "05:15", label: "5:15 AM" },
    { value: "05:30", label: "5:30 AM" },
    { value: "05:45", label: "5:45 AM" },
    { value: "06:00", label: "6:00 AM" },
    { value: "06:15", label: "6:15 AM" },
    { value: "06:30", label: "6:30 AM" },
    { value: "06:45", label: "6:45 AM" },
    { value: "07:00", label: "7:00 AM" },
    { value: "07:15", label: "7:15 AM" },
    { value: "07:30", label: "7:30 AM" },
    { value: "07:45", label: "7:45 AM" },
    { value: "08:00", label: "8:00 AM" },
    { value: "08:15", label: "8:15 AM" },
    { value: "08:30", label: "8:30 AM" },
    { value: "08:45", label: "8:45 AM" },
    { value: "09:00", label: "9:00 AM" },
    { value: "09:15", label: "9:15 AM" },
    { value: "09:30", label: "9:30 AM" },
    { value: "09:45", label: "9:45 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "10:15", label: "10:15 AM" },
    { value: "10:30", label: "10:30 AM" },
    { value: "10:45", label: "10:45 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "11:15", label: "11:15 AM" },
    { value: "11:30", label: "11:30 AM" },
    { value: "11:45", label: "11:45 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "12:15", label: "12:15 PM" },
    { value: "12:30", label: "12:30 PM" },
    { value: "12:45", label: "12:45 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "13:15", label: "1:15 PM" },
    { value: "13:30", label: "1:30 PM" },
    { value: "13:45", label: "1:45 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "14:15", label: "2:15 PM" },
    { value: "14:30", label: "2:30 PM" },
    { value: "14:45", label: "2:45 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "15:15", label: "3:15 PM" },
    { value: "15:30", label: "3:30 PM" },
    { value: "15:45", label: "3:45 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "16:15", label: "4:15 PM" },
    { value: "16:30", label: "4:30 PM" },
    { value: "16:45", label: "4:45 PM" },
    { value: "17:00", label: "5:00 PM" },
    { value: "17:15", label: "5:15 PM" },
    { value: "17:30", label: "5:30 PM" },
    { value: "17:45", label: "5:45 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "18:15", label: "6:15 PM" },
    { value: "18:30", label: "6:30 PM" },
    { value: "18:45", label: "6:45 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "19:15", label: "7:15 PM" },
    { value: "19:30", label: "7:30 PM" },
    { value: "19:45", label: "7:45 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "20:15", label: "8:15 PM" },
    { value: "20:30", label: "8:30 PM" },
    { value: "20:45", label: "8:45 PM" },
    { value: "21:00", label: "9:00 PM" },
    { value: "21:15", label: "9:15 PM" },
    { value: "21:30", label: "9:30 PM" },
    { value: "21:45", label: "9:45 PM" },
    { value: "22:00", label: "10:00 PM" },
    { value: "22:15", label: "10:15 PM" },
    { value: "22:30", label: "10:30 PM" },
    { value: "22:45", label: "10:45 PM" },
    { value: "23:00", label: "11:00 PM" },
    { value: "23:15", label: "11:15 PM" },
    { value: "23:30", label: "11:30 PM" },
    { value: "23:45", label: "11:45 PM" },
  ];

  const timezones = [
    { value: "UTC", label: "UTC" },
    { value: "America/New_York", label: "EST (UTC-5)" },
    { value: "America/Los_Angeles", label: "PST (UTC-8)" },
    { value: "Europe/London", label: "GMT (UTC+0)" },
    { value: "Asia/Tokyo", label: "JST (UTC+9)" },
  ];

  // Handle clicking outside to close calendar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        setIsCalendarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Container className="py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter Your FirstName*"
                        className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter Your LastName"
                        className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter Your Email*"
                        className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />

              <PhoneNumberInput form={form} />

              <FormField
                name="selectedCourse"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                     <Suspense
                      fallback={
                        <select className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500">
                          <option value="" disabled>
                            Select Course(s)*
                          </option>
                        </select>
                      }
                    >
                    <Select
                      {...field}
                      options={options}
                      isMulti={true}
                      placeholder="Select Course (s)*"
                      className="rounded-2xl h-11 py-1 font-montserrat text-[14px] dark:bg-background"
                      instanceId="select-course"
                      styles={customStyles}
                      // Optional: Load styles when interacted
                      onMenuOpen={async () => {
                        if (!isSelectLoaded) {
                          setIsSelectLoaded(true);
                        }
                      }}
                    />
                    </Suspense>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="SelectOption"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div placeholder="select option">
                        <select
                          {...field}
                          className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            select option
                          </option>
                          <option value="Individual">Individual</option>
                          <option value="Corporate">Corporate</option>
                        </select>
                      </div>
                    </FormControl>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />
              <Text className="font-semibold text-[20px] text-primary dark:text-primary-foreground col-span-full mx-auto">
                Select your Preffered Date and Time for the CallBack
              </Text>

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col relative">
                    <FormControl>
                      <Button
                        type="button"
                        ref={buttonRef}
                        variant="outline"
                        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                        className={cn(
                          "border-2 border-gray-200 h-10 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          field.value.label
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>

                    {isCalendarOpen && (
                      <div
                        ref={calendarRef}
                        className="absolute top-[calc(100%+4px)] left-0 bg-white border rounded-md shadow-md z-50"
                      >
                        <Calendar
                          mode="single"
                          selected={
                            field.value
                              ? new Date(field.value.value)
                              : undefined
                          }
                          onSelect={(date) => {
                            if (date) {
                              field.onChange({
                                value: date.toISOString(),
                                label: format(date, "PPP"),
                              });
                              setIsCalendarOpen(false);
                            }
                          }}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                     <Suspense
                      fallback={
                        <select className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500">
                          <option value="" disabled>
                          time
                          </option>
                        </select>
                      }
                    >
                    <Select
                      {...field}
                      options={timeOptions}
                      placeholder="Select Time"
                      className="rounded-2xl h-11 py-1 font-montserrat text-[14px] dark:bg-background"
                      instanceId="select-time"
                      styles={customStyles}
                      // Optional: Load styles when interacted
                      onMenuOpen={async () => {
                        if (!isSelectLoaded) {
                          setIsSelectLoaded(true);
                        }
                      }}
                    />
                    </Suspense>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />

              <FormField
                name="timezone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                     <Suspense
                      fallback={
                        <select className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500">
                          <option value="" disabled>
                          Select Timezone*
                          </option>
                        </select>
                      }
                    >
                    <Select
                      {...field}
                      options={timezones}
                      placeholder="Select Timezone"
                      className="rounded-2xl h-11 py-1 font-montserrat text-[14px] dark:bg-background"
                      instanceId="select-timezone"
                      styles={customStyles}
                      // Optional: Load styles when interacted
                      onMenuOpen={async () => {
                        if (!isSelectLoaded) {
                          setIsSelectLoaded(true);
                        }
                      }}
                    />
                    </Suspense>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-start space-x-3 space-y-0 mt-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel>
                        I agree to receive communication on newsletters,
                        discount, offers, updates, events, promotions, etc.
                      </FormLabel>
                      <FormDescription>
                        By clicking Submit, you agree to our Terms of
                        Conditions, Privacy Policy.
                      </FormDescription>
                    </div>
                  </div>
                  <FormMessage className="text-[12px] !mt-0 ml-7" />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              {" "}
              <Button type="submit" className="mt-5 px-4">
                {isSubmitting ? (
                  <>
                    Scheduling the call
                    <Loader size={15} className="animate-spin ml-2" />
                  </>
                ) : (
                  "Schedule Call"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </Container>
    </>
  );
};

export default RequestCallBackForm;
