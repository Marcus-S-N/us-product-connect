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
import { CheckCircle2 } from "lucide-react";

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
    // Here you would typically send the form data to your backend
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
        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Order Request Submitted!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your order request. Our team will review your request and get back to you within 24 hours with a quote.
            </p>
            <Button
              variant="outline"
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
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Request an Order</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Fill out the form below with the product details and we'll get back to you with a quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <Label htmlFor="contact">
                Phone / Zalo / WhatsApp <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
              />
            </div>

            {/* Product Link */}
            <div className="space-y-2">
              <Label htmlFor="productLink">
                Product Link (URL) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="productLink"
                name="productLink"
                type="url"
                value={formData.productLink}
                onChange={handleChange}
                placeholder="https://..."
                required
              />
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <Label htmlFor="quantity">
                Quantity <span className="text-destructive">*</span>
              </Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">
                Product Category <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
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

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional information about your order..."
                rows={4}
              />
            </div>

            {/* Note about screenshot */}
            <p className="text-sm text-muted-foreground">
              Need to upload a product screenshot? Contact us via Zalo or WhatsApp after submitting this form.
            </p>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full">
              Submit Order Request
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
