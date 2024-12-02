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
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getFormSchema } from "@/lib/formschema";
import { PhoneNumberInput } from "@/app/components/EnquiryForm/PhoneNumberInput";
import { Label } from "@/components/ui/label";

const BrochureForm = ({ formType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues = useMemo(
    () => ({
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      TrainingPlan: "",
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

  return (
    <Container className="py-5">
      <Text className="text-[30px] text-primary dark:text-primary-foreground text-center font-semibold">
        {" "}
        Download the Free Brochure
      </Text>
      <Text className="text-primary dark:text-primary-foreground font-semibold text-center mb-3">
        "Want to save this Brochure for later? Please fill the below details to
        get this Brochure for free"
      </Text>
      <Container className="py-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-2 mb-0">
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
                control={form.control}
                name="TrainingPlan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      I'm planning to take up the training in the next :
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-x-3 mt-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="30 days" id="30 days" />
                          <Label htmlFor="30 days">30 days</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3 Months" id="3 Months" />
                          <Label htmlFor="3 Months">3 Months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="6 months" id="6 months" />
                          <Label htmlFor="6 months">6 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="No idea" id="No idea" />
                          <Label htmlFor="No idea">No idea</Label>
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
                      Note: The course syllabus PDF will be sent to your Email ID.`}
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
                    Downloading...
                    <Loader size={15} className="animate-spin ml-2" />
                  </>
                ) : (
                  "Download the this Free Brochure Now"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </Container>
    </Container>
  );
};

export default BrochureForm;
