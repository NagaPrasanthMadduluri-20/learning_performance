"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import Text from "@/components/Text";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ScrollButton from "../../ScrollButton";
import BrochureForm from "@/app/corporategrouptraining/BrochureForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const StaticPageBanner = ({
  corporateData,
  additionalData,
  joinTrainerData,
  ResourcesData,
  accreditationData,
  AboutusData,
  whoweareData,
}) => {
  const { contents: corporateContent } = corporateData || {};
  const { contents: joinTrainerContent } = joinTrainerData || {};
  const { contents: ResourcesContent } = ResourcesData || {};
  const { contents: accreditationContent } = accreditationData || {};
  const { contents: AboutusContent } = AboutusData || {};
  const { contents: whoweareContent } = whoweareData || {};
  const Headings =
    corporateContent?.BannerHeading ||
    joinTrainerContent?.heading ||
    ResourcesContent?.resource_banner_primary_title ||
    accreditationContent?.BannerHeading ||
    AboutusContent?.AboutusHeading ||
    whoweareContent?.heading ||
    "";
  const secondarytitle =
    ResourcesContent?.resource_banner_secondary_title || "";
  const Description =
    corporateContent?.BannerDescription ||
    joinTrainerContent?.sub_title ||
    ResourcesContent?.resource_banner_content ||
    accreditationContent?.BannerDescription ||
    AboutusContent?.AboutusSubText ||
    whoweareContent?.description ||
    "";
  const SecondDescription = AboutusContent?.AboutusSecondSubText || "";
  const image =
    corporateContent?.bg_image ||
    joinTrainerContent?.bg_image ||
    ResourcesContent?.bg_image ||
    AboutusContent?.bg_image ||
    whoweareContent?.imagePath ||
    {};
  const imagealttext = `${
    corporateContent ? "corporatebannerimage" : "JoinTrainerbannerimage"
  }`;
  const variantType = `${corporateContent ? "outline" : "default"}`;
  const buttonContent = `${
    corporateContent
      ? "Download Brochure"
      : joinTrainerContent
      ? "Join as a Trainer"
      : ResourcesContent
      ? "Explore"
      : whoweareContent
      ? "Contact Us"
      : ""
  }`;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickBrochure = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
    <div className={`${AboutusContent ? "bg-lightbackground" : "bg-transparent"}`}>
      <Container className="py-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-10 md:items-center md:gap-x-28`}
        >
          <div
            className={`col-span-1 md:col-span-6 ${
              whoweareContent ? "order-2" : "order-1"
            }`}
          >
            <Text
              variant="h1"
              className={`text-primary dark:text-primary-foreground mb-5 ${
                ResourcesContent?.resource_banner_primary_title
                  ? "!text-[35px] font-medium"
                  : ""
              }`}
            >
              {Headings || ""}
            </Text>
            <Text
              variant="h1"
              className="text-amber-400 dark:text-primary-foreground mb-5 !text-[28px]"
            >
              {secondarytitle || ""}
            </Text>
            <Text className="leading-6">{Description || ""}</Text>
            {SecondDescription && (
              <>
                <Text className="mb-5 mt-4 leading-6">{SecondDescription}</Text>
                <Text className="mb-5 mt-4 leading-6">
                  We are ISO 9001:2015 and ISO 27001:2022 Certified,
                  demonstrating our commitment to exceptional quality management
                  and robust information security practices.
                </Text>
              </>
            )}
            {buttonContent ? (
              <ScrollButton
                variant={variantType}
                className={`border-blue-500 ${
                  corporateContent ? "text-primary" : "text-primary-foreground"
                } mt-8`}
                clickevent={corporateContent ? handleClickBrochure : ""}
                targetId={ResourcesContent ? "resourcelist" : "join-as-trainer"}
              >
                {buttonContent || ""}
              </ScrollButton>
            ) : (
              ""
            )}
            <Dialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              className="p-0"
            >
              <DialogTrigger />
              <DialogContent className="max-w-lg py-0">
                <BrochureForm formType="Brochure" />
              </DialogContent>
            </Dialog>
          </div>
          {image && (
            <div
              className={`md:flex md:col-span-4 ${
                whoweareContent ? "order-1 flex flex-col" : "order-2 hidden"
              }`}
            >
              <Image
                src={
                  !accreditationContent?.BannerBg
                    ? image
                    : `https://stagingbeta.invensislearning.com/static/images/banners/global-accrediations-vector.png`
                }
                alt={imagealttext}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </Container>
      </div>
      <Separator />
      {whoweareContent ?  "" : (
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData?.breadcrumb} />
      </Container>
      )}
    </>
  );
};

export default StaticPageBanner;
