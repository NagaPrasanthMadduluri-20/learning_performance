import Container from "@/components/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const BreadCrumb = ({ BreadCrumbData }) => {
  //console.log("Breadcrumb", BreadCrumbData);
  return (
    <Container className="py-3">
      <Breadcrumb>
        <BreadcrumbList className="text-[10px] font-bold opacity-75">
          {BreadCrumbData?.map((item, index) => (
            <React.Fragment key={index}>
              {index < BreadCrumbData.length - 1 ? (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold">{item.name}</BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </Container>
  );
};

export default BreadCrumb;
