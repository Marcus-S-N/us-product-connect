import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Link2, Package, User, Phone } from "lucide-react";

const categories = [
  "OTC Medicine",
  "Supplements",
  "Clothing & Shoes",
  "Cosmetics",
  "Electronics",
  "Other",
];

export default function RequestOrder() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    productLink: "",
    quantity: "1",
    category: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="blob w-80 h-80 top-1/4 -left-40 animate-pulse-soft" />
        </div>
        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-lg">
            <div className="glass-card p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-success/20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-success" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Request Submitted!
              </h1>
              <p className="text-muted-foreground mb-8">
                Thank you for your request. Our team will review it and get back to you within 24 hours with a quote.
              </p>
              <Button
                variant="outline"
                className="rounded-full glass-button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    contact: "",
                    productLink: "",
                    quantity: "1",
                    category: "",
                    notes: "",
                  });
                }}
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="blob w-80 h-80 -top-40 -right-40 animate-pulse-soft" />
        <div className="blob w-64 h-64 bottom-1/4 -left-32 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      {/* Page Header */}
      <section className="section-padding pb-8">
        <div className="container-narrow mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Request Custom Item</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Can't find what you need in our catalog? Send us a link and we'll get it for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding pt-0">
        <div className="container-narrow mx-auto max-w-xl">
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="glass-input"
                required
              />
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <Label htmlFor="contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone / Zalo / WhatsApp <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="glass-input"
                required
              />
            </div>

            {/* Product Link */}
            <div className="space-y-2">
              <Label htmlFor="productLink" className="flex items-center gap-2">
                <Link2 className="w-4 h-4" />
                Product Link (URL) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="productLink"
                name="productLink"
                type="url"
                value={formData.productLink}
                onChange={handleChange}
                placeholder="https://..."
                className="glass-input"
                required
              />
            </div>

            {/* Quantity and Category */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity" className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Quantity <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="glass-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">
                  Category <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                  required
                >
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional information about your order..."
                className="glass-input min-h-[100px]"
                rows={4}
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Need to upload a product screenshot? Contact us via Zalo or WhatsApp after submitting.
            </p>

            <Button type="submit" size="lg" className="w-full rounded-xl h-12">
              Submit Request
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
