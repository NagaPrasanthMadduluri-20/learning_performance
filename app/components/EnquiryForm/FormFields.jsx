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
import React, { lazy, Suspense, useState } from "react";
import { options } from "@/data/options";
import { getFormSchema } from "@/lib/formschema";
import { PhoneNumberInput } from "./PhoneNumberInput";

// Dynamically import react-select
const Select = lazy(() => import("react-select"));

const FormFields = ({ formType, isIndividual, defaultselectcourse }) => {
  const [isSelectLoaded, setIsSelectLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    selectedCourse: defaultselectcourse
      ? [
          {
            value: defaultselectcourse,
            label: defaultselectcourse,
          },
        ]
      : [],
    trainingMode: "live-virtual-classroom",
    preferredContact: "Phone",
    message: "",
    jobtitle: "",
    terms: true,
    ...(isIndividual ? {} : { Company: "", SizeofComapny: "" }),
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

  const renderCompanyFields = !isIndividual && (
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
                  id="Company Size"
                  className={`border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full rounded-md
                peer ${!field.value ? "text-[14px]" : ""}`}
                  aria-label="size of company"
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
    <>
      <Container className="py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                        id="email"
                        name="email"
                        aria-label="Email"
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
                        <select
                          id="select-course"
                          className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] font-montserrat rounded-md text-gray-500"
                        >
                          <option value="" disabled>
                            Select Course(s)*
                          </option>
                        </select>
                      }
                    >
                      <Label
                        htmlFor="select-course"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                      >
                        Select Course
                      </Label>
                      <Select
                        {...field}
                        inputId="select-course"
                        aria-label="Select Course"
                        options={options}
                        isMulti={true}
                        placeholder="Select Course (s)*"
                        className="rounded-2xl min-h-11 h-auto py-1 font-montserrat text-[14px]"
                        instanceId="select-course"
                        value={field?.value} // This should now default to the page_name option
                        onChange={(selectedOptions) =>
                          field.onChange(selectedOptions)
                        }
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
                name="trainingMode"
                render={({ field }) => (
                  <FormItem>
                    <Label
                      htmlFor="trainingmode"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                    >
                      Training Mode
                    </Label>
                    <select
                      id="trainingmode"
                      aria-label="Select training mode"
                      value={field.value}
                      onChange={field.onChange}
                      disabled
                      className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full rounded-md font-montserrat text-[14px]"
                    >
                      <option value="live-virtual-classroom">
                        Live Virtual Classroom
                      </option>
                    </select>
                    <FormMessage className="text-[12px] !mt-0" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="preferredContact"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="preferredContact" id="contact-method">
                    Select the Preferred Contact
                  </Label>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-x-3 mt-4"
                      name="preferredContact"
                      id="preferredContact"
                      aria-labelledby="contact-method"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="Phone"
                          id="preferredContact-phone"
                          name="preferredContact-phone"
                          aria-labelledby="contact-method preferredContact-phone-label"
                          className="w-5 h-5"
                        />
                        <Label
                          id="preferredContact-phone-label"
                          htmlFor="preferredContact-phone"
                        >
                          Phone
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="email"
                          id="preferredContact-email"
                          name="preferredContact-email"
                          aria-labelledby="contact-method preferredContact-email-label"
                          className="w-5 h-5"
                        />
                        <Label
                          id="preferredContact-email-label"
                          htmlFor="preferredContact-email"
                        >
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="Both"
                          id="preferredContact-both"
                          name="preferredContact-both"
                          aria-labelledby="contact-method preferredContact-both-label"
                          className="w-5 h-5"
                        />
                        <Label
                          id="preferredContact-both-label"
                          htmlFor="preferredContact-both"
                        >
                          Both
                        </Label>
                      </div>
                    </RadioGroup>
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
                      className="min-h-[150px] mt-7 border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-2 px-2 w-full rounded-md font-montserrat text-[14px]"
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
                        aria-labelledby="terms-description"
                        id="terms-checkbox"
                        name="terms-checkbox"
                        className="w-6 h-6"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <Label htmlFor="terms-checkbox" id="terms-description">
                        I agree to receive communication on newsletters,
                        discount, offers, updates, events, promotions, etc.
                      </Label>
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
          </form>
        </Form>
      </Container>
      <Toaster />
    </>
  );
};

export default FormFields;
