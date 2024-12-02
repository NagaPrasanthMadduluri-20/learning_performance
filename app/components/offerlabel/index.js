"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/GlobalContext";
import React from "react";

const Offerlabel = () => {
  const { pageName } = useGlobalContext();
  return pageName === "PMP Certification" ? (
    <div className="bg-primary">
      <Container className="py-3">
          <div className=" block md:flex md:justify-center md:gap-x-3 md:mx-auto text-[18px] text-primary-foreground text-center">
            <div> <span className="text-orange-400 font-medium mr-1 md:mr-3">Limited Time Offer:</span> <b>Avail 10% off on this course |</b></div>
            <div>Use Coupon Code <span className="border border-dotted p-1 mx-0 md:mx-3"> INVL10 </span> <Button variant="secondary" className="h-8 ml-3 md:ml-5">Copy Code </Button></div>
          </div>
      </Container>
    </div>
  ) : "";
};

export default Offerlabel;
