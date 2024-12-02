'use client';

import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { appData } from "@/data/appData";
import { isValidSlug } from "@/lib/pageValidation";
import useLanguageSlug from "@/lib/useLanguageSlug";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HomepageAbout = ({ AboutInvensisLearningData }) => {
  const { contents } = AboutInvensisLearningData;
  const pathName = usePathname();
  const { lang, isValidSlug } = useLanguageSlug(pathName, appData);
  return (
    <div className="bg-none md:bg-[url('/about-us-section-image.svg')] bg-no-repeat bg-right w-full min-h-[500px]">
      <Container className="pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="md:my-auto">
            <Text variant="h2" className="mb-5">
              {" "}
              {contents.about_secondary_heading}
            </Text>
            <Text> {contents.about_content} </Text>
            <Link
              href={contents.view_more_url}
              className="text-blue-400 font-semibold"
            >
              {" "}
              Read More{" "}
            </Link>
            <div>
              <Button className="mt-7"> <Link href={!isValidSlug ? `/courses` : `/${lang}/courses`}> Explore More </Link> </Button>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default HomepageAbout;
