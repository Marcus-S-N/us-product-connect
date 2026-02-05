import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { getCategoryBySlug, getProductsByCategory, categories } from "@/data/products";
import { ArrowLeft, Pill, Heart, Shirt, Sparkles, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Pill,
  Heart,
  Shirt,
  Sparkles,
};

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const products = getProductsByCategory(slug || "");

  if (!category) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <Link to="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = iconMap[category.icon] || Pill;

  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-96 h-96 -top-48 -right-48 animate-pulse-soft" />
        <div className="blob w-80 h-80 top-1/2 -left-40 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <section className="section-padding pb-8">
        <div className="container-narrow mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="glass-card p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding pt-0">
        <div className="container-narrow mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="glass-card p-12 text-center">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="text-xl font-bold mb-6">Browse Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter((c) => c.slug !== slug)
              .map((cat) => {
                const CatIcon = iconMap[cat.icon] || Pill;
                return (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className="glass-card-hover p-4 text-center"
                  >
                    <CatIcon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <span className="text-sm font-medium">{cat.name}</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
