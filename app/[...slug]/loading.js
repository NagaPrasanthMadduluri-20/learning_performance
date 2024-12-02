import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 h-[100vh] gap-x-10 mt-7">
        <div className="col-span-7">
          <Skeleton className="h-4 w-[500px] bg-gray-400  mb-5" />
          <Skeleton className="h-4 w-[450px] bg-gray-400 mb-5" />
          <Skeleton className="h-4 w-[400px] bg-gray-400 mb-5" />
          <Skeleton className="h-4 w-[350px] bg-gray-400 mb-5" />
          <Skeleton className="h-4 w-[300px] bg-gray-400 mb-5" />
          <Skeleton className="h-4 w-[250px] bg-gray-400 mb-5" />
        </div>
        <div className="col-span-5">
          <Skeleton className="h-[400px] w-[400px] bg-gray-400" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
