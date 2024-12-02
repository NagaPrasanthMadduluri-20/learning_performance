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
import { Checkbox } from "@/components/ui/checkbox";
import { Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";
import { getFormSchema } from "@/lib/formschema";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { PhoneNumberInput } from "@/app/components/EnquiryForm/PhoneNumberInput";


const workpositions = [
    "Fresher",
    "Associate",
    "Team Lead",
    "Manager",
    "VP",
    "Business Head",
    "C-suite level",  
]



const AssessmentForm = ({ formType }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    message: "",
    workposition: "",
    terms: false,
  };

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

  return (
    <div className="bg-lightbackground py-10">
      <Text
        variant="h2"
        className="text-primary dark:text-primary-foreground text-center mb-5"
      >
        {" "}
        Register For Assessment
      </Text>
      <Container className="py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5 bg-background p-10 mx-40">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FirstName</FormLabel>
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
                     <FormLabel>LastName</FormLabel>
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
                     <FormLabel>Email</FormLabel>
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


              <PhoneNumberInput form={form} formType={formType}/>
              
           
              <FormField
                control={form.control}
                name="SelectOption"
                render={({ field }) => (
                  <FormItem>
                     <FormLabel>User Type</FormLabel>
                    <FormControl>
                      <div placeholder="select option">
                        <select
                          {...field}
                          className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 px-2 w-full text-[14px] outline-0 font-montserrat rounded-md text-gray-500"
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
              <FormField
                control={form.control}
                name="workposition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Work Position </FormLabel>
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
                        {workpositions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
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
                  <div className="flex flex-row items-start space-x-3 space-y-0 mt-3 mx-40">
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
                  <FormMessage className="text-[12px] !mt-0 ml-48" />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              {" "}
              <Button type="submit" className="mt-5 px-4">
                {isSubmitting ? (
                  <>
                    Assessing Your Details
                    <Loader size={15} className="animate-spin ml-2" />
                  </>
                ) : (
                  "Take Assessment"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </Container>
      <Toaster />
    </div>
  );
};

export default AssessmentForm;
