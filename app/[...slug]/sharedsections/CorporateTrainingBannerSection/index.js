import ScrollButton from "@/app/components/ScrollButton";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";

const CorporateTrainingBanner = ({
  CorporateTrainingBannerData,
  additionalData,
}) => {
  const { contents } = CorporateTrainingBannerData;
  return (
    <div className="bg-[#2d222ecc] md:bg-[url('/corporate_newbg.jpg')]">
      <Container>
        <div className="grid grid-cols-10">
          <div className="md:col-span-4"></div>
          <div className="col-span-full md:col-span-6">
            {contents?.primaryHeading ? (
              <Text
                variant="h2"
                className="text-primary-foreground mb-3 md:mb-8 font-bold"
              >
                {contents?.primaryHeading}{" "}
              </Text>
            ) : (
              <Text
                variant="h2"
                className="text-primary-foreground mb-3 md:mb-8 font-bold"
              >
                {" "}
                {`Organize Corporate Group ${additionalData?.page_name} Training for your teams around the world`}{" "}
              </Text>
            )}
            {contents?.content ? (
              <Text> {contents?.content} </Text>
            ) : (
              <>
                {" "}
                <Text className="text-primary-foreground mb-4 md:mb-10">
                  {" "}
                  Invensis learning provides In person and live virtual
                  instructor-led corporate training program customized for
                  enterprise teams who wish to train their employees on specific
                  aspects of their job processes or responsibilities. The
                  corporate training by our expert certified trainers will
                  enhance your learning curve and enable your teams to utilize
                  their skills to meet the industry standards.
                </Text>
                <ul className="text-primary-foreground list-disc ml-5 mb-5 text-[14px]">
                  <li>Experienced &amp; Industry Specific Trainers</li>
                  <li>24x7 Support</li>
                  <li>
                    Deliver Sessions across continents via In Person/ Virtual
                    Instructor-Led Training
                  </li>
                  <li>Customized Trainings</li>
                </ul>
                <ScrollButton variant="secondary" targetId="inquireform">
                  Request for Corporate Group Training{" "}
                  <MoveRight className="ml-3 items-center" />{" "}
                </ScrollButton>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CorporateTrainingBanner;
