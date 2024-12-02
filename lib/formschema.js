
import * as z from "zod";

// Base schema with common fields
const baseSchema = {
  firstname: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name cannot be more than 50 characters long" }),
  lastname: z.string().optional(),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .max(50, { message: "Email cannot be more than 50 characters long" }),
  phoneNumber: z
    .string({ required_error: "Phone Number is required" })
    .min(8, { message: "Phone Number must be at least 8 characters long" })
    .max(18, {
      message: "Phone Number cannot be more than 18 characters long",
    }),
  terms: z
    .boolean()
    .refine((val) => val === true, { message: "You must agree to the terms" }),
};

// Additional field schemas
const companyFields = {
  Company: z.string().min(1, { message: "Company is Required" }),
};
const companysizeFields = {
  SizeofComapny: z.string().min(1, { message: "Size of Company is required" }),
};

const courseFields = {
  selectedCourse: z
    .array(
      z.object({
        value: z.string().min(1, "Course value is required"),
        label: z.string().min(1, "Course label is required"),
      })
    )
    .optional()
    .nullable()
    .transform((val) => val || [])
    .refine((val) => val.length > 0, {
      message: "Please select at least one course",
    }),
};
const trainingField = {
  trainingMode: z.string().default("live-virtual-classroom"),
};
const selectOption = {
  SelectOption: z.string({
    required_error: "Please select atleast one option",
  }),
};

const contactPreferenceFields = {
  preferredContact: z.enum(["Phone", "email", "Both"]),
};

const LinkedInFields = {
  LinkedIn: z.string().min(1, { message: "Please Provide your LinkedIn URL" }),
};
const uploadCVFields = {
  uploadCV: z.string().min(1, { message: "Please Upload your Resume" }),
};
const RadioFields = {
  PrefferedOption: z.enum(["fulltime", "freelance"]),
  ReadyTravel: z.enum(["yes", "no"]),
};

const TrainingPlanFields = {
  TrainingPlan: z.enum(["30 days", "3 Months", "6 Months", "No ides"]),
};

const workPositionFields = {
  workposition: z
    .string({ required_error: "Please Select your Work Position" })
    .min(1, { message: "Please Select your Work Position" }),
};

const dropdownFields = {
  expertise: z
    .object({ value: z.string(), label: z.string() })
    .nullable()
    .refine((val) => val !== null, { message: "Please select your Expertise" }),
  experiences: z
    .object({ value: z.string(), label: z.string() })
    .nullable()
    .refine((val) => val !== null, {
      message: "Please select your Experience",
    }),
};
const CountryFields = {
  country: z.object({
    value: z.string({ 
      required_error: "Please select a country",
      invalid_type_error: "Invalid country selection" 
    }),
    label: z.string()
  }).nullable().refine(val => val !== null, {
    message: "Country is required"
  }),
};
const CityFields = {
  city: z.object({
    value: z.string({ 
      required_error: "Please select a city",
      invalid_type_error: "Invalid city selection" 
    }),
    label: z.string()
  }).nullable().refine(val => val !== null, {
    message: "City is required"
  }),
};

const billingCountryFields = {
  billingCountry: z
    .object({ value: z.string(), label: z.string() })
    .nullable()
    .refine((val) => val !== null, {
      message: "Please select an alternate country",
    }),
};

const AddressFields = {
  Address: z.string({ required_error: "Address is required" }),
};

const AlternateFields = {
 alternateEmail: z
  .string()
  .optional()
  .refine(
    (val) => val === undefined || val === "" || z.string().email().safeParse(val).success, 
    { message: "Invalid email address" }
  ),
  alternatePhone: z.string().optional(),
};

const messageField = {
  message: z
    .string()
    .min(1, { message: "Please Give your Training Requirements" }),
};

const jobtitleField = {
  jobtitle: z
    .string({ required_error: "Job Title is required" })
    .min(1, { message: "Job Title is required" }),
};

const industryFields = {
  industry: z
    .string({ required_error: "Industry is required" })
    .min(1, { message: "Industry is required" }),
};

const dateandtime = {
  date: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .nullable()
    .refine((val) => val !== null, {
      message: "Date is required",
    }),
  time: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .nullable()
    .refine((val) => val !== null, {
      message: "Please select a time for the call.",
    }),
  timezone: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .nullable()
    .refine((val) => val !== null, {
      message: "Please select a timezone.",
    }),
};

// Form-specific schemas
export const individualFormSchema = z.object({
  ...baseSchema,
  ...courseFields,
  ...trainingField,
  ...contactPreferenceFields,
  ...messageField,
});
export const corporateFormSchema = z.object({
  ...baseSchema,
  ...courseFields,
  ...trainingField,
  ...contactPreferenceFields,
  ...messageField,
  ...companyFields,
  ...companysizeFields,
  ...jobtitleField,
});
export const contactFormSchema = z.object({
  ...baseSchema,
  ...courseFields,
  ...trainingField,
  ...contactPreferenceFields,
  ...messageField,
  ...companyFields,
  ...companysizeFields,
  ...jobtitleField,
});

export const webinarFormSchema = z.object({
  ...baseSchema,
  ...companyFields,
  ...companysizeFields,
  ...industryFields,
});

export const RequestcallbackFormSchema = z.object({
  ...baseSchema,
  ...courseFields,
  ...selectOption,
  ...dateandtime,
});
export const InquireFormSchema = z.object({
  ...baseSchema,
  ...courseFields,
  ...messageField,
  ...selectOption,
});
export const AssessmentFormSchema = z.object({
  ...baseSchema,
  ...selectOption,
  ...workPositionFields,
});

export const TrainerFormSchema = z.object({
  ...baseSchema,
  ...courseFields,
  ...messageField,
  ...jobtitleField,
  ...LinkedInFields,
  ...uploadCVFields,
  ...dropdownFields,
  ...CountryFields,
  ...companyFields,
  ...companysizeFields,
});

export const OrderSummaryFormSchema = z.object({
  ...baseSchema,
  ...CountryFields,
  ...companyFields,
  ...jobtitleField,
  ...billingCountryFields,
  ...AddressFields,
  ...CityFields,
  ...AlternateFields,
});

export const BrochureFormSchema = z.object({
  ...baseSchema,
  ...TrainingPlanFields,
});

// Function to get the appropriate schema based on form name
export const getFormSchema = (formName) => {
  switch (formName) {
    case "Individual":
      return individualFormSchema;
    case "Corporate":
      return corporateFormSchema;
    case "Webinar":
      return webinarFormSchema;
    case "Requestcallback":
      return RequestcallbackFormSchema;
    case "InquireAboutform":
      return InquireFormSchema;
    case "AssessmentForm":
      return AssessmentFormSchema;
    case "TrainerForm":
      return TrainerFormSchema;
    case "OrderSummaryForm":
      return OrderSummaryFormSchema;
    case "Contact":
      return contactFormSchema;
    case "Brochure":
      return BrochureFormSchema;
    default:
      throw new Error(`Unknown form type: ${formName}`);
  }
};
