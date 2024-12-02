import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { CircleCheck, Mail } from "lucide-react";
import React from "react";
import StayConnected from "../ResourcesComponents/StayConnected";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrderDetails from "../components/ThankyoupageComponents/OrderDetails";

export async function generateMetadata() {
  return {
    title: "Proforma Success -  Invensis Learning",
    description: "Proforma Success  -  Invensis Learning",
  };
}

const ProformaSuccess = () => {
  return (
    <Container className="text-center relative">
      <div className="bg-[#3f51b5] animate-ping rounded-full w-14 h-14 absolute left-[44.5%] md:left-[47.5%] top-[68px] z-0"></div>
      <Mail size={100} fill="#3f51b5" stroke="#fff" className="mx-auto z-10" />
      <Text variant="h1" className="text-[#3f51b5] !text-[40px]">
        Proforma Invoice Sent
      </Text>

      <Text className=" text-[24px] font-medium">
        The Proforma Invoice has been sent to your registered Email id:{" "}
        <b> nbkjbjk@gmail.com</b>
      </Text>
      <Text className="text-[18px] font-medium my-5">
        While we await your payment, we have reserved your spot for this{" "}
        <b> PMP Certification </b> training on{" "}
        <b>14th, 15th, 21st, 22nd Dec-2024</b>. Your participation will be
        confirmed upon the completion of payment.
      </Text>

      <Card>
        <CardHeader className="bg-lightbackground p-2 md:px-28">
          <CardTitle className="flex flex-col md:flex-row  justify-between text-[20px] font-semibold">
            {" "}
            <span>
              Your payment Options{" "}
              <span className="text-secondary block md:hidden">&</span> Amount:{" "}
            </span>{" "}
            <span className="text-secondary">
              USD 1196 <span className="text-foreground"> Due date:</span>
              2024-12-09
            </span>{" "}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row justify-between text-left">
          <p className="px-10 py-5">
            <span className="text-primary font-semibold block">
              Option 1: Online Payment{" "}
            </span>
            Please check your registered email (nbkjbjk@gmail.com) for the
            Proforma Invoice. Look for the secure payment link inside.
          </p>
          <Separator
            className="bg-gray-400 w-[1px] mx-10 mt-10 h-16 hidden md:flex"
            orientation="vertical"
          />
          <p className="px-10 py-5">
            <span className="text-primary font-semibold block">
              {" "}
              Option 2: Bank/Wire Transfer{" "}
            </span>{" "}
            Please review the Proforma Invoice in your email for the wire/bank
            transfer details required to complete the payment.
          </p>
        </CardContent>
      </Card>
      <Text className="text-[12px] text-gray-600 underline my-5">
        Note: In case you do not find our email in your inbox, please check your
        spam folder and whitelist the domain for better communication.
      </Text>
      <Button
        variant="outline"
        className="p-6 text-[18px] rounded-sm bg-background hover:text-primary text-primary border-blue-500 xs:mt-4 sm:mt-0 my-3"
      >
        View OrderDetails
      </Button>

      <div className="flex items-center justify-center gap-x-5 ">
        <Text className="text-[13px] font-bold mt-4">Follow us on : </Text>{" "}
        <StayConnected />
      </div>
      <Separator className="my-6" />
      <OrderDetails />
    </Container>
  );
};

export default ProformaSuccess;
