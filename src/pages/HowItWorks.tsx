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
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Submit Product Link",
    description:
      "Send us the URL of the product you want to order from any US retailer. You can also send a screenshot if the product doesn't have a direct link.",
  },
  {
    icon: DollarSign,
    title: "Price Confirmation",
    description:
      "We'll calculate the total cost including product price, service fee, and estimated shipping. You'll receive a detailed quote before proceeding.",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description:
      "Once you approve the quote, make the payment through our secure payment methods. We accept bank transfers and popular payment apps.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase in the US",
    description:
      "Our US-based team purchases the product from the retailer and prepares it for international shipping. We verify authenticity before shipping.",
  },
  {
    icon: Truck,
    title: "Delivery to Vietnam",
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
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-80 h-80 -top-40 -right-40 animate-pulse-soft" />
        <div className="blob w-64 h-64 bottom-1/3 -left-32 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      {/* Page Header */}
      <section className="section-padding pb-8">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our simple 5-step process makes ordering authentic US products easy and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="glass-card p-6 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Estimated Delivery Times</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Delivery times vary based on product type, retailer processing, and shipping method.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {timelines.map((timeline) => (
                <div
                  key={timeline.category}
                  className="glass p-6 rounded-2xl text-center"
                >
                  <h4 className="font-semibold mb-1">{timeline.category}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {timeline.description}
                  </p>
                  <p className="text-2xl font-bold gradient-text">
                    {timeline.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Submit your order request today and our team will get back to you with a quote within 24 hours.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/request-order">
                  Request an Order
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
