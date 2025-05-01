
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, wrapperClassName, ...props }, ref) => {
    return (
      <div className={cn("relative", wrapperClassName)}>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-700 bg-maverick-slate px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-inset input-inset",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
FormInput.displayName = "FormInput";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperClassName?: string;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, wrapperClassName, ...props }, ref) => {
    return (
      <div className={cn("relative", wrapperClassName)}>
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-gray-700 bg-maverick-slate px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-inset input-inset",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
FormTextarea.displayName = "FormTextarea";

export { FormInput, FormTextarea };
