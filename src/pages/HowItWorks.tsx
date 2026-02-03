import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Link2,
  DollarSign,
  CreditCard,
  ShoppingCart,
  Truck,
  Clock,
} from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "1. Submit Product Link",
    description:
      "Send us the URL of the product you want to order from any US retailer. You can also send a screenshot if the product doesn't have a direct link.",
  },
  {
    icon: DollarSign,
    title: "2. Price Confirmation",
    description:
      "We'll calculate the total cost including product price, service fee, and estimated shipping. You'll receive a detailed quote before proceeding.",
  },
  {
    icon: CreditCard,
    title: "3. Payment",
    description:
      "Once you approve the quote, make the payment through our secure payment methods. We accept bank transfers and popular payment apps.",
  },
  {
    icon: ShoppingCart,
    title: "4. Purchase in the US",
    description:
      "Our US-based team purchases the product from the retailer and prepares it for international shipping. We verify authenticity before shipping.",
  },
  {
    icon: Truck,
    title: "5. Delivery to Vietnam",
    description:
      "Your order is shipped to Vietnam via trusted carriers. You'll receive tracking information once the package is on its way.",
  },
];

const timelines = [
  {
    category: "Standard Items",
    description: "Clothing, cosmetics, supplements",
    duration: "2-3 weeks",
  },
  {
    category: "Medicine & Special Items",
    description: "OTC medications, regulated products",
    duration: "3-4 weeks",
  },
  {
    category: "Express Shipping",
    description: "Available for urgent orders",
    duration: "1-2 weeks",
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our simple 5-step process makes ordering authentic US products easy and hassle-free. Here's what to expect when you order with us.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-7 mt-14 h-8 w-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Estimated Delivery Times
            </h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Delivery times vary based on product type, retailer processing, and shipping method. These are estimates and not guaranteed delivery dates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelines.map((timeline) => (
              <div
                key={timeline.category}
                className="bg-background border border-border rounded-lg p-6"
              >
                <h4 className="font-semibold mb-1">{timeline.category}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {timeline.description}
                </p>
                <p className="text-lg font-bold text-primary">
                  {timeline.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Submit your order request today and our team will get back to you with a quote within 24 hours.
          </p>
          <Button asChild size="lg">
            <Link to="/request-order">Request an Order</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
