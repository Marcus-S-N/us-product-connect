import { Layout } from "@/components/layout/Layout";
import { MessageCircle, Phone, Mail, Facebook, MapPin, Clock } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Zalo",
    value: "Contact via Zalo",
    link: "https://zalo.me/your-zalo",
    description: "Best for Vietnamese customers",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+1 (XXX) XXX-XXXX",
    link: "https://wa.me/your-whatsapp",
    description: "Quick responses during business hours",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@ustovn.com",
    link: "mailto:contact@ustovn.com",
    description: "For detailed inquiries",
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "UStoVN",
    link: "https://facebook.com/your-page",
    description: "Follow us for updates",
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-80 h-80 -top-40 right-1/4 animate-pulse-soft" />
        <div className="blob w-64 h-64 bottom-1/3 -left-32 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      {/* Page Header */}
      <section className="section-padding pb-8">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-gradient-to-tl from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions? We're here to help. Reach out through any of the channels below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="glass-card-hover p-6 flex items-start gap-4 h-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    <p className="text-primary font-medium mb-1">
                      {method.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* About Section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">About UStoVN</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                UStoVN is a trusted service helping customers in Vietnam access authentic American products. We source directly from legitimate US retailers, ensuring you receive genuine products at transparent prices.
              </p>
              <p>
                Our US-based team handles all purchasing, quality verification, and shipping logistics so you can shop with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding py-12">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-4">Business Hours</h2>
            <div className="text-muted-foreground space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM (Vietnam Time)</p>
              <p>Saturday: 9:00 AM - 12:00 PM (Vietnam Time)</p>
              <p>Sunday: Closed</p>
            </div>
            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
