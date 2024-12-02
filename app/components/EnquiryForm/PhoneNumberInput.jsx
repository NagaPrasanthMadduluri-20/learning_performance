import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

export const PhoneNumberInput = ({ form, formType }) => {
  return (
    <FormField
      control={form.control}
      name="phoneNumber"
      rules={{
        required: "Phone number is required",
        validate: (value) => {
          if (!value) return "Phone number is required";
          // This uses the built-in isValidPhoneNumber function from react-phone-input-2
          const isValid = PhoneInput.isValidPhoneNumber(value);
          return isValid ? true : "Invalid phone number";
        },
      }}
      render={({ field }) => (
        <FormItem>
          {formType === "AssessmentForm" && <FormLabel>Phone Number</FormLabel>}
          <FormControl>
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
        validate: (value) => {
          if (!value) return true; // Optional field
          if (isVisible) {
            const isValid = PhoneInput.isValidPhoneNumber(value);
            return isValid ? true : "Invalid phone number";
          }
          return true;
        },
      }}
      render={({ field }) => (
        <FormItem>
          <FormControl>
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
          </FormControl>
          <FormMessage className="text-[12px] !mt-0" />
        </FormItem>
      )}
    />
  );
};
