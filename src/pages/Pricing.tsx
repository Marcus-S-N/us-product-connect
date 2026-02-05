import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, Scale, RefreshCw, AlertTriangle, Ban, Info, ArrowRight } from "lucide-react";

const pricingItems = [
  {
    icon: DollarSign,
    title: "Service Fee",
    description:
      "15% of the product price (minimum $5). This covers purchasing, quality verification, and processing.",
  },
  {
    icon: Scale,
    title: "Shipping Cost",
    description:
      "Charged by weight. Rates vary based on package weight and shipping speed selected.",
  },
  {
    icon: RefreshCw,
    title: "Exchange Rate",
    description:
      "USD to VND exchange rate is applied at the time of price confirmation. Transparent, market-based rates.",
  },
];

const prohibitedItems = [
  "Prescription medications (requires valid US prescription)",
  "Controlled substances",
  "Weapons and ammunition",
  "Tobacco products",
  "Live animals and plants",
  "Counterfeit goods",
  "Hazardous materials",
];

const policies = [
  {
    icon: RefreshCw,
    title: "Refund Policy",
    content:
      "Full refund if we cannot source the product. If the product is available but you cancel after purchase, a 20% restocking fee applies. No refunds after shipping.",
  },
  {
    icon: AlertTriangle,
    title: "Customs & Import Duties",
    content:
      "Customers are responsible for any customs duties or import taxes imposed by Vietnamese authorities. We declare accurate values and cannot guarantee customs clearance.",
  },
  {
    icon: Info,
    title: "Product Authenticity",
    content:
      "We only purchase from authorized US retailers and provide proof of purchase. We are not responsible for manufacturer defects but will assist with warranty claims where possible.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-96 h-96 -top-48 -left-48 animate-pulse-soft" />
        <div className="blob w-80 h-80 bottom-1/4 -right-40 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      {/* Page Header */}
      <section className="section-padding pb-8">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Pricing & Policies
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent pricing with no hidden fees. Review our policies before placing an order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl font-bold mb-6">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {pricingItems.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Example Calculation */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Example Calculation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="glass p-4 rounded-xl text-center">
                <p className="text-muted-foreground mb-1">Product</p>
                <p className="text-xl font-bold">$100</p>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <p className="text-muted-foreground mb-1">Service (15%)</p>
                <p className="text-xl font-bold">$15</p>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <p className="text-muted-foreground mb-1">Shipping (1kg)</p>
                <p className="text-xl font-bold">~$20</p>
              </div>
              <div className="glass p-4 rounded-xl text-center bg-primary/10">
                <p className="text-muted-foreground mb-1">Total</p>
                <p className="text-xl font-bold gradient-text">~$135</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              + applicable customs duties
            </p>
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
                <Ban className="h-5 w-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Prohibited Items</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              We cannot purchase or ship the following items due to legal restrictions:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {prohibitedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <span className="text-destructive mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl font-bold mb-6">Policies</h2>
          <div className="space-y-4">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <policy.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{policy.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{policy.content}</p>
              </div>
            ))}
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
                Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact us if you have any questions about pricing or policies.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/request-order">
                    Request an Order
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full glass-button">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
