import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { CircleCheck, Hourglass } from "lucide-react";
import React from "react";
import StayConnected from "../ResourcesComponents/StayConnected";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import OrderDetails from "../components/ThankyoupageComponents/OrderDetails";

export async function generateMetadata() {
  return {
    title: 'Payment Process -  Invensis Learning',
    description: 'Payment Process -  Invensis Learning'
  };
  };

const PaymentProcess = () => {
  return (
    <Container className="text-center relative">
      <Hourglass
        size={80}
        fill="#Ec7601"
        stroke="#Ec7601"
        className="mx-auto z-10"
      />
      <Text variant="h1" className="text-[#Ec7601] !text-[40px]">
        Your Payment is in Process
      </Text>
      <Text variant="div" className="my-3 text-[26px] font-medium">
        Your Payment of <span className="text-secondary"> USD 1196 </span> is
        still in process as we did not receive any response from the payment
        gateway
      </Text>
      <Text className="my-6 text-[18px] font-medium">
        Please wait for sometime or check with your bank if the transaction has
        been processed. You will get a confirmation mail if the payment has been
        received.
      </Text>
      <Button
        variant="outline"
        className="p-6 text-[18px] rounded-sm bg-background hover:text-primary text-primary border-blue-500 xs:mt-4 sm:mt-0 my-8"
      >
        Go Back to Home
      </Button>

      <div className="bg-lightbackground p-6 m-3 mx-auto font-medium max-w-[1000px]">
        <Text className="text-[16px] font-semibold text-left mb-3">
          Meanwhile here are other things what you can do:
        </Text>
        <ul className="list-disc ml-10 text-left space-y-1 text-[16px]">
          <li>Double-check your payment details and try again</li>
          <li>Ensure sufficient funds are available in your account</li>
          <li>Contact your card issuer for any potential issues</li>
          <li>
            For further assistance, please reach out to our support team at
            support{" "}
            <Link className="text-blue-500" href="/">
              @invensislearning.com
            </Link>
          </li>
        </ul>
      </div>
      <Text className="text-[12px] text-gray-600 underline my-3">
        Note: In case you do not find our email in your inbox, please check your
        spam folder and whitelist the domain for better communication.
      </Text>
      <Text className="flex items-start text-[18px] font-medium my-5">
        <CircleCheck stroke="#3f51b5" size={30} />
        As we await for this payment, we have reserved a spot for you for this
        PMP Certification on 25th, 26th, 27th, 28th Nov-2024. Your participation
        will be confirmed upon completion of the payment.
      </Text>
      <div className="flex items-center justify-center gap-x-5 ">
        <Text className="text-[13px] font-bold mt-5">Follow us on : </Text>{" "}
        <StayConnected />
      </div>
      <Separator className="my-6" />
      <OrderDetails/>
    </Container>
  );
};

export default PaymentProcess;
