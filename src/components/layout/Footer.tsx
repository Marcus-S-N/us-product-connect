import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass border-t border-glass-border/30">
      <div className="container-narrow mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold gradient-text">
              UStoVN
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Authentic US products delivered to Vietnam. Shop with confidence.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/category/medicine" className="hover:text-primary transition-colors">
                  Medicine
                </Link>
              </li>
              <li>
                <Link to="/category/supplements" className="hover:text-primary transition-colors">
                  Supplements
                </Link>
              </li>
              <li>
                <Link to="/category/clothing" className="hover:text-primary transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/category/cosmetics" className="hover:text-primary transition-colors">
                  Cosmetics
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition-colors">
                  Pricing & Policies
                </Link>
              </li>
              <li>
                <Link to="/request-order" className="hover:text-primary transition-colors">
                  Request Custom Item
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://zalo.me/your-zalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Zalo Chat
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/your-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ustovn.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@ustovn.com
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/ustovn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UStoVN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
