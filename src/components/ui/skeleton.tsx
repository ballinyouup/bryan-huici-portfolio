import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
      <div
          className={cn('animate-pulse-2 rounded-md bg-accent', className)}
          {...props}
      />
  )
}

export { Skeleton }
