
import { cn } from "@/lib/utils";
import React from "react";


const Text = ({ variant = "body1", children, className, ...props }) => {
  const variants = {
    h1: "text-[24px] font-bold md:text-[30px] lg:text-[30px]",
    h2: "text-[22px] font-semibold md:text-[24px] lg:text-[24px]",
    h3: "text-[23px] font-semibold md:text-[23px] lg:text-[23px]",
    h4: "text-xl font-semibold md:text-2xl lg:text-3xl",
    body1: "text-[14px] font-medium",
    b: "text-[16px] font-semibold",
    body2: "text-sm",
    div: "text-[14px] font-medium"
  };

  const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    body1: "p",
    b: "p",
    body2: "p",
    div: "div"
  };

  const Tag = tags[variant];
  const variantClasses = variants[variant];

  return (
    <Tag className={cn(variantClasses, className)} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
