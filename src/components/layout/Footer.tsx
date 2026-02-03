import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-section-alt">
      <div className="container-narrow mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3">UStoVN</h3>
            <p className="text-sm text-muted-foreground">
              Authentic US products delivered to Vietnam. Medicine, supplements, clothing, and cosmetics from trusted US retailers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary">
                How It Works
              </Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                Pricing & Policies
              </Link>
              <Link to="/request-order" className="text-sm text-muted-foreground hover:text-primary">
                Request Order
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://zalo.me/your-zalo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Zalo
              </a>
              <a
                href="https://wa.me/your-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="mailto:contact@ustovn.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contact@ustovn.com
              </a>
              <a
                href="https://facebook.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UStoVN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
