import * as React from "react";
import cx from "@/lib/utils/cx";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        default: "",
        "featured-play":
          "max-xs:px-4 dark:bg-foreground bg-background  text-foreground dark:text-background px-14 py-4 uppercase tracking-wide text-xs rounded-md font-medium hover:shadow-2xl",
        secondary:
          "max-xs:dark:bg-foreground/25 max-xs:bg-background/25  flex items-center justify-center p-4 dark:hover:bg-foreground/25 hover:bg-background/25  rounded-md text-xs uppercase hover:shadow-xl gap-4 text-shadow-dark text-[10px]  dark:text-foreground text-background",
        icon: "p-2 rounded-xl hover:bg-background-focused max-sm:p-1 ",
      },
      size: {
        default: "",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonVariants> & {};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <button
        className={cx(buttonVariants({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
