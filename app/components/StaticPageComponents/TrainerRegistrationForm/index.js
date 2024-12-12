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
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import React, { lazy, Suspense, useMemo, useState } from "react";
import { options } from "@/data/options";
import { getFormSchema } from "@/lib/formschema";
import Text from "@/components/Text";
import { Separator } from "@/components/ui/separator";
import { PhoneNumberInput } from "../../EnquiryForm/PhoneNumberInput";
import { appData } from "@/data/appData";


export const experiencesOptions = [
  { value: "itil", label: "ITIL" },
  { value: "pmp", label: "PMP" },
  { value: "prince2", label: "PRINCE2" },
  { value: "lean-six-sigma", label: "Lean Six Sigma" },
  { value: "pmi-acp", label: "PMI-ACP" },
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "cobit-5", label: "COBIT 5" },
  { value: "devops", label: "Devops" },
  { value: "change-management", label: "Change Management" },
];

export const expertiseOptions = [
  { value: "1-to-4-years", label: "1 to 4 Years" },
  { value: "5-to-7-years", label: "5 to 7 Years" },
  { value: "7-to-9-years", label: "7 to 9 Years" },
  { value: "9-to-12-years", label: "9 to 12 Years" },
  { value: "12-to-15-years", label: "12 to 15 Years" },
  { value: "15-to-18-years", label: "15 to 18 Years" },
  { value: "18-to-20-years", label: "18 to 20 Years" },
  { value: "20-to-22-years", label: "20 to 22 Years" },
  { value: "22-to-25-years", label: "22 to 25 Years" },
  { value: "25-plus-years", label: "25+ Years" },
];

// Dynamically import react-select
const Select = lazy(() => import("react-select"));

const TrainerRegistrationForm = ({ formType }) => {
  const [isSelectLoaded, setIsSelectLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    selectedCourse: [],
    expertise: null,
    experiences: null,
    country: null,
    trainingMode: "live-virtual-classroom",
    preferredContact: "Phone",
    ReadyTravel: "yes",
    PrefferedOption: "fulltime",
    LinkedIn: "",
    uploadCV: "",
    message: "",
    terms: false,
    Company: "",
    SizeofComapny: "",
  };

  const schema = getFormSchema(formType);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused,
      border: state.isFocused
        ? "0px solid #ccc focus-visible:ring-0 focus-visible:ring-offset-0"
        : "border-2 border-gray-200",
    }),
  
  };

  const onSubmit = async (data) => {
     // Dynamically import both the component and its styles
     if (!isSelectLoaded) {
      await Promise.all([import("react-select")]);
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
  const countryOptions = useMemo(() => 
    appData.countries.map(country => ({
      value: country.name,
      label: country.name
    })), 
    []
  );
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
                  className={`border-2 border-gray-200 h-11 !focus-visible:ring-0 !focus-visible:ring-offset-0 py-0 px-2 w-full rounded-md
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
    <div className="bg-[url('/contact-form-bg.jpg')]" id="join-as-trainer">
      <Container className="py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="bg-background p-4 mx-3 md:p-10 md:mx-24">
              <Text
                variant="h2"
                className="text-primary dark:text-primary-foreground text-center mb-4"
              >
                {" "}
                Register as a Trainer With us{" "}
              </Text>
              <Separator className="bg-primary mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
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
                  name="selectedCourse"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                       <Suspense
                      fallback={
                        <select id="select-course" className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500">
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
                        className="rounded-2xl h-auto py-1 font-montserrat text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
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
                  name="experiences"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <Suspense
                      fallback={
                        <select className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500">
                          <option value="" disabled>
                          Experiences*
                          </option>
                        </select>
                      }
                    >
                      <Select
                        {...field}
                        options={experiencesOptions}
                        isMulti={false}
                        placeholder="Select Training experiences*"
                        className="rounded-2xl h-auto py-1 font-montserrat text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
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
                  name="expertise"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                       <Suspense
                      fallback={
                        <select className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500">
                          <option value="" disabled>
                          Expertise*
                          </option>
                        </select>
                      }
                    >
                      <Select
                        {...field}
                        options={expertiseOptions}
                        isMulti={false}
                        placeholder="Select Training expertise*"
                        className="rounded-2xl h-auto py-1 font-montserrat text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
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
                  name="country"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <Suspense
                      fallback={
                        <select className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500">
                          <option value="" disabled>
                          Select the country*
                          </option>
                        </select>
                      }
                    >
                      <Select
                        {...field}
                        options={countryOptions}
                        isMulti={false}
                        placeholder="Select the country*"
                        className="rounded-2xl h-auto py-1 font-montserrat text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
                        instanceId="select-course"
                        styles={customStyles}
                         // Optional: Load styles when interacted
                       onMenuOpen={async () => {
                        if (!isSelectLoaded) {
                          setIsSelectLoaded(true);
                        }
                      }}
                        onChange={(selectedOption) => {
                          // Use setValue to update the form value
                          form.setValue('country', selectedOption, { 
                            shouldValidate: true 
                          });
                        // Reset city selection when country changes
                          form.setValue('city', null);
                        }}
                      />
                      </Suspense>
                      <FormMessage className="text-[12px] !mt-0" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2">
                <FormField
                  control={form.control}
                  name="ReadyTravel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you ready to Travel</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-x-3 mt-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="travelopinion">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="travelopinion">No</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage className="text-[12px] !mt-0" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="PrefferedOption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PrefferedOption</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-x-3 mt-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="fulltime" id="fulltime" />
                            <Label htmlFor="Preffered Option">Full Time</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="freelance" id="freelance" />
                            <Label htmlFor="Preffered Option">Freelance</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage className="text-[12px] !mt-0" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="LinkedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter Your LinkedIn URL*"
                        className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 mt-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="uploadCV"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-2 border-gray-200 h-11 my-auto focus-visible:ring-0 focus-visible:ring-offset-0 py-0 pt-3 mt-5"
                        type="file"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your requirements"
                        className="min-h-[150px] mt-7"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />
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
                      Submitting
                      <Loader size={15} className="animate-spin ml-2" />
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </Container>
      <Toaster />
    </div>
  );
};

export default TrainerRegistrationForm;
