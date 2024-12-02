'use client'
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AssessmentsTab = ({ additionalData }) => {
  const { AssessmentTab } = additionalData;
  const [activeTab, setActiveTab] = useState('category'); 

  return (
    <div id ="Assesmentlist">
    <Container >
        <div className="flex gap-x-5">
          <Button
            variant="outline"
            className={`rounded-none border-2 border-primary font-semibold  ${activeTab === 'category' ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''}`}
            onClick={() => setActiveTab('category')}
          >
            Browse by Category
          </Button>
          <Button
            variant="outline"
            className={`rounded-none border-2 border-primary font-semibold ${activeTab === 'role' ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''}`}
            onClick={() => setActiveTab('role')}
          >
            Browse by Role
          </Button>
        </div>
        <div >
        {activeTab === 'category' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10">
            {AssessmentTab.assessment_categories?.map((category, catindex) => (
             <Link key={catindex} href={`assesments/${category.page_slug}`}>   
              <div className="relative group">
                <Image
                  src={category.icon_url}
                  alt={category.title}
                  width={400}
                  height={500}
                />
                <div className="px-10">
                <Text className="absolute bottom-24 left-10 text-primary-foreground font-semibold text-[20px]">{category.title}</Text>
                <Button className="bg-background dark:bg-transparent text-primary dark:text-primary-foreground group-hover:bg-transparent group-hover:text-primary-foreground rounded-none absolute bottom-5 w-[80%] border-2 border-white font-semibold h-12">
                    View Category
                </Button>
                </div>
              </div>
              </Link>
            ))}
          </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10">
            {AssessmentTab.assessment_roles?.map((role, catindex) => (
                   <Link key={catindex} href={`assesments/${role.page_slug}`}>   
              <div key={catindex} className="relative group">
                <Image
                  src={role.icon_url}
                  alt={role.title}
                  width={400}
                  height={500}
                />
                <div className="px-10">
                <Text className="absolute bottom-24 text-primary-foreground font-semibold text-[20px]">{role.title}</Text>
                <Button className="bg-background text-primary group-hover:bg-transparent group-hover:text-primary-foreground rounded-none absolute bottom-5 w-[70%]  md:w-[80%] border-2 border-white font-semibold h-12">
                    View Role
                </Button>
                </div>
              </div>
              </Link>
            ))}
          </div>
          )}
        </div>
    </Container>
    </div>
  );
};

export default AssessmentsTab;
