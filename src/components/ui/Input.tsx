import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, labelClassName, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className={cn("block text-sm font-medium text-white/80 mb-2", labelClassName)}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300 backdrop-blur-sm",
            error &&
            "border-red-500 focus:ring-red-500/50 focus:border-red-500/50",
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
