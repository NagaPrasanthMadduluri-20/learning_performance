import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResourcesList = () => {
  const ResourcesListComponent = [
    {
      title: "Webinars",
      image:
        "https://stagingbeta.invensislearning.com/static/images/resources/icons/webinar.svg",
      href: "/webinars",
    },
    {
      title: "Blog",
      image:
        "https://stagingbeta.invensislearning.com/static/images/resources/icons/article.svg",
      href: "/blog",
    },
    {
      title: "Info",
      image:
        "https://stagingbeta.invensislearning.com/static/images/resources/icons/article.svg",
      href: "/info",
    },
    {
      title: "Assessments",
      image:
        "https://stagingbeta.invensislearning.com/static/images/resources/icons/article.svg",
      href: "/assessments",
    },
  ];
  return (

    <Container id="resourcelist">
      <div className="grid flex-col sm:grid-cols-2 md:grid-cols-3 gap-20">
        {ResourcesListComponent.map((Resource, index) => (
          <div className="border-2 text-center relative group" key={index}>
            <Link href={Resource.href}>
              <div className="absolute -top-12 right-[35%] sm:right-[40%] md:right-28 flex justify-center items-center bg-background rounded-full p-5 shadow-lg w-24 h-24">
                <Image
                  src={Resource.image}
                  alt={Resource.title}
                  width={30}
                  height={30}
                  className="w-full h-auto"
                />
              </div>
              <Text className="p-4 mt-12 text-[18px] font-semibold">
                {Resource.title}
              </Text>
              <Text className="p-4">
                Be part of exclusive webinars delivered by experts across
                various industry sectors
              </Text>
              <Button className="bg-lightbackground w-full text-foreground group-hover:bg-primary group-hover:text-primary-foreground rounded-none h-11">
                {" "}
                Explore{" "}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ResourcesList;
