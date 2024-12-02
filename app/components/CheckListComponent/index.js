/* eslint-disable react/display-name */
// import React from "react";
// import { CircleCheck } from "lucide-react";
// import { cn } from "@/lib/utils"; // Assuming you have a cn utility function
// import Text from "@/components/Text";

// const CheckList = ({
//   heading,
//   description,
//   items,
//   icon: DefaultIcon,
//   columns = 2,
//   className,
// }) => {
//   // If no DefaultIcon is provided, use CircleCheck as fallback
//   DefaultIcon = DefaultIcon || CircleCheck;
//   return (
//     <div className="w-full">
//       {heading && (
//         <Text variant="h2" className="mb-6 !text-[24px]">
//           {heading}
//         </Text>
//       )}
//       {description && (
//         <Text variant="body1" className="mb-6">
//           {description}
//         </Text>
//       )}
//       <div
//         className={cn(
//           "grid gap-4",
//           columns === 2 && "sm:grid-cols-2",
//           columns === 3 && "sm:grid-cols-3",
//           className
//         )}
//       >
//         {items.map((item, index) => {
//           const ItemIcon = item.icon || DefaultIcon;
//           return (
//             <>
//               <div
//                 key={index}
//                 className={cn(
//                   "flex items-start space-x-2"
//                 )}
//               >
//                 <ItemIcon className="flex-shrink-0 w-5 h-5 text-blue-500 " />

             
//                 <Text variant="body1">{item.list}</Text>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CheckList;


import React from "react";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Text from "@/components/Text";
import Image from "next/image";

const CheckList = ({
  heading,
  description,
  items,
  icon: DefaultIcon,
  columns = 2,
  className,
  variant = "default",
}) => {
  DefaultIcon = DefaultIcon || CircleCheck;

  const renderListItem = (item, index) => {
    let IconComponent;
    if (variant === "default") {
      IconComponent = item.icon || DefaultIcon;
    } else if (variant === "customIcon") {
      if (typeof item.lists_icon === "string") {
        // If lists_icon is a string, assume it's an image URL
        IconComponent = () => (
          <Image
            src={item.lists_icon}
            alt={`Icon for ${item.sub_heading || item.list}`}
            width={50}
            height={50}
            className="object-contain"
          />
        );
      } else {
        // If lists_icon is not a string, assume it's an icon component
        IconComponent = item.lists_icon;
      }

    } else if (variant === "numbered") {
      IconComponent = () => (
        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-blue-300  bg-transparent flex items-center justify-center">
          <Text className="text-[12px] font-semibold"> {index + 1} </Text>
        </div>
      );
    }

    return (
      <div key={index} className="flex items-start space-x-2">
        {IconComponent && <IconComponent className="flex-shrink-0 w-5 h-5 text-blue-500" />}
        <div className="flex flex-col">
        {item.sub_heading && (<Text variant="body1" className="font-semibold text-[16px]">{item.sub_heading} </Text>)}
        <Text variant="body1">{item.list}</Text>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {heading && (
        <Text variant="h2" className="mb-6 !text-[24px]">
          {heading}
        </Text>
      )}
      {description && (
        <Text variant="body1" className="mb-6">
          {description}
        </Text>
      )}
      <div
        className={cn(
          "grid gap-4",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-3",
          className
        )}
      >
        {items.map((item, index) => renderListItem(item, index))}
      </div>
    </div>
  );
};

export default CheckList;