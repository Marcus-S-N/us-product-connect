import { useLocation, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, ArrowRight, Mail, Phone } from "lucide-react";
import { CartItem } from "@/types/product";

interface OrderState {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    notes?: string;
  };
}

export default function OrderConfirmation() {
  const location = useLocation();
  const orderData = location.state as OrderState | undefined;

  if (!orderData) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-80 h-80 top-1/4 -left-40 animate-pulse-soft" />
        <div className="blob w-96 h-96 -bottom-48 right-0 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-2xl">
          {/* Success Header */}
          <div className="glass-card p-8 text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-success/20 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-4">
              Thank you for your order, {orderData.customerInfo.fullName.split(" ")[0]}!
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Package className="w-4 h-4" />
              Order ID: {orderData.orderId}
            </div>
          </div>

          {/* Order Details */}
          <div className="glass-card p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            
            <div className="space-y-3 mb-4">
              {orderData.items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Qty: {item.quantity} × ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${orderData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {orderData.shipping === 0 ? (
                    <span className="text-success">Free</span>
                  ) : (
                    `$${orderData.shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                <span>Total</span>
                <span className="gradient-text">${orderData.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="glass-card p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Shipping To</h2>
            <div className="text-sm space-y-1">
              <p className="font-medium">{orderData.customerInfo.fullName}</p>
              <p className="text-muted-foreground">{orderData.customerInfo.address}</p>
              <p className="text-muted-foreground">{orderData.customerInfo.city}</p>
              <div className="flex items-center gap-4 pt-2">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  {orderData.customerInfo.email}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  {orderData.customerInfo.phone}
                </span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="glass-card p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <span>We'll send you a confirmation email with payment details</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <span>Once payment is received, we'll purchase your items from the US</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <span>Your order will be shipped to Vietnam (7-14 business days)</span>
              </li>
            </ol>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="glass-button">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link to="/">
                Continue Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
