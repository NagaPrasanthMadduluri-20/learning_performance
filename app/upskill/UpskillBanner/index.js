import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import React from "react";

const UpskillBanner = ({ UpskillPageData }) => {
  const { contents } = UpskillPageData;
  return (
    <div className="bg-[url('https://stagingbeta.invensislearning.com/static/images/banners/upskill-list-banner.svg')] bg-cover bg-no-repeat bg-center h-[250px]">
      <Container className="">
        <Text
          variant="h2"
          className="text-primary dark:text-primary-foreground"
        >
          {contents.UpskillBannerHeading}
        </Text>
        <Button className="mt-8">{contents.UpskillBannerButtonName}</Button>
      </Container>
    </div>
  );
};

export default UpskillBanner;
