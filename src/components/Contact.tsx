
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Smartphone } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const message = formData.get('message');
    
    // This would normally connect to an email service
    console.log("Form submitted with data:", {
      name,
      email,
      company,
      message,
      recipient: "hivebusinessanalytics@gmail.com"
    });
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white honeycomb-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-hive-amber">Us</span>
          </h2>
          <p className="text-hive-gray max-w-2xl mx-auto">
            Have questions about how we can help your business? Get in touch with our
            team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                ></Textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-hive-amber hover:bg-hive-gold text-white"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" /> 
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
                  Thank you! Your message has been sent to hivebusinessanalytics@gmail.com
                </div>
              )}
            </form>
          </div>

          <div className="bg-hive-blue text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="mb-6">
                <h4 className="font-semibold text-hive-amber">Contact Person:</h4>
                <p className="text-white/80">Tawheeda Rozbully (Mrs)</p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center mr-4">
                  <Phone className="h-5 w-5 mr-2 text-hive-amber" />
                  <Smartphone className="h-5 w-5 text-hive-amber" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone / WhatsApp</h4>
                  <p className="text-white/80">+230 5786-9461</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-4 text-hive-amber" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-white/80">hivebusinessanalytics@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-4 text-hive-amber" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-white/80">
                    Royal Road Bel-Air Riviere Seche<br />
                    Mauritius, 40101
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
