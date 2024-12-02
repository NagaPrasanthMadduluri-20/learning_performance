"use client";

import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/scrollElement";
import { useEffect } from "react";

const ScrollButton = ({
  variant,
  clickevent,
  className,
  targetId,
  children,
  childclassName,
}) => {
  useEffect(() => {
    // Ensure the target element exists after component mount
    const target = document.getElementById(targetId);
    if (!target) {
      console.warn(`Target element with id "${targetId}" not found.`);
    }
  }, [targetId]);

  const handleClick = () => {
    if (clickevent) {
      clickevent(); // Invoke the click event
    } else {
      scrollToElement(targetId); // Scroll if no click event is provided
    }
  };

  return (
    <Button variant={variant} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ScrollButton;
