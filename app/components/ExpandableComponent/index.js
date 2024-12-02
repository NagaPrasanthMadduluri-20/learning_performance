"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ExpandableContent = ({
  children,
  initialHeight = { mobile: "300px", desktop: "200px" },
  buttonClassName,
  contentClassName,
  expandedButtonText = "Read Less",
  collapsedButtonText = "Read More",
  showFade = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(initialHeight);
  const contentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 678);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const height = isMobile ? initialHeight.mobile : initialHeight.desktop;
      setContentHeight(
        isExpanded ? `${contentRef.current.scrollHeight}px` : height
      );
    }
  }, [isExpanded, initialHeight, isMobile]);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className={cn(
          "transition-all duration-1000 md:duration-500 ease-in-out overflow-hidden",
          contentClassName
        )}
      >
        {children}
      </div>
      <div className="-mt-1 flex justify-center">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          className={cn(
            `${expandedButtonText && "mt-4"} ${collapsedButtonText && "-mt-4"} transition-all duration-1000 md:duration-500 ease-in-out flex items-center gap-2`,
            buttonClassName
          )}
        >
          {isExpanded ? expandedButtonText : collapsedButtonText}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "transition-transform duration-300",
              isExpanded ? "rotate-180" : ""
            )}
          >
            <path
              d="M2 4L6 7L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 7L6 10L10 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        {!isExpanded && showFade && (
          <div className={cn("absolute inset-0 top-auto h-24 bg-gradient-to-t from-[#ffffff] dark:from-black to-transparent md:to-[rgba(255,255,255,0.5)]")}></div>
        )}
      </div>
    </div>
  );
};

export default ExpandableContent;
