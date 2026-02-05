import { Link } from "react-router-dom";
import { Category } from "@/types/product";
import { Pill, Heart, Shirt, Sparkles, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Pill,
  Heart,
  Shirt,
  Sparkles,
};

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Pill;

  return (
    <Link to={`/category/${category.slug}`} className="block">
      <div className="glass-card-hover p-6 text-center group">
        <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
