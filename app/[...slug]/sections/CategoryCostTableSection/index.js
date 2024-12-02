import Container from "@/components/Container";
import React from "react";

import ExpandableContent from "@/app/components/ExpandableComponent";
import Text from "@/components/Text";
import Link from "next/link";
import { DataTable } from "@/app/components/data-table";
import { columns } from "@/app/components/columns";

const CategoryCostTable = ({ CategoryCostTableData }) => {
  const { contents } = CategoryCostTableData;

  const initialHeight = { mobile: "700px", desktop: "420px" };

  return (
    <div id= 'cost-table'>
    <Container className="pt-0">
          <ExpandableContent
          initialHeight={initialHeight}
          buttonClassName="rounded-full border border-gray-500 relative z-10 h-8 items-center hover:bg-primary hover:text-primary-foreground"
          contentClassName="mt-4"
        >
      <div className="bg-primary p-3 rounded-md">
        <div className="text-foreground rounded-md">
          <DataTable
            columns={columns}
            data={contents.categorycostdescriptiontables}
          />
        </div>
       
      </div>
      <Text className="mt-2"><b>Note:</b> {" "}The course cost is approximate and subject to change based on location and other factors. Please refer to our course page or<Link href="" className="text-blue-500"> contact our course advisors</Link>  for accurate pricing.</Text>
      </ExpandableContent>
    </Container>
    </div>
  );
};

export default CategoryCostTable;
