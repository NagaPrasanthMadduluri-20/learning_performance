import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Printer, RotateCw } from "lucide-react";
import React from "react";
import OrderDetailCard from "../OrderDetailCard";
import OrderSummaryCard from "../OrderSummaryCard";

const OrderDetails = () => {
  return (
    <Container className="py-3 md:py-8">
      <div className="flex flex-col md:flex-row justify-between">
        <Text className="text-[23px] font-bold text-left">
          Order ID:{" "}
          <span className="text-primary dark:text-primary-foreground">
            {" "}
            #INO03678{" "}
          </span>{" "}
        </Text>
        <div className="flex gap-x-3 mt-3 md:mt-0">
          <Button
            variant="outline"
            className="rounded-full hover:bg-primary hover:text-primary-foreground border-2"
          >
            <Printer size={15} className="mr-2" />
            print
          </Button>
          <Button
            variant="outline"
            className="rounded-full hover:bg-primary hover:text-primary-foreground border-2"
          >
            <Mail size={15} className="mr-2" />
            Resend
          </Button>
          <Button
            variant="outline"
            className="rounded-full hover:bg-primary hover:text-primary-foreground border-2"
          >
            <RotateCw size={15} className="mr-2" />
            Refund Policy
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-12 gap-x-10 mt-10">
        <div className="col-span-1 md:col-span-7">
          <OrderDetailCard />
          <Card className="text-left mt-5">
          <CardHeader className="text-left bg-lightbackground font-semibold text-[23px] p-3">
            Registration Details
          </CardHeader>
          <CardContent className="p-2">
            <Text className="text-[17px] font-normal mb-2">Naga Prasanth</Text>
            <Text className="text-[17px] font-normal mb-2">
              nagaprasanth@gmail.com
            </Text>
            <Text className="text-[17px] font-normal mb-2">90897867564</Text>
            <Text className="text-[17px] font-normal">city, Country</Text>
          </CardContent>
        </Card>
        </div>
        <div className="col-span-1 mt-5 md:mt-0 md:col-span-5">
          <OrderSummaryCard />
        </div>
       
      </div>
    </Container>
  );
};

export default OrderDetails;
