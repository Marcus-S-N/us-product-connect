import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  showCount?: boolean;
  count?: number;
  size?: "sm" | "md" | "lg";
}

export function RatingStars({ rating, showCount, count, size = "sm" }: RatingStarsProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= Math.round(rating)
                ? "text-amber-400 fill-current"
                : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-muted-foreground ml-1">({count})</span>
      )}
    </div>
  );
}
