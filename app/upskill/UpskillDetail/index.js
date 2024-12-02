import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const UpskillDetail = ({ UpskillDetailPageData, additionalData }) => {
  const { contents } = UpskillDetailPageData || {};
  return (
    <>
 
        {" "}
        <Image
          src={contents.UpskillBannerImage}
          alt="upskilldetailbanner"
          width={1600}
          height={100}
          className="w-full h-[400px]"
        />
          
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
      </Container>
    </>
  );
};

export default UpskillDetail;
