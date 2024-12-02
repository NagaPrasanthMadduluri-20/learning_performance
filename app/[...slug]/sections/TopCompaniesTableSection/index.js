import Container from "@/components/Container";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Text from "@/components/Text";

const TopCompanies = ({ TopCompaniesData, additionalData }) => {
  const { contents } = TopCompaniesData;
  return (
    <>
      {contents ? (
        <>
          <Text variant="h2">{contents?.heading}</Text>
          <Table className="border mt-5">
            <TableHeader>
              <TableRow className="border-b-0 bg-slate-600 ">
                <TableHead className="text-primary-foreground font-semibold">
                  Job Tittle
                </TableHead>
                <TableHead className="text-primary-foreground font-semibold">
                  Company Name
                </TableHead>
                <TableHead className="text-primary-foreground font-semibold">
                  Location
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contents?.topcompanieshirings?.map((company, index) => (
                <TableRow
                  key={index}
                  className="border-b-0 odd:bg-white even:bg-gray-300"
                >
                  <TableCell className="font-semibold">
                    {company?.job_title}
                  </TableCell>
                  <TableCell>{company?.company_name}</TableCell>
                  <TableCell>{company?.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Text className="mt-4"><b>Note : </b>{contents?.note}</Text>
        </>
      ) : null}
    </>
  );
};

export default TopCompanies;
