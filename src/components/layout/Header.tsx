import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Pill, Heart, Shirt, Sparkles } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const categoryLinks = [
  { href: "/category/medicine", label: "Medicine", icon: Pill },
  { href: "/category/supplements", label: "Supplements", icon: Heart },
  { href: "/category/clothing", label: "Clothing", icon: Shirt },
  { href: "/category/cosmetics", label: "Cosmetics", icon: Sparkles },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-glass-border/30">
      <div className="container-narrow mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">UStoVN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Category Dropdown - simple links for now */}
          <div className="flex items-center gap-4">
            {categoryLinks.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  location.pathname === cat.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount > 9 ? "9+" : cartCount}</span>
            )}
          </Link>

          {/* Request Custom */}
          <Button asChild size="sm" className="hidden md:flex rounded-full">
            <Link to="/request-order">Request Custom</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-glass-border/30 glass">
          <nav className="container-narrow mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t border-border my-2 pt-2">
              <p className="text-xs text-muted-foreground mb-2">Categories</p>
              {categoryLinks.map((cat) => (
                <Link
                  key={cat.href}
                  to={cat.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 flex items-center gap-2 transition-colors hover:text-primary ${
                    location.pathname === cat.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </Link>
              ))}
            </div>
            
            <Button asChild size="sm" className="w-full mt-2 rounded-full">
              <Link to="/request-order" onClick={() => setMobileMenuOpen(false)}>
                Request Custom Item
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
