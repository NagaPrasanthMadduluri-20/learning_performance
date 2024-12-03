import ScrollButton from "@/app/components/ScrollButton";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";

const WhyYouShouldGet = ({ WhyYouShouldGetData }) => {
  const { contents } = WhyYouShouldGetData;
  return (
    <div id="why-pmp">
    <Container className="py-2">
      <Text variant="h2" className="mb-4">
        {parse(contents.heading)}
      </Text>
      <div className="bg-[#f5f5f5] dark:bg-highlightdarkbackground">
        <div className="grid md:grid-flow-col flex-col">
          {contents.whoshouldgets?.map((item, index) => (
            <>
              <div className="flex flex-col gap-y-1 p-3">
                <div className="flex gap-x-1 items-center" key={index}>
                  <Image
                    src={
                      item.image_path ===
                        "/static/images/WhyYouShouldGet-icon2.svg" ||
                      "/static/images/WhyYouShouldGet-icon.svg" ||
                      "/static/images/WhyYouShouldGet-icon33.svg"
                        ? "/WhyYouShouldGet-icon2.svg"
                        : item.image_path
                    }
                    alt="why-you-should-get-icon"
                    width={50}
                    height={70}
                    className="max-h-[50px]"
                  />
                  <Text className="text-[20px] font-semibold">
                    {parse(item.title)}
                  </Text>
                </div>
                <div>
                  <Text className="font-semibold my-4">{item?.subTitle}</Text>
                  <Text className="gap-x-1">{parse(item.content)}</Text>
                </div>
              </div>
            </>
          ))}
        </div>
        <div
          className="mt-3 flex items-center justify-between px-3 py-2 dark:bg-detailcontrast"
          style={{
            background:
              "linear-gradient(180deg, #E1E1E1 0%, rgba(245, 245, 245, 0) 70.59%)",
            backgroundSize: "100%",
          }}
        >
          <div className="w-100 min-h-[50px]">
            {contents.acc_logo_url && (
              <Image
                src={contents.acc_logo_url}
                alt="Accredatation Logo"
                width={100}
                height={50}
                className="dark:bg-slate-300"
              />
            )}
          </div>
          <ScrollButton variant="secondary" targetId="schedules">
            {" "}
            Enroll For This Training <MoveRight className="ml-2" />{" "}
          </ScrollButton>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default WhyYouShouldGet;
