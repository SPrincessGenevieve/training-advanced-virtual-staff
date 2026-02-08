"use client";

import * as React from "react";
import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import styles from "@/components/pages/styles.module.css";
type Variant = "default" | "h1" | "h2" | "p";

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  variant?: Variant;
}

const variantClass: Record<Variant, string> = {
  default: "text-sm",
  h1: `text-[2.5rem] font-semibold ${styles.H1}`,
  h2: `text-[1.1rem] font-semibold ${styles.H2}`,
  p: `text-[1rem] font-light ${styles.P}`,
};

function Label({ className, variant = "default", ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "gap-2 text-sm  text-white leading-none font-poppins font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        variantClass[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Label };
