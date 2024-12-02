"use client";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Text from "@/components/Text";
import Link from "next/link";

const InfoBanner = ({ InfoTabData, additionalData }) => {
  const [tab, setTab] = useState(0);

  const data = additionalData.InfoTab;
  const handleClick = (i) => {
    setTab(i);
  };

  return (
    <>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={additionalData.breadcrumb} />
      </Container>
      <Container className="py-6">
        <Text variant="h2" className="text-primary dark:text-primary-foreground !text-[30px]">
          {" "}
          INFORMATION ARTICLES{" "}
        </Text>

        <div className="grid grid-cols-10 mt-8">
          <div className="col-span-3">
            <div className="bg-background border-2 rounded-md">
              {data.tablink.map((item, index) => (
                <div key={`btn-index-${index}`}>
                  <button
                    onClick={() => handleClick(index)}
                    className={`w-full text-left px-4 py-4 text-sm font-medium leading-5 ${
                      tab === index
                        ? "dark:bg-lightbackground text-blue-600 border-r-4 border-blue-600 py-4"
                        : "hover:bg-lightbackground py-4"
                    }`}
                  >
                    {item.li_label}
                    {/* {tab === index && <ArrowRight />} */}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-7 bg-background rounded-r-xl p-6 pt-0">
            <div className="sticky top-24">
              {data.tablink.map((tabContent, tabIndex) => (
                  <div
                    key={`tab-content-${tabIndex}`}
                    className={`${
                      tab === tabIndex ? "grid" : "hidden"
                    } grid-cols-2 gap-x-4`}
                    // The following styles ensure the content is present in the DOM but not visible
                    style={{ display: tab === tabIndex ? "grid" : "none" }}
                  >
                    <Text variant="h2" className="col-span-2 text-primary dark:text-primary-foreground mb-5">
                      {" "}
                      {tabContent.li_label} Articles
                    </Text>
                    {tabContent.tab_details_li.map((item, itemIndex) => (
                      <div
                        key={`content-index-${tabIndex}-${itemIndex}`}
                        className="mb-4 border-2 shadow-lg rounded-md p-3 hover:bg-lightbackground"
                      >
                        <Link href={`info/${item.listLink}`}>
                          <p className="font-semibold cursor-pointer">
                            {item.li}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InfoBanner;
