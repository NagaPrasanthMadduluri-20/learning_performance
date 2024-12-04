
// import { cn } from "@/lib/utils";
// import React from "react";


// const Text = ({ variant = "body1", children, className, ...props }) => {
//   const variants = {
//     h1: "text-[24px] font-bold md:text-[30px] lg:text-[30px] ",
//     h2: "text-[22px] font-semibold md:text-[24px] lg:text-[24px]",
//     h3: "text-[23px] font-semibold md:text-[23px] lg:text-[23px]",
//     h4: "text-xl font-semibold md:text-2xl lg:text-3xl",
//     body1: "text-[14px] font-medium",
//     b: "text-[16px] font-semibold",
//     body2: "text-sm",
//     div: "text-[14px] font-medium"
//   };

//   const tags = {
//     h1: "h1",
//     h2: "h2",
//     h3: "h3",
//     h4: "h4",
//     body1: "p",
//     b: "p",
//     body2: "p",
//     div: "div"
//   };

//   const Tag = tags[variant];
//   const variantClasses = variants[variant];

//   return (
//     <Tag className={cn(variantClasses, className)} {...props}>
//       {children}
//     </Tag>
//   );
// };

// export default Text;


import { cn } from "@/lib/utils";
import React from "react";

// Text component with improved accessibility
const Text = ({ 
  variant = "body1", 
  children, 
  className, 
  ...props 
}) => {
  // Predefined text size and style classes for different variants
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

  // Mapping of variants to their corresponding HTML tags
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

  // Select the appropriate HTML tag based on the variant
  const Tag = tags[variant];
  
  // Get the corresponding CSS classes for the variant
  const variantClasses = variants[variant];

  // Add accessibility attributes for heading elements
  const headingProps = ['h1', 'h2', 'h3', 'h4'].includes(variant) 
    ? { 
        role: "heading", 
        'aria-level': variant.replace('h', '') 
      } 
    : {};

  // Ensure meaningful content for screen readers
  const processedChildren = React.Children.map(children, child => {
    // If child is an empty string, provide a screen reader-only text
    if (typeof child === 'string' && !child.trim()) {
      return <span className="sr-only">Untitled</span>;
    }
    return child;
  });

  // Render the component with combined classes and props
  return (
    <Tag 
      className={cn(variantClasses, className)} 
      {...headingProps}
      {...props}
    >
      {processedChildren}
    </Tag>
  );
};

export default Text;