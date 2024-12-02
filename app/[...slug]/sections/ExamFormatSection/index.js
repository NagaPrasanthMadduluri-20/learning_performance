import Container from "@/components/Container";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Text from "@/components/Text";

const CourseExamAndCost = ({ CourseFormatData }) => {
  const { contents } = CourseFormatData;
  return (
    <div id="exam-format">
    <Container className="">
      <Text variant="h2" className="mb-3">{contents.heading}</Text>
      <Text> {contents.description} </Text>
      {contents.courseexamandcosts.map((list, index) => (
        <Table key={index}>
          <TableBody className="border">
            <TableRow className="border">
              <TableCell className="w-1/4 border bg-lightbackground font-normal py-3">
                {list.table_left}
              </TableCell>

              <TableCell className="text-left py-3 font-semibold">{list.table_right}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </Container>
    </div>
  );
};

export default CourseExamAndCost;
