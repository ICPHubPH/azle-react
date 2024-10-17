import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 overflow-hidden rounded-lg border  shadow-sm">
      <Skeleton className="h-40 w-full" /> {/* Thumbnail */}
      <div className="p-4 space-y-3">
        <div className="flex items-center space-x-3">
          <Skeleton className="h-10 w-10 rounded-full" /> {/* Avatar */}
          <Skeleton className="h-4 w-1/2" /> {/* Provider name */}
        </div>
        <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
        <Skeleton className="h-4 w-2/3" /> {/* Description line 2 */}
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-6 w-1/3" /> {/* Scholarship info */}
          <Skeleton className="h-8 w-24 rounded-md" /> {/* Button */}
        </div>
      </div>
    </div>
  )
}

export { Skeleton }