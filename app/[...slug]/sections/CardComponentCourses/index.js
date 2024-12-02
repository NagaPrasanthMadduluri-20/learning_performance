"use client";

import { useState } from "react";

import CourseLevelCardSection from "../CourseLevelCardSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClientSideTabs = (CategoryCourseLevel) => {
  const [activeTab, setActiveTab] = useState("all");

  const getTabData = (tabName) => {
    switch (tabName) {
      case "Foundation":
        return CategoryCourseLevel.foundation || [];
      case "Intermediate":
        return CategoryCourseLevel.intermediate || [];
      case "Advanced":
        return CategoryCourseLevel.advanced || [];
      default:
        return [
          ...(CategoryCourseLevel.foundation || []),
          ...(CategoryCourseLevel.intermediate || []),
          ...(CategoryCourseLevel.advanced || []),
        ];
    }
  };

  return (
    <Tabs defaultValue="all" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger key="all" value="all">
          All
        </TabsTrigger>
        <TabsTrigger key="foundation" value="foundation">
          Foundation
        </TabsTrigger>
        <TabsTrigger key="intermediate" value="intermediate">
          Intermediate
        </TabsTrigger>
        <TabsTrigger key="advanced" value="advanced">
          Advanced
        </TabsTrigger>
      </TabsList>
      {["all", "foundation", "intermediate", "advanced"].map((tab) => (
        <TabsContent key={tab} value={tab}>
          <CourseLevelCardSection CardData={getTabData(tab)} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ClientSideTabs;
