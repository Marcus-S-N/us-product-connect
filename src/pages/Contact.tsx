import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Facebook, MapPin } from "lucide-react";

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
      {/* Page Header */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full border-border hover:border-primary transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
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
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* About Section */}
          <div className="bg-section-alt border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">About UStoVN</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                UStoVN is a trusted service helping customers in Vietnam access authentic American products. We source directly from legitimate US retailers, ensuring you receive genuine products at transparent prices.
              </p>
              <p>
                Our US-based team handles all purchasing, quality verification, and shipping logistics so you can shop with confidence.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm">
                  <strong className="text-foreground">Response Time:</strong> We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Business Hours</h2>
          <div className="text-muted-foreground">
            <p>Monday - Friday: 9:00 AM - 6:00 PM (Vietnam Time)</p>
            <p>Saturday: 9:00 AM - 12:00 PM (Vietnam Time)</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
