import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, ShoppingBag, MapPin, User, Phone, Mail, FileText } from "lucide-react";
import { toast } from "sonner";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15.99;
  const total = subtotal + shipping;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate order ID
    const orderId = `USV-${Date.now().toString(36).toUpperCase()}`;

    // Clear cart and navigate to confirmation
    clearCart();
    navigate("/order-confirmation", {
      state: {
        orderId,
        items,
        subtotal,
        shipping,
        total,
        customerInfo: formData,
      },
    });

    toast.success("Order placed successfully!");
    setIsSubmitting(false);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="glass-card p-12 text-center">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Add items to your cart before checking out
              </p>
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-72 h-72 -top-36 left-1/4 animate-pulse-soft" />
        <div className="blob w-96 h-96 bottom-0 -right-48 animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      </div>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>

          <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Shipping Info */}
              <div className="lg:col-span-2">
                <div className="glass-card p-6">
                  <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Shipping Information
                  </h2>

                  <div className="grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="glass-input"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="glass-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="glass-input"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="glass-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="glass-input"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Order Notes (optional)
                      </Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="glass-input min-h-[100px]"
                        placeholder="Any special instructions..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="glass-card p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                  {/* Items */}
                  <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-1">{item.product.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.quantity} × ${item.product.price.toFixed(2)}
                          </p>
                        </div>
                        <span className="text-sm font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 space-y-3 mb-6">
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
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-lg gradient-text">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-xl h-12"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    We'll contact you to confirm payment details
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
