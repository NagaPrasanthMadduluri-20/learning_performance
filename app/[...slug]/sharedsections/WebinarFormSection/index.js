"use client";

import { useForm } from "react-hook-form";
import Container from "@/components/Container";
import Text from "@/components/Text";
import React, { useMemo, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getFormSchema } from "@/lib/formschema";
import { PhoneNumberInput } from "@/app/components/EnquiryForm/PhoneNumberInput";

const industries = [
  "Aerospace & Defense",
  "Aviation",
  "Banking & Financial Services",
  "Education",
  "Energy & Utilities",
  "Engineering & Construction",
  "Food & Beverages",
  "Government",
  "Healthcare & Life Sciences",
  "High Tech",
  "Insurance",
  "Manufacturing",
  "Media & Entertainment",
  "Metals & Mining",
  "Retail & CPG",
  "Telecommunications",
  "Transportation & Logistics",
];

const WebinarFormSection = ({ formType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues = useMemo(
    () => ({
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      trainingMode: "live-virtual-classroom",
      preferredContact: "Phone",
      message: "",
      terms: false,
      Company: "",
      SizeofComapny: "",
      industry: "",
      jobtitle: "",
    }),
    []
  );

  const schema = getFormSchema(formType);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data) => {
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

  const renderCompanyFields = (
    <>
      <FormField
        control={form.control}
        name="Company"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="Enter Your Company Name*"
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
        name="SizeofComapny"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div placeholder="size of your Company">
                <select
                  {...field}
                  className={`border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full outline-0 rounded-md
                peer ${!field.value ? "text-[14px]" : ""}`}
                >
                  <option value="" disabled hidden>
                    Size of your Company
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </FormControl>
            <FormMessage className="text-[12px] !mt-0" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="jobtitle"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="Enter Your Job Title*"
                className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-[12px] !mt-0" />
          </FormItem>
        )}
      />
    </>
  );

  return (
    <Container>
      <Text className="text-[18px] font-semibold">
        {" "}
        Webinar Registration Form{" "}
      </Text>
      <Container className="py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5 mb-5">
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
              {renderCompanyFields}

              <PhoneNumberInput form={form} />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 outline-0 py-0">
                          <SelectValue placeholder="Select Your Industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to receive communication on newsletters,
                        discount, offers, updates, events, promotions, etc.
                      </FormLabel>
                      <FormDescription>
                        {`
                       By "Registering" you agree to our Terms of Conditions, Privacy Policy.`}
                      </FormDescription>
                    </div>
                  </div>
                  <FormMessage className="text-[12px] !mt-0 ml-7" />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              {" "}
              <Button
                type="submit"
                className="mt-5 px-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Registering
                    <Loader size={15} className="animate-spin ml-2" />
                  </>
                ) : (
                  "Register for this Free Webinar"
                )}
              </Button>
            </div>
            <Text className="text-primary dark:text-primary-foreground text-center mt-5">
              {`Can't attend the live session? Register to receive complimentary copy of recorded Webinar`}
            </Text>
          </form>
        </Form>
      </Container>
      <Toaster />
    </Container>
  );
};

export default WebinarFormSection;
