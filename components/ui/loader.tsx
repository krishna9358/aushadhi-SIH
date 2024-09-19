import { Loader2 } from "lucide-react"

export default function Loader({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "w-4 h-4",
    default: "w-8 h-8",
    large: "w-12 h-12"
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-lg">
        <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} />
        <p className="mt-4 text-sm text-muted-foreground">Loading hospital data...</p>
      </div>
    </div>
  )
}