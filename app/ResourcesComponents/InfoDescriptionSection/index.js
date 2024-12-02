"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const InfoDescription = ({ InfoData, additionalData }) => {
  const { contents } = InfoData;
  const { infoDescription } = contents;
  const pathName = usePathname();

  // Function to check if a link is active
  const isLinkActive = (articleSlug) => {
    return pathName === `/info/${articleSlug}`;
  };
  return (
    <>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
      </Container>
      <Container className="py-3">
        <div className="grid grid-cols-10 gap-x-10">
          <div className="col-span-10 md:col-span-7">
            <div
              className="info-description"
              dangerouslySetInnerHTML={{ __html: infoDescription }}
            />
          </div>
          <div className="col-span-10 md:col-span-3">
            <div className="sticky top-20">
              <Text variant="h2" className="text-primary dark:text-primary-foreground mb-4">
                Related Info Articles
              </Text>
              {additionalData.relatedInfoDetail.map((article, articleindex) => (
                <div key={articleindex}>
                  <Link href={`/info/${article.page_slug}`}>
                    <Text 
                      className={`mb-3 cursor-pointer transition-colors duration-200
                        ${isLinkActive(article.page_slug) 
                          ? "text-primary dark:text-primary-foreground" 
                          : "text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-foreground/65"
                        }`}
                    >
                      {article.link_title}
                    </Text>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InfoDescription;
