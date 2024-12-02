import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Text from "@/components/Text";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const OrderSummaryCard = () => {
  return (
    <>
      <Card className="text-left">
        <CardHeader className="text-left bg-lightbackground font-semibold text-[23px] p-3">
          Order Summary
        </CardHeader>
        <CardContent className="p-2">
          <div className="flex justify-between items-center">
            <Text className="font-semibold text-[20px]"> Course Value </Text>
            <Text className="font-semibold text-[20px]"> USD 1500 </Text>
          </div>

          <div className="flex justify-between items-center mt-2">
            <Text className="font-semibold ">Processing Fee (4%) </Text>
            <Text className="font-semibol line-through"> 41.4</Text>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between items-center">
            <Text className="font-semibold text-[20px]"> Order Total </Text>
            <Text className="font-semibold text-[20px] text-secondary dark:text-primary-foreground">
              {" "}
              USD 1500{" "}
            </Text>
          </div>

          <div className="flex justify-between items-center mt-2 mb-4">
            <Text className="font-semibold ">Payment Status </Text>
            <Text className="font-semibol text-[#de0a26] dark:text-primary-foreground">
              {" "}
              Payment Pending
            </Text>
          </div>
          {/* <div className="flex justify-between items-center mt-2 mb-4">
                <Text className="font-semibold ">Payment Due date </Text>
                <Text className="font-semibol text-[#de0a26] dark:text-primary-foreground"> 2024-12-09</Text>
              </div> */}
        </CardContent>
        <div className="bg-gray-300 dark:bg-lightbackground p-4">
          <p className="text-[12px] mb-2">
            *Read our Terms and conditions for{" "}
            <Link href="/terms-and-conditions "  target="blank" className="underline">
              {" "}
              Cancellation,
            </Link>{" "}
            <Link href="/terms-and-conditions "  target="blank" className="underline">
              Refund
            </Link>{" "}
            and{" "}
            <Link href="/terms-and-conditions "  target="blank" className="underline">
              Rescheduling
            </Link>
          </p>
          <p className="text-[12px] text-left">
            *Read our Terms and conditions for{" "}
            <Link href="/privacy-policy" target="blank" className="underline">
              {" "}
              Privacy Policy{" "}
            </Link>
          </p>
        </div>
      </Card>
    </>
  );
};

export default OrderSummaryCard;
