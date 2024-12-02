import DualDirectionCarouselSection from "@/app/[...slug]/sharedsections/DualDirectionCarouselSection";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const OrderSummaryAutoSlider = () => {
  return (
    <Container className="py-3 px-0">
      <Card>
        <CardContent className="py-4">
          <Text className="text-[20px] font-semibold mb-4">
          Successfully Trained Professionals From Fortune 1000 Companies
          </Text>
          <div className="bg-lightbackground pt-7">
            <DualDirectionCarouselSection ordersummary={true} />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OrderSummaryAutoSlider;
