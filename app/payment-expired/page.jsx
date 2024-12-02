import React from "react";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";

export async function generateMetadata() {
  return {
    title: 'Payment Expired -  Invensis Learning',
    description: 'Payment Expired -  Invensis Learning'
  };
  };

const PaymentExpired = () => {
  return (
    <Container className="text-center relative h-[700px]">
      <TriangleAlert
        size={80}
        fill="#de0a26"
        stroke="#fff"
        className="mx-auto z-10"
      />
      <Text variant="h1" className="!text-[40px]">
        Payment Link Expired
      </Text>
      <Text className="my-6 text-[20px] font-medium">
        We're sorry, but the payment link you are trying to access has expired.
      </Text>
      <Text className="my-6 text-[16px] font-medium">
        If you intended to make a payment, please generate a new payment link or
        contact our support team for assistance.
      </Text>
      <Text className="my-6 text-[14px] font-medium">
        Please write to us at: contact{" "}
        <Link href="/" className="text-primary dark:text-primary-foreground">
          @invensislearning.com
        </Link>
      </Text>
      <Button>
        {" "}
        <Link href="/">Back to Home </Link>
      </Button>
    </Container>
  );
};

export default PaymentExpired;
