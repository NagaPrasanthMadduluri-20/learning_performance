import React, { lazy, Suspense } from "react";

import "react-phone-input-2/lib/style.css";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

// Dynamically import PhoneInput only when needed
const PhoneInput = lazy(() => import("react-phone-input-2"));

export const PhoneNumberInput = ({ form, formType }) => {
  return (
    <FormField
      control={form.control}
      name="phoneNumber"
      rules={{
        required: "Phone number is required",
        validate: async (value) => {
          if (!value) return "Phone number is required";

          // Dynamically import and validate
          try {
            const { isValidPhoneNumber } = await import("react-phone-input-2");
            const isValid = isValidPhoneNumber(value);
            return isValid ? true : "Invalid phone number";
          } catch (error) {
            return "Phone number validation failed";
          }
        },
      }}
      render={({ field }) => (
        <FormItem>
          {formType === "AssessmentForm" && <FormLabel>Phone Number</FormLabel>}
          <FormControl>
            <Suspense
              fallback={
                <input
                  placeholder="Enter phone number"
                  className="w-full border-2 border-gray-200 h-11 rounded-md"
                />
              }
            >
              <PhoneInput
                country={"us"} // default country
                countryCodeEditable={false}
                enableSearch={true}
                placeholder="Enter phone number"
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  className:
                    "border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 w-full pl-11 outline-0 rounded-md",
                }}
                containerClass="w-full"
                buttonClass=""
                dropdownClass=""
                searchClass="!w-full"
                onChange={(value, country, e, formattedValue) => {
                  field.onChange(value);
                  field.onChange(formattedValue);
                }}
                value={field.value}
              />
            </Suspense>
          </FormControl>
          <FormMessage className="text-[12px] !mt-0" />
        </FormItem>
      )}
    />
  );
};

export const AlternatePhoneInput = ({ form, formType, isVisible }) => {
  return (
    <FormField
      control={form.control}
      name="alternatePhone"
      rules={{
        validate: async (value) => {
          if (!value) return true; // Optional field

          if (isVisible) {
            try {
              const { isValidPhoneNumber } = await import(
                "react-phone-input-2"
              );
              const isValid = isValidPhoneNumber(value);
              return isValid ? true : "Invalid phone number";
            } catch (error) {
              return "Phone number validation failed";
            }
          }
          return true;
        },
      }}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Suspense
              fallback={
                <input
                  placeholder="Enter alternate phone number"
                  className="w-full border-2 border-gray-200 h-11 rounded-md"
                />
              }
            >
              <PhoneInput
                country={"us"}
                countryCodeEditable={false}
                enableSearch={true}
                placeholder="Enter alternate phone number"
                inputProps={{
                  name: "alternatePhone",
                  className:
                    "border-2 border-gray-200 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 py-0 w-full pl-11 rounded-md",
                }}
                containerClass="w-full"
                buttonClass="!border-2 !border-gray-200"
                dropdownClass=""
                searchClass="!w-full"
                onChange={(value, country, e, formattedValue) => {
                  field.onChange(formattedValue);
                }}
                value={field.value}
              />
            </Suspense>
          </FormControl>
          <FormMessage className="text-[12px] !mt-0" />
        </FormItem>
      )}
    />
  );
};
