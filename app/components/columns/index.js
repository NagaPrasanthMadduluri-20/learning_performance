"use client";

import { ColumnDef } from "@tanstack/react-table";

const columns = [
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "level",
    header: "Level",
  },
  {
    accessorKey: "role",
    header: "Suitable Course for the Role",
  },
  {
    accessorKey: "trainingcost",
    header: "Certification Training Cost",
  },
];

export { columns };
