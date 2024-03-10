import * as React from "react"

import { cn } from "../../lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-sm border border-[var(--light--gray--40)] px-3 py-1 text-sm transition-colors file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--light--gray--60)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border focus-visible:border-[var(--light--primary---base)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
