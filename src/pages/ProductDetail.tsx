import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/ui/rating-stars";
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, ShoppingCart, Minus, Plus, Check, Package, Shield, Truck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-narrow mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} x ${product.name} added to cart`);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-96 h-96 -top-48 -right-48 animate-pulse-soft" />
        <div className="blob w-64 h-64 bottom-1/4 -left-32 animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          {/* Back link */}
          <Link
            to={`/category/${product.categoryId}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {product.category}
          </Link>

          {/* Product Main */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="glass-card p-6">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {discount > 0 && (
                <span className="absolute top-8 left-8 px-3 py-1 rounded-full text-sm font-semibold bg-primary text-primary-foreground">
                  -{discount}% OFF
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <RatingStars rating={product.rating} size="md" />
                <span className="text-sm text-muted-foreground">
                  {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold gradient-text">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Stock */}
              <div className="flex items-center gap-2 mb-6">
                {product.inStock ? (
                  <>
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm text-success font-medium">
                      In Stock ({product.stockCount} available)
                    </span>
                  </>
                ) : (
                  <span className="text-sm text-destructive font-medium">Out of Stock</span>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="glass-card p-4 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="qty-button"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="qty-button"
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full rounded-xl h-12"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Package className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <span className="text-xs text-muted-foreground">Authentic</span>
                </div>
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <span className="text-xs text-muted-foreground">Fast Shipping</span>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <span className="text-xs text-muted-foreground">Secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-4">Specifications</h2>
              <div className="glass-card overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={key} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                        <td className="px-4 py-3 font-medium text-sm">{key}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
