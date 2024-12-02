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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import React, { lazy, Suspense, useState } from "react";
import { options } from "@/data/options";
import { getFormSchema } from "@/lib/formschema";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { PhoneNumberInput } from "@/app/components/EnquiryForm/PhoneNumberInput";

// Dynamically import react-select
const Select = lazy(() => import("react-select"));

const InquireAboutForm = ({ formType }) => {
  const [isSelectLoaded, setIsSelectLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    selectedCourse: [],
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

  return (
    <>
      <Text
        variant="h2"
        className="text-primary dark:text-primary-foreground text-center"
      >
        {" "}
        Request for Training
      </Text>
      <Container className="py-4">
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
                        className="rounded-2xl h-auto py-1 font-montserrat text-[14px] !dark:bg-background"
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
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your requirements"
                      className="min-h-[80px] mt-7"
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
          </form>
        </Form>
      </Container>
    </>
  );
};

export default InquireAboutForm;
