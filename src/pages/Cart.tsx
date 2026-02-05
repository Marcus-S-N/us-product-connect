import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/cart/CartItem";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";

export default function Cart() {
  const { items, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15.99;
  const total = subtotal + shipping;

  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-80 h-80 -top-40 -left-40 animate-pulse-soft" />
        <div className="blob w-96 h-96 bottom-0 -right-48 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Start shopping to add items to your cart
              </p>
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="glass-card p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-success">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    {subtotal < 100 && (
                      <p className="text-xs text-muted-foreground">
                        Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                      </p>
                    )}
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-lg gradient-text">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full rounded-xl h-12" size="lg">
                    <Link to="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>

                  <div className="mt-4 text-center">
                    <Link
                      to="/"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
