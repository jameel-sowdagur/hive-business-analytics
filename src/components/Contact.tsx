
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual form submission logic
    console.log("Form submitted");
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!");
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
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
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
                  placeholder="Enter your company name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                ></Textarea>
              </div>

              <Button type="submit" className="w-full bg-hive-amber hover:bg-hive-gold text-white">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-hive-blue text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-4 text-hive-amber" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-4 text-hive-amber" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-white/80">info@hivebusinessanalytics.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-4 text-hive-amber" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-white/80">
                      123 Business Avenue, Suite 500<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-hive-lightgray rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-hive-blue">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-hive-gray">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-hive-gray">Saturday:</span>
                  <span className="font-medium">10:00 AM - 3:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-hive-gray">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
