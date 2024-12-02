import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import React from "react";
import StayConnected from "../ResourcesComponents/StayConnected";
import { Separator } from "@/components/ui/separator";
import OrderDetails from "../components/ThankyoupageComponents/OrderDetails";

export async function generateMetadata() {
  return {
    title: 'Payment Success -  Invensis Learning',
    description: 'Payment Success -  Invensis Learning'
  };
  };

const PaymentSuccess = () => {
  return (
    <Container className="text-center relative">
      <div className="bg-[#00c24e] animate-ping rounded-full w-14 h-14 absolute left-[44.5%] md:left-[47.5%] top-[68px] z-0"></div>
      <CircleCheck
        size={100}
        fill="#00c24e"
        stroke="#fff"
        className="mx-auto z-10"
      />
      <Text variant="h1" className="text-green-400 !text-[40px]">
        Payment Successful
      </Text>
      <Text variant="div" className="my-3 text-[26px] font-medium">
        Your transaction of{" "}
        <span className="text-secondary dark:text-primary-foreground">
          USD 1196{" "}
        </span>
        was successful!
      </Text>
      <Text className=" text-[26px] font-medium">
        Your enrollment is Confirmed for <b> PMP Certification Course</b>
      </Text>
      <div className="bg-lightbackground p-4 my-3 max-w-[800px] mx-auto font-medium">
        A detailed enrollment confirmation will be sent to your registered email
        shortly. The Invoice will be sent to your registered email ID on
        completion of the training.Keep an eye on your inbox.
      </div>
      <Text className="text-[12px] text-gray-600 underline my-3">
        Note: In case you do not find our email in your inbox, please check your
        spam folder and whitelist the domain for better communication.
      </Text>
      <Button
        variant="outline"
        className="p-6 text-[18px] rounded-sm bg-background hover:text-primary text-primary border-blue-500 xs:mt-4 sm:mt-0"
      >
        Go Back to Home
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

export default PaymentSuccess;
