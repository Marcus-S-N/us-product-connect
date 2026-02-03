import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pill,
  Shirt,
  Sparkles,
  Heart,
  ShieldCheck,
  DollarSign,
  Package,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: Pill,
    title: "OTC Medicine",
    description: "Over-the-counter medications from trusted US pharmacies",
  },
  {
    icon: Heart,
    title: "Supplements",
    description: "Vitamins, minerals, and health supplements",
  },
  {
    icon: Shirt,
    title: "Clothing & Shoes",
    description: "Fashion from popular US brands and retailers",
  },
  {
    icon: Sparkles,
    title: "Cosmetics",
    description: "Skincare, makeup, and beauty products",
  },
];

const steps = [
  {
    number: "1",
    title: "Send Product Link",
    description: "Share the link to the product you want to order",
  },
  {
    number: "2",
    title: "We Purchase in the US",
    description: "Our team buys the authentic product from US retailers",
  },
  {
    number: "3",
    title: "Deliver to Vietnam",
    description: "We ship directly to your address in Vietnam",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "US-Based Purchasing",
    description: "Products sourced directly from legitimate US retailers",
  },
  {
    icon: Package,
    title: "Authentic Products",
    description: "100% genuine items with original packaging",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear breakdown of costs with no hidden fees",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Buy Authentic US Products,
            <br />
            Delivered to Vietnam
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We help customers in Vietnam order US medicine, supplements, clothing, and cosmetics.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link to="/request-order">
              Request an Order
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What You Can Order */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What You Can Order
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.title} className="text-center border-border">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Summary */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/how-it-works"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              View details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-success/10">
                    <point.icon className="h-5 w-5 text-success" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Submit your order request and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to="/request-order">Request an Order</Link>
            </Button>
            <div className="flex items-center gap-4">
              <a
                href="https://zalo.me/your-zalo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <MessageCircle className="h-5 w-5" />
                Zalo
              </a>
              <a
                href="https://wa.me/your-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Phone className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
