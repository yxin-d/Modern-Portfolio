import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground hover:brightness-105 active:brightness-95 shadow-[0_8px_24px_-8px_var(--color-gold)]",
        secondary:
          "border border-secondary text-foreground hover:bg-secondary/10",
        ghost: "text-foreground hover:bg-muted/60",
        outline: "border border-border text-foreground hover:border-primary hover:text-primary",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const LinkButton = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => {
  return (
    <a ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
});
LinkButton.displayName = "LinkButton";

export { Button, LinkButton, buttonVariants };
