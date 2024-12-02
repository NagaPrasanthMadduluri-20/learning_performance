"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMemo } from "react";

export function DataTable({ columns, data }) {
  // Preprocess data to group by designation and calculate rowspans
  const processedData = useMemo(() => {
    const groupedData = {};
    data.forEach((row) => {
      if (!groupedData[row.designation]) {
        groupedData[row.designation] = [];
      }
      groupedData[row.designation].push(row);
    });

    const result = [];
    Object.entries(groupedData).forEach(([designation, rows]) => {
      rows.forEach((row, index) => {
        result.push({
          ...row,
          designationRowSpan: index === 0 ? rows.length : 0,
        });
      });
    });

    return result;
  }, [data]);

  const table = useReactTable({
    data: processedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md ">
      <Table className="border-none">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="font-bold bg-background mr-7 border-r-4 border-primary h-16"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="border-t-4 border-primary">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className={`${row.className}`}
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  if (
                    cell.column.id === "designation" &&
                    row.original.designationRowSpan === 0
                  ) {
                    return null;
                  }
                  return (
                    <TableCell
                      key={cell.id}
                      className={`${
                        cell.column.id === "designation"
                          ? "!bg-transparent text-primary-foreground font-semibold"
                          : "bg-background"
                      } ${
                        cell.column.id === "trainingcost" ? "font-semibold" : ""
                      }`}
                      rowSpan={
                        cell.column.id === "designation"
                          ? row.original.designationRowSpan
                          : 1
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
