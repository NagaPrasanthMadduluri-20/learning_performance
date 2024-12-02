"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const FlexibleExpandableContent = ({
  children,
  expandAfterChildIndex = 2,
  wordLimitForLastVisibleChild = 5,
  contentClassName,
  expandedText = "....readless",
  collapsedText = "....readmore",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(0, expandAfterChildIndex);
  const hiddenChildren = childrenArray.slice(expandAfterChildIndex);

  const truncateText = (text, limit) => {
    if (typeof text !== "string") return text;
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const getChildText = (child) => {
    if (typeof child === "string") return child;
    if (
      React.isValidElement(child) &&
      typeof child.props.children === "string"
    ) {
      return child.props.children;
    }
    return "";
  };

  const lastVisibleChild = visibleChildren[visibleChildren.length];
  const lastChildText = getChildText(lastVisibleChild);
  const shouldTruncateLastChild =
    lastChildText.split(" ").length > wordLimitForLastVisibleChild;

  const truncatedLastChild = shouldTruncateLastChild
    ? React.cloneElement(lastVisibleChild, {
        children: (
          <>
            <span className="">
              {truncateText(lastChildText, wordLimitForLastVisibleChild)}
            </span>
            <span className={cn("", !isExpanded && isMounted && "hidden")}>
              {lastChildText
                .split(" ")
                .slice(wordLimitForLastVisibleChild)
                .join(" ")}
            </span>
          </>
        ),
      })
    : lastVisibleChild;

  const shouldShowToggle = hiddenChildren.length > 0 || shouldTruncateLastChild;

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className={cn(
          "transition-all duration-500 ease-in-out",
          contentClassName
        )}
      >
        {visibleChildren.slice(0, -1)}
        {truncatedLastChild}
        <div
          className={cn(
            "transition-all duration-500 ease-in-out overflow-hidden",
            !isExpanded && isMounted
              ? "max-h-0 opacity-0"
              : "max-h-[1000px] opacity-100"
          )}
        >
          {hiddenChildren}
        </div>
      </div>
      {shouldShowToggle && isMounted && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          {isExpanded ? expandedText : collapsedText}
        </span>
      )}
    </div>
  );
};

export default FlexibleExpandableContent;

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { cn } from "@/lib/utils";

// const FlexibleExpandableContent = ({
//   children,
//   expandAfterChildIndex = 2,
//   wordLimitForLastVisibleChild = 5,
//   contentClassName,
//   expandedText = "...Read less",
//   collapsedText = "...Read more",
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const contentRef = useRef(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const childrenArray = React.Children.toArray(children);
//   const visibleChildren = childrenArray.slice(0, expandAfterChildIndex + 1);
//   const hiddenChildren = childrenArray.slice(expandAfterChildIndex + 1);

//   const truncateText = (text, limit) => {
//     if (typeof text !== 'string') return text;
//     const words = text.split(' ');
//     if (words.length > limit) {
//       return words.slice(0, limit).join(' ');
//     }
//     return text;
//   };

//   const getChildText = (child) => {
//     if (typeof child === 'string') return child;
//     if (React.isValidElement(child)) {
//       if (typeof child.props.children === 'string') {
//         return child.props.children;
//       } else if (Array.isArray(child.props.children)) {
//         return child.props.children.map(getChildText).join(' ');
//       }
//     }
//     return '';
//   };

//   const lastVisibleChild = visibleChildren[visibleChildren.length - 1];
//   const lastChildText = getChildText(lastVisibleChild);
//   const shouldTruncateLastChild = lastChildText.split(' ').length > wordLimitForLastVisibleChild;

//   const renderTruncatedContent = () => {
//     if (!shouldTruncateLastChild) {
//       return visibleChildren;
//     }

//     const truncatedChildren = [...visibleChildren.slice(0, -1)];
//     const truncatedLastChild = React.cloneElement(lastVisibleChild, {
//       children: (
//         <>
//           <span>
//             {truncateText(lastChildText, wordLimitForLastVisibleChild)}
//           </span>
//           <span
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300"
//           >
//             {collapsedText}
//           </span>
//           {isExpanded && (
//             <span>
//               {lastChildText.split(' ').slice(wordLimitForLastVisibleChild).join(' ')}
//             </span>
//           )}
//         </>
//       ),
//     });

//     return [...truncatedChildren, truncatedLastChild];
//   };

//   return (
//     <div className="relative">
//       <div
//         ref={contentRef}
//         className={cn(
//           "transition-all duration-500 ease-in-out",
//           contentClassName
//         )}
//       >
//         {renderTruncatedContent()}
//         <div className={cn("transition-all duration-500 ease-in-out overflow-hidden",
//                            !isExpanded && isMounted ? "max-h-0 opacity-0" : "max-h-[1000px] opacity-100")}>
//           {hiddenChildren}
//         </div>
//       </div>
//       {isExpanded && hiddenChildren.length > 0 && (
//         <span
//           onClick={() => setIsExpanded(false)}
//           className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300"
//         >
//           {expandedText}
//         </span>
//       )}
//     </div>
//   );
// };

// export default FlexibleExpandableContent;

//-----------------------------------------------------------

// "use client";
// import React, { useState, useEffect } from "react";
// import { cn } from "@/lib/utils";

// const FlexibleExpandableContent = ({
//   children,
//   expandAfterChildIndex = 3,
//   contentClassName,
//   expandedText = "....readless",
//   collapsedText = "....readmore",
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const childrenArray = React.Children.toArray(children);
//   const visibleChildren = childrenArray.slice(0, expandAfterChildIndex);
//   const hiddenChildren = childrenArray.slice(expandAfterChildIndex);

//   const shouldShowToggle = childrenArray.length > expandAfterChildIndex;

//   return (
//     <div className="relative">
//       <div
//         className={cn(
//           "transition-all duration-500 ease-in-out",
//           contentClassName
//         )}
//       >
//         {visibleChildren}
//         {shouldShowToggle && (
//           <span
//             className={cn(
//               "cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300",
//               isMounted && !isExpanded ? "inline-flex" : "hidden"
//             )}
//             onClick={() => setIsExpanded(true)}
//           >
//             {collapsedText}
//           </span>
//         )}
//       </div>
//       <div
//         className={cn(
//           "transition-all duration-500 ease-in-out",
//           isMounted && !isExpanded ? "hidden" : "block"
//         )}
//       >
//         {hiddenChildren}
//         {shouldShowToggle && isExpanded && (
//           <span
//             className={`cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300 ${
//               isMounted && !isExpanded ? "hidden" : "inline-flex"
//             }`}
//             onClick={() => setIsExpanded(false)}
//           >
//             {expandedText}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FlexibleExpandableContent;
