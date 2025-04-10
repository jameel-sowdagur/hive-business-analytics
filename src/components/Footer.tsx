import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, SendHorizontal, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hive-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-hive-amber">Hive</span> Business Analytics
            </h2>
            <p className="text-white/70 mb-6">
              Transforming business data into actionable insights for growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-hive-amber transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-hive-amber transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-hive-amber transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-hive-amber transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Survey Research and Analysis
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Business Intelligence
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Data Visualization
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Data Warehousing
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Technical Training and Upskills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#upcoming-event" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Upcoming Event
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-hive-amber transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to get the latest updates and news about our services.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md flex-1 text-hive-gray focus:outline-none"
              />
              <button
                type="submit"
                className="bg-hive-amber hover:bg-hive-gold px-4 py-2 rounded-r-md transition-colors"
              >
                <SendHorizontal className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Hive Business Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
