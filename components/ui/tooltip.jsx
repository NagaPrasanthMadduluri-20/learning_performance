// "use client"

// import * as React from "react"
// import * as TooltipPrimitive from "@radix-ui/react-tooltip"

// import { cn } from "/lib/utils"

// const TooltipProvider = TooltipPrimitive.Provider

// const Tooltip = ({ children, ...props }) => {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <TooltipPrimitive.Root open={open} onOpenChange={setOpen} {...props}>
//       {children}
//     </TooltipPrimitive.Root>
//   )
// }

// const TooltipTrigger = React.forwardRef(({ ...props }, ref) => (
//   <TooltipPrimitive.Trigger
//     ref={ref}
//     {...props}
//     onClick={(e) => {
//       e.preventDefault()
//       e.stopPropagation()
//     }}
//   />
// ))
// TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

// const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
//   <TooltipPrimitive.Content
//     ref={ref}
//     sideOffset={sideOffset}
//     className={cn(
//       "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//       className
//     )}
//     {...props}
//   >
//     {props.children}
//     <TooltipPrimitive.Arrow className="fill-current text-popover" />
//   </TooltipPrimitive.Content>
// ))
// TooltipContent.displayName = TooltipPrimitive.Content.displayName

// export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }


import React, { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';

const Tooltip = ({ 
  children, 
  content, 
  position = 'top', 
  theme = 'light',
  delay = 0,
  className = '',
  icon = null
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  // Calculate tooltip position dynamically
  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return {};

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let newStyle = {};

    switch (position) {
      case 'top':
        newStyle = {
          top: triggerRect.top - tooltipRect.height - 10,
          left: triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2)
        };
        break;
      case 'bottom':
        newStyle = {
          top: triggerRect.bottom + 10,
          left: triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2)
        };
        break;
      case 'left':
        newStyle = {
          top: triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2),
          left: triggerRect.left - tooltipRect.width - 10
        };
        break;
      case 'right':
        newStyle = {
          top: triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2),
          left: triggerRect.right + 10
        };
        break;
    }

    // Ensure tooltip stays within viewport
    newStyle.top = Math.max(10, Math.min(newStyle.top, window.innerHeight - tooltipRect.height - 10));
    newStyle.left = Math.max(10, Math.min(newStyle.left, window.innerWidth - tooltipRect.width - 10));

    return newStyle;
  };

  // Theme variations
  const getTheme = () => {
    const themes = {
      light: 'bg-white text-black border border-gray-200 shadow-lg',
      dark: 'bg-gray-800 text-white',
      success: 'bg-green-500 text-white',
      error: 'bg-red-500 text-white'
    };
    return themes[theme] || themes.light;
  };

  // Show tooltip with delay and positioning
  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      const newStyle = calculatePosition();
      setTooltipStyle(newStyle);
      setIsVisible(true);
    }, delay);
  };

  // Hide tooltip with delay to allow interaction
  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  // Cancel hide timeout if mouse enters tooltip
  const handleTooltipMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Recalculate position when tooltip becomes visible or window resizes
  useEffect(() => {
    if (isVisible) {
      const newStyle = calculatePosition();
      setTooltipStyle(newStyle);

      const handleResize = () => {
        const updatedStyle = calculatePosition();
        setTooltipStyle(updatedStyle);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isVisible, position]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Default icon if not provided
  const TooltipIcon = icon || Info;

  // Arrow positioning based on tooltip position
  const getArrowClass = () => {
    const arrowPositions = {
      top: 'bottom-[-10px] left-1/2 -translate-x-1/2 border-t-white',
      bottom: 'top-[-10px] left-1/2 -translate-x-1/2 border-b-white',
      left: 'right-[-10px] top-1/2 -translate-y-1/2 border-l-white',
      right: 'left-[-10px] top-1/2 -translate-y-1/2 border-r-white'
    };
    return arrowPositions[position] || arrowPositions.top;
  };

  return (
    <div className="relative inline-block">
      <div 
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="inline-flex items-center cursor-pointer"
      >
        {children}
        {icon !== null && <TooltipIcon className="ml-1 text-gray-500" size={16} />}
      </div>

      {isVisible && (
        <div 
          ref={tooltipRef}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={hideTooltip}
          style={{
            position: 'fixed',
            ...tooltipStyle
          }}
          className={`
            z-50 p-2 rounded-md 
            ${getTheme()}
            ${className}
            transition-all duration-300 ease-in-out
            transform origin-center 
            scale-100 opacity-100
            relative
          `}
        >
          {/* Arrow */}
          {/* <div 
            className={`
              absolute w-0 h-0 
              border-[10px] border-transparent
              ${getArrowClass()}
            `}
          /> */}
          
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

