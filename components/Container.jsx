import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ bg, children, className, id, ref }) => {
  return (
    <section id={id} ref={ref} className={cn("py-12 px-4 lg:px-0 mx-auto max-w-6xl w-full", bg, className)}>
      <div>{children}</div>
    </section>
  );
};

export default Container;
