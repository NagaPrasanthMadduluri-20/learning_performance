import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import React from "react";
import StayConnected from "../ResourcesComponents/StayConnected";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import OrderDetails from "../components/ThankyoupageComponents/OrderDetails";


export async function generateMetadata() {
  return {
    title: 'Payment Error -  Invensis Learning',
    description: 'Payment Error -  Invensis Learning'
  };
  };

const PaymentError = () => {
  return (
    <Container className="text-center relative">
      <div className="bg-[#de0a26] animate-ping rounded-full w-14 h-14 absolute left-[44.5%] md:left-[47.5%] top-[62px] z-0"></div>
      <CircleAlert
        size={80}
        fill="#fff"
        stroke="#de0a26"
        className="mx-auto z-10"
      />
      <Text variant="h1" className="text-[#de0a26] !text-[40px]">
        Oops! Payment Unsuccessful
      </Text>
      <Text variant="div" className="my-3 text-[17px] font-medium">
        Please try again after some time.
      </Text>
      <Button
        variant="outline"
        className="p-6 text-[18px] rounded-sm bg-background hover:text-primary text-primary border-blue-500 xs:mt-4 sm:mt-0"
      >
        <Link href="/">Go Back to Home</Link>
      </Button>
      <div className="flex items-center justify-center gap-x-5 ">
        <Text className="text-[13px] font-bold mt-5">Follow us on : </Text>{" "}
        <StayConnected />
      </div>
      <Separator className="my-6" />
      <OrderDetails/>
    </Container>
  );
};

export default PaymentError;
