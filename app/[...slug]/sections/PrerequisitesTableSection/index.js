import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const PrerequisitesTable = ({ PrerequisitesTableData }) => {
  const { contents } = PrerequisitesTableData;
  return (
    <Container className="pt-2 mt-9">
      <Text variant="h2"> {contents.heading} </Text>
      <Text className="my-3 mb-8"> {contents.short_description}</Text>
     <div className="overflow-x-auto custom-scrollbar">
      <Table className="w-[1100px] overflow-x-auto custom-scrollbar">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] md:w-1/4 border bg-lightbackground font-semibold">  Program Name</TableHead>
            <TableHead className="border font-semibold"> Prerequisites</TableHead>
          </TableRow>
        </TableHeader>
        {contents.categoryprerequisites.map((prerequisites, index) => ( 
        <TableBody className="border" key={index}>
          <TableRow className="border">
            <TableCell className=" border bg-lightbackground py-3 text-blue-900 font-medium hover:underline">
             <Link href={prerequisites.page_slug}>{prerequisites.course_name}{" "}</Link>
            </TableCell>

            <TableCell className="text-left py-3 font-normal">
            {prerequisites.course_description}{" "}
            </TableCell>
          </TableRow>
        </TableBody>
         ))}
      </Table>
      </div>
    </Container>
  );
};

export default PrerequisitesTable;
