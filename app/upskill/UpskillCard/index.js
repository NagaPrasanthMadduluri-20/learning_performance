"use client";

import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import Text from "@/components/Text";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, parse } from "date-fns";
import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";
import Link from "next/link";

const UpskillCard = ({ UpskillCardData, additionalData }) => {
  return (
    <>
      <Container className="py-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
      </Container>
      <Container>
        <Text className="text-[20px] font-semibold text-center mb-5">
          List of Articles
        </Text>
        <Text className="text-center leading-7 tracking-wide">
          Have you ever wanted to learn a language, prepare for an exam or seek
          the best websites to help put your resume together? Then you have
          landed on the right page. Invensis Upskill boasts of a vast collection
          of resource libraries with meticulously curated links to give you
          access to the best content on the internet. Just pick a topic of your
          choice and start exploring.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {additionalData.UpskillCard.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
};

function ArticleCard({ article, index }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);
  const formattedDate = format(
    parse(article.date, 'dd-MM-yyyy', new Date()),
    'MMMM d, yyyy'
  )

  return (
    <div
      className={`transition-all duration-500 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="line-clamp-2 leading-8">
            {article.title}
          </CardTitle>
          <Badge className="w-fit">
          {formattedDate}
          </Badge>
        </CardHeader>
        <CardContent className="flex-grow">
          <Text
            className={`text-muted-foreground line-clamp-4`}
          >
            {article.description}
          </Text>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="w-full justify-between group"
            asChild
          >
            <Link href={`upskill/${article.slug}`}>
            Read More
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default UpskillCard;
