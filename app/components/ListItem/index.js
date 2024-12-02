import { forwardRef } from 'react';
import { cn } from "@/lib/utils";
import Text from '@/components/Text';

const List = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <ul 
      ref={ref}
      className={cn("space-y-2", className)} 
      {...props}
    >
      {children}
    </ul>
  );
});
List.displayName = "List";

const ListItem = forwardRef(({ className, title, titleClassName, children, childrenClassName, ...props }, ref) => {
  return (
    <li 
      ref={ref}
      className={cn("", className)} 
      {...props}
    >
      {/* {title && (
        <div className={cn("font-medium", titleClassName)}>
          {title}
        </div>
      )} */}
      {children && (
        <Text className={cn("text-foreground", childrenClassName)}>
          {children}
        </Text>
      )}
    </li>
  );
});
ListItem.displayName = "ListItem";

export { List, ListItem };