import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { CheckIcon, MoveLeft } from "lucide-react";
import React from "react";
import OrderSummaryForm from "../components/OrderSummaryComponents/OrderSummaryForm";
import OrderValue from "../components/OrderSummaryComponents/OrderValueComponent";
import Text from "@/components/Text";
import Image from "next/image";
import OrderSummaryAutoSlider from "../components/OrderSummaryComponents/OrderSummaryAutoSlider";
import SliderOrderSummary from "../components/OrderSummaryComponents/SliderOrderSummary";

export async function generateMetadata() {
return {
  title: 'Order Summary  |  Invensis Learning',
  description: 'Order Summary  |  Invensis Learning'
};
};

const OrderSummary = ({}) => {
  const cartvalue = true;
  const proforma = true;
  return (
    <div className="bg-[#f7f7f7] dark:bg-lightbackground">
      <Container>
        <div className="bg-background p-5 flex gap-x-64 items-center">
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground text-primary rounded-full p-2"
          >
            <MoveLeft size={15} className="mr-3" />
            go back
          </Button>
        </div>
        <div className="flex-col md:flex md:flex-row w-full md:gap-x-6 ">
          <div className="w-full md:order-2  md:w-2/5">
            <OrderValue cartvalue={cartvalue} />{" "}
           
          </div>

          <div className="w-full  md:order-1 md:w-3/5">
            <OrderSummaryForm
              formType="OrderSummaryForm"
              cartvalue={cartvalue}
              proforma={proforma}
            />
            <div className="bg-background flex items-center px-4 py-5">
              <div className="p-2 border-2 mr-4 rounded-full">2/2</div>
              <Text className="text-[20px] font-semibold text-gray-600">
                Secure Payment via Stripe Payment Gateway
              </Text>
            </div>

            <div className="flex-col sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-4 sm:my-5 py-5">
              {" "}
              <Image
                src="/ordersummary/Ordersummary-SSL-Security-and-Srtipe.webp"
                alt="ssl-security"
                width={350}
                height={400}
                className="w-full h-auto mt-2"
              />
              <Text className="text-[14px] mt-5 sm:text-[10px]">
                Transactions on this site are safe, secure & PCI-DSS complaint
                as indicated by the secure lock in your address bar. Over
                500,000+ users like you have enrolled for courses
              </Text>
            </div>
            <Image
              src="/ordersummary/Order-summary-SSP-footer.png"
              alt="summaryfooter"
              width={700}
              height={500}
            />
          </div>
          <div className="block md:hidden ">
            <SliderOrderSummary/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderSummary;
