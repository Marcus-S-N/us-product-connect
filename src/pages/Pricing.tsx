import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Scale, RefreshCw, AlertTriangle, Ban, Info } from "lucide-react";

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
      "Charged by weight. Rates vary based on package weight and shipping speed selected. We'll provide exact costs in your quote.",
  },
  {
    icon: RefreshCw,
    title: "Exchange Rate",
    description:
      "USD to VND exchange rate is applied at the time of price confirmation. We use transparent, market-based rates.",
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
      {/* Page Header */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing & Policies
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Review our policies before placing an order.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pricingItems.map((item) => (
              <Card key={item.title} className="border-border">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-section-alt border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Example Calculation</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Product Price: $100</p>
              <p>Service Fee (15%): $15</p>
              <p>Shipping (1kg): ~$20</p>
              <p className="font-semibold text-foreground pt-2 border-t border-border mt-2">
                Total: ~$135 + applicable customs duties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Ban className="h-6 w-6 text-destructive" />
            <h2 className="text-2xl md:text-3xl font-bold">Prohibited Items</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            We cannot purchase or ship the following items due to legal restrictions:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {prohibitedItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <span className="text-destructive mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Policies</h2>
          <div className="space-y-6">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <policy.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{policy.title}</h3>
                </div>
                <p className="text-muted-foreground">{policy.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us if you have any questions about pricing or policies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to="/request-order">Request an Order</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
