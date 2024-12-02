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
import { MoveRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import React, { useEffect, useMemo, useState } from "react";
import { getFormSchema } from "@/lib/formschema";
import {
  AlternatePhoneInput,
  PhoneNumberInput,
} from "@/app/components/EnquiryForm/PhoneNumberInput";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Select from "react-select";
import { Toaster } from "@/components/ui/toaster";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { appData } from "@/data/appData";

const workpositions = [
  "Fresher",
  "Associate",
  "Team Lead",
  "Manager",
  "VP",
  "Business Head",
  "C-suite level",
];
// export const countryOptions = [
//   { value: "India", label: "India" },
//   { value: "America", label: "America" },
//   { value: "Germany", label: "Germany" },
// ];
// export const cityOptions = [
//   { value: "Bangalore", label: "Bangalore" },
//   { value: "Mumbai", label: "Mumbai" },
//   { value: "Chennai", label: "Chennai" },
// ];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused,
    border: state.isFocused
      ? "0px solid #ccc focus-visible:ring-0 focus-visible:ring-offset-0"
      : "border-2 border-gray-200",
  }),
};
const OrderSummaryForm = ({ formType, cartvalue,  proforma}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { toast } = useToast();
  const router = useRouter();

    // Transform countries for react-select
    const countryOptions = useMemo(() => 
      appData.countries.map(country => ({
        value: country.name,
        label: country.name
      })), 
      []
    );
  
    // Transform cities based on selected country
    const cityOptions = useMemo(() => {
      if (!selectedCountry) return [];
      
      const country = appData.countries.find(c => c.name === selectedCountry.value);
      return country ? 
        country.cities.map(city => ({
          value: city.name,
          label: city.name
        })) : 
        [];
    }, [selectedCountry]);


  const handleAlternateDetails = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };


  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    Company: "",
    jobtitle: "",
    Address: "",
    country: null,
    billingCountry: null,
    enrollingfor: "MySelf",
    city: null,
    message: "",
    workposition: "",
    terms: false,
    alternateEmail: "",
    alternatePhone: "",
  };

  const schema = getFormSchema(formType);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const formData = {
        ...data,
      };
      console.log("Complete form data:", formData);
      toast({
        title: "Success",
        description: "Your data has been successfully submitted!",
        variant: "success",
      });
    
      form.reset();
      setIsVisible(false);
      router.replace('/proforma-success');
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
    <div className="py-10">
      <Card className="shadow-lg">
        <CardContent className="p-0">
          <div className="bg-lightbackground flex items-center px-4 py-2">
            <div className="p-2 border-2 mr-4 rounded-full">
              <b>1</b>/2
            </div>
            <Text className="text-[20px] font-semibold text-gray-600">
              Registration Details - Pay Online
            </Text>
          </div>
          <Container className="py-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  className=""
                  control={form.control}
                  name="enrollingfor"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-x-6 my-3 mb-6 px-6">
                      <FormLabel>Enrolling this Course for:</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-x-3 mt-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="MySelf" id="MySelf" />
                            <Label htmlFor="Phone">My Self</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="Someoneelse"
                              id="Someoneelse"
                            />
                            <Label htmlFor="email">Someone else</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage className="text-[12px] !mt-0" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5 bg-background px-5">
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

                  <PhoneNumberInput form={form} formType={formType} />

                  <FormField
                    name="country"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          {...field}
                          options={countryOptions}
                          isMulti={false}
                          placeholder="Select the country*"
                          className="rounded-2xl h-auto py-1 font-montserrat text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
                          instanceId="select-course"
                          styles={customStyles}
                          onChange={(selectedOption) => {
                            // Use setValue to update the form value
                            form.setValue('country', selectedOption, { 
                              shouldValidate: true 
                            });
                            
                            // Update local state for cities
                            setSelectedCountry(selectedOption);
                            
                            // Reset city selection when country changes
                            form.setValue('city', null);
                          }}
                          value={form.watch('country')} // Use watch to get current value
                        />
                        <FormMessage className="text-[12px] !mt-0" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="city"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          {...field}
                          options={cityOptions}
                          isMulti={false}
                          placeholder="Select the City*"
                          className="rounded-2xl h-auto py-1 font-montserrat text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
                          instanceId="select-course"
                          styles={customStyles}
                       
                          onChange={(selectedOption) => {
                            form.setValue('city', selectedOption, { 
                              shouldValidate: true 
                            });
                          }}
                          value={form.watch('city')}
                          isDisabled={!selectedCountry}
                        />
                        <FormMessage className="text-[12px] !mt-0" />
                        {!selectedCountry && (
                        <FormMessage className="text-[12px] text-gray-500 !m-0 !p-0">
                          Please select a country first
                        </FormMessage>
                      )}
                      </FormItem>
                    )}
                  />
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

                  <Text
                    className="underline col-span-full cursor-pointer"
                    onClick={handleAlternateDetails}
                  >
                    Alternate Email ID & Phone no (Optional){" "}
                  </Text>
                  {isVisible && (
                    <>
                      <FormField
                        control={form.control}
                        name="alternateEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter Your Alternate Email*"
                                className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-[12px] !mt-0" />
                          </FormItem>
                        )}
                      />
                      <AlternatePhoneInput
                        form={form}
                        formType={formType}
                        isVisible={isVisible}
                      />
                    </>
                  )}
                </div>
                <div className="px-5">
                  <Text className="text-[20px] font-semibold col-span-full mb-5">
                    Billing Details
                  </Text>
                  <FormField
                    control={form.control}
                    name="Address"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter Your Address*"
                            className="border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 mb-3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[12px] !mt-0" />
                      </FormItem>
                    )}
                  />
                  <div
                    className={`grid ${
                      cartvalue ? "grid-cols-2" : "grid-cols-1"
                    }  gap-6 items-center`}
                  >
                    <FormField
                      name="billingCountry"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            {...field}
                            options={countryOptions}
                            isMulti={false}
                            placeholder="Select the Billing country*"
                            className="rounded-2xl h-auto py-1 font-montserrat text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
                            instanceId="select-course"
                            styles={customStyles}
                          />
                          <FormMessage className="text-[12px] !mt-0" />
                        </FormItem>
                      )}
                    />
                    {cartvalue && !proforma ? (
                      <Button
                        type="submit"
                        className="bg-green-500 text-primary-foreground h-9 hover:bg-green-500"
                      >
                        Proceed to Pay <MoveRight className="ml-3" />
                      </Button>
                    ) : (
                      ""
                    )}
                    {cartvalue && proforma ? (
                      <Button
                      // onClick={handleDownloadClick}
                      disabled={isSubmitting}
                      type="submit"
                      className="bg-green-500 text-primary-foreground h-9 hover:bg-green-500"
                    >
                      Download Proforma Invoice <MoveRight className="ml-3" />
                    </Button>
                  ) : (
                    ""
                  )}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row items-start space-x-3 space-y-0 mt-3 pl-5">
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
                      <FormMessage className="text-[12px] !mt-0 pl-12" />
                    </FormItem>
                  )}
                />
                {/* <div className="flex justify-center">
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
                </div> */}
              </form>
            </Form>
          </Container>
          <Toaster />
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSummaryForm;
