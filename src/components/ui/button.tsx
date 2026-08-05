import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
        "bg-[var(--accent)] text-white shadow-md hover:bg-[var(--accent-hover)] hover:shadow-lg hover:-translate-y-0.5",
        outline:
        "border border-[var(--border-hover)] bg-transparent hover:bg-[var(--bg-hover)] text-[var(--text-primary)] hover:text-[var(--text-primary)]",
        secondary:
        "bg-[var(--bg-message)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]",
        ghost:
        "hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] text-[var(--text-secondary)]",
        link: "text-[var(--accent)] underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-2xl px-8 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button

        ref={ref}
        {...props} />);


  }
);
Button.displayName = "Button";

export { Button, buttonVariants };