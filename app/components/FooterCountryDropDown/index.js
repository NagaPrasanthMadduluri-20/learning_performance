import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { appData } from "@/data/appData";
import { useRouter } from "next/navigation";
const FooterCountryDropDown = () => {
  const router = useRouter();

  const handleValueChange = (value) => {
    const selectedCountry = appData?.countries?.find(
      (country) => country.name === value
    );
    if (selectedCountry) {
      router.push(`/${selectedCountry.code}`);
    }
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-44 bg-transparent focus:ring-0 focus:ring-offset-0 h-8">
        <SelectValue placeholder="Select a Country" />
      </SelectTrigger>
      <SelectContent className="bg-slate-200">
        {appData?.countries?.map((country, countryIndex) => (
          <SelectItem key={countryIndex} value={country.name} className="cursor-pointer">
            {country.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FooterCountryDropDown;
