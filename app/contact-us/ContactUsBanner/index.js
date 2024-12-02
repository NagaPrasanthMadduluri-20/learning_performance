import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactUsBanner = ({ contactPageData }) => {

  const { contents } = contactPageData;
  return (
    <>
      <div className="bg-[url('https://alpha.invensislearning.com/storage/images/static-pages-images/banners/contact-banner-bg.svg')] bg-cover bg-no-repeat bg-center h-[250px]">
        <Container className="text-center">
          <Text
            variant="h2"
            className="text-primary dark:text-primary-foreground"
          >
            {contents.ContactUsBannerHeading}
          </Text>
          <Text className="my-5">
            {contents.ContactUsBannerSubheading}
          </Text>
          <div className="flex gap-x-5 items-center justify-center">
            <Button className="mt-8">
              {contents.ContactUsBannerButtonOne}
            </Button>
            <Button className="mt-8">
              {contents.ContactUsBannerButtonTwo}
            </Button>
          </div>
        </Container>
      </div>
      {/* <Container>
        <div className="flex justify-center items-center gap-8">
          <div>
            <Image
              src={ContactCardContents?.icon}
              alt="location icon"
              width={140}
              height={200}
            />
            <Text variant="h2" className="my-5">
              {ContactCardContents?.heading}
            </Text>
            <Text>{ContactCardContents?.description}</Text>
          </div>
          <div>
            <Image
              src={ContactCardContents?.icon}
              alt="location icon"
              width={140}
              height={200}
            />
            <Text variant="h2" className="my-5">
              {ContactCardContents?.heading}
            </Text>
            <Text>{ContactCardContents?.description}</Text>
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default ContactUsBanner;
