import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryCard } from "@/components/product/CategoryCard";
import { categories, getFeaturedProducts, products } from "@/data/products";
import {
  ShieldCheck,
  DollarSign,
  Package,
  ArrowRight,
  Sparkles,
  Truck,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Authentic Products",
    description: "100% genuine from US retailers",
  },
  {
    icon: Package,
    title: "US-Based Purchasing",
    description: "Direct from trusted sources",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, ever",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "7-14 days to Vietnam",
  },
];

export default function Index() {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = products.slice(0, 8);

  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-96 h-96 -top-48 -right-48 animate-float" />
        <div className="blob w-80 h-80 top-1/3 -left-40 animate-float" style={{ animationDelay: "2s" }} />
        <div className="blob w-64 h-64 bottom-1/4 right-1/4 animate-pulse-soft" style={{ animationDelay: "4s" }} />
      </div>

      {/* Hero Section */}
      <section className="section-padding pt-12 pb-20">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Inner gradient blob */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gradient-to-tr from-accent/20 to-primary/30 blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Authentic US Products
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Shop US Brands,
                <br />
                <span className="gradient-text">Delivered to Vietnam</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Medicine, supplements, fashion, and cosmetics from trusted American retailers.
                Fast shipping. Authentic guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/category/medicine">
                    Start Shopping
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full glass-button">
                  <Link to="/request-order">Request Custom Item</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link
              to="/category/supplements"
              className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-center mb-8">Why Shop With Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustPoints.map((point) => (
                <div key={point.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <point.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-16">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-20" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Send us a link to any US product and we'll get it for you.
                Medicine, supplements, clothing, cosmetics - anything you need!
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/request-order">
                  Request Custom Item
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
