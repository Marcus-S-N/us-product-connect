import { CartItem as CartItemType } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="glass-card p-4 flex gap-4">
      {/* Image */}
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="text-xs text-muted-foreground">{item.product.category}</p>
            <h3 className="font-medium text-sm line-clamp-1">{item.product.name}</h3>
          </div>
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="text-muted-foreground hover:text-destructive transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="qty-button"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="qty-button"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Price */}
          <span className="font-semibold">
            ${(item.product.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
