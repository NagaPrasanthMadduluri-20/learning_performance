import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { SearchBar } from "../../BannerSearchBox";
const mainData = require("../../../../data/searchData.json");

const SearchBox = ({ additionalData }) => {
  return (
    <>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
      </Container>
      <Container className="mb-10">
        <Text className="text-[30px] font-medium text-center mb-10">
          Search for Certification Courses
        </Text>
       <div className="w-[60%] mx-auto">   <SearchBar searchData={mainData.searchData} /> </div>
      </Container>
    </>
  );
};

export default SearchBox;
