"use client";
import BrochureForm from "@/app/corporategrouptraining/BrochureForm";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WhatWeOffer = ({ whatweofferData }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { contents } = whatweofferData;
  const links = [
    { name: "IT Service Management", slug: "it-service-management" },
    {
      name: "Quality Management",
      slug: "quality-management",
    },
    {
      name: "DevOps",
      slug: "devops",
    },
    {
      name: "Project Management",
      slug: "project-management",
    },
    {
      name: "It Security and Governance",
      slug: "it-security-and-governance",
    },
    {
      name: "Quality Management",
      slug: "quality-management",
    },
  ];

  return (
    <>
    <Container>
      <Text
        variant="h2"
        className="text-[20px] text-primary dark:text-primary-foreground mb-3"
      >
        {contents.heading}
      </Text>
      <Text className="mb-5">
        Invensis Learning offers a wide range of 60+ technical and non-technical
        courses across major categories such as:
      </Text>
      {links.map((link, index) => (
        <Text key={index}>
          {" "}
          <Link
            href={link.slug}
            className="text-primary dark:text-primary-foreground font-semibold my-2"
          >
            {link.name}
          </Link>
        </Text>
      ))}
      and more....
      <Text className="mt-4">{contents.description}</Text>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-7">
          {contents.whatweoffers.map((item, index) => (
            <div key={index} className="flex items-center mb-8 mt-3">
              <Image
                src={item.List_image_path}
                alt=""
                width={150}
                height={150}
                className="mr-4"
              />
              <Text>{item.List_details}</Text>
            </div>
          ))}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 border-primary hover:bg-primary hover:text-primary-foreground font-semibold text-primary dark:text-primary-foreground"
                >
                  Download Brochure
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg py-0">
                <BrochureForm formType="Brochure" />
              </DialogContent>
            </Dialog>
        </div>

        <div className="col-span-5">
          <Image
            src={contents.imagePath}
            alt="imagePath"
            width={200}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
      
    </Container>
   
  </>
  );
};

export default WhatWeOffer;
