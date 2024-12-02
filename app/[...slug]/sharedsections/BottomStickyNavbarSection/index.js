"use client";
import Container from "@/components/Container";
import Text from "@/components/Text";
import {
  CircleUser,
  Mail,
  MoveRight,
  Phone,
  PhoneIncoming,
} from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RequestCallBackForm from "../RequestCallBackSection";
import InquireAboutForm from "../InquireAboutFormSection";

const BottomStickyNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        // 80px is equivalent to h-20
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 w-full z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#002A5A]">
        <Container className="py-0">
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-between">
            <Dialog
              
            >
              <DialogHeader>
                <DialogTrigger>
                  <div className="flex gap-x-3 items-center hover:scale-110 cursor-pointer">
                    <span className="bg-primary xs:py-4 sm:py-3 px-3">
                      {" "}
                      <PhoneIncoming />
                    </span>
                    <Text>Request a Call Back</Text>
                  </div>
                </DialogTrigger>
              </DialogHeader>
              <DialogContent className="z-50 px-6 py-2" >
                <DialogTitle className="text-primary dark:text-primary-foreground text-center text-[24px] font-semibold">
                  Request a Call Back
                </DialogTitle>
                <RequestCallBackForm formType="Requestcallback" />
              </DialogContent>
            </Dialog>
            <div className="sm:flex gap-x-3 items-center hover:scale-110 hidden cursor-pointer">
              <span className="bg-primary py-3 px-3">
                {" "}
                <Phone />
              </span>
              <Text>+1 470-260-0084</Text>
            </div>
            <div className="md:flex gap-x-3 items-center hover:scale-110 hidden cursor-pointer">
              <span className="bg-primary py-3 px-3">
                {" "}
                <Mail />{" "}
              </span>
              <Text> contact@invensislearning.com</Text>
            </div>
            <Dialog>
              <DialogTrigger>
                <div className="flex gap-x-2 items-center py-3 px-2 mx-2 bg-secondary hover:scale-110 cursor-pointer">
                  <span>
                    {" "}
                    <CircleUser />{" "}
                  </span>
                  <Text className="xs:text-[12px]">
                    {" "}
                    Inquire about this Training{" "}
                  </Text>{" "}
                  <MoveRight />
                </div>
              </DialogTrigger>
              <DialogContent>
                <InquireAboutForm formType="InquireAboutform" />
              </DialogContent>
            </Dialog>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BottomStickyNavbar;
