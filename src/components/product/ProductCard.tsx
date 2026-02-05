import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.slug}`} className="block">
      <div className="product-card group">
        {/* Image */}
        <div className="product-image relative mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {discount > 0 && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center rounded-2xl">
              <span className="text-sm font-medium text-muted-foreground">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 ${
                    star <= Math.round(product.rating) ? "star-filled fill-current" : "star-empty"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>

          {/* Price and Cart */}
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
