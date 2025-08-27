import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-warm-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-elegant to-fashion-accent bg-clip-text text-transparent mb-4">
              Aura
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover premium cosmetics, fashion, and footwear that defines your unique style. Curated collections for the modern individual.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-rose-elegant">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-rose-elegant">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-rose-elegant">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Cosmetics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Fashion</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Shoes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-elegant transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-rose-elegant" />
                <span className="text-gray-300">123 Fashion Street, Style City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-elegant" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-elegant" />
                <span className="text-gray-300">hello@aura.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-rose-elegant"
                />
                <Button variant="elegant" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Aura. All rights reserved. Crafted with love for style enthusiasts.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-rose-elegant text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-rose-elegant text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-rose-elegant text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;