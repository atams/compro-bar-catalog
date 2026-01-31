import { Loader2 } from "lucide-react";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      children,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary:
        "bg-secondary text-primary hover:bg-secondary/90 shadow-lg hover:shadow-secondary/20",
      secondary: "bg-primary text-secondary hover:bg-primary/90 shadow-lg",
      outline: "border-2 border-secondary text-secondary hover:bg-secondary/10",
      ghost: "text-secondary hover:bg-secondary/10",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
          variants[variant],
          sizes[size],
          className,
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
