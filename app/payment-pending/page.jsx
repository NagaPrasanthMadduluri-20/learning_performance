import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  return {
    title: 'Payment Pending -  Invensis Learning',
    description: 'Payment Pending -  Invensis Learning'
  };
  };
const PaymentPending = () => {
  return (
    <Container className="text-center h-[600px] mt-9">
      <Text className="text-[20px] font-medium">Please wait, we are awaiting for the payment confirmation.</Text>
      <Text className="my-6 text-[20px] font-medium">If the amount deducted from your account, Please write to us at: <Link href="/" className="text-blue-500"> support@invensislearning.com </Link></Text>
      <Button>Back to Home</Button>
    </Container>
  );
};

export default PaymentPending;
