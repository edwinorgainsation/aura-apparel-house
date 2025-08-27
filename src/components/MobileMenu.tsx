import { useState } from "react";
import { X, ShoppingBag, Heart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-elegant to-fashion-accent bg-clip-text text-transparent">
              Menu
            </h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6">
            <a 
              href="/" 
              className="block text-lg font-medium text-warm-dark hover:text-rose-elegant transition-colors"
              onClick={onClose}
            >
              Home
            </a>
            <a 
              href="/cosmetics" 
              className="block text-lg font-medium text-warm-dark hover:text-rose-elegant transition-colors"
              onClick={onClose}
            >
              Cosmetics
            </a>
            <a 
              href="/clothes" 
              className="block text-lg font-medium text-warm-dark hover:text-rose-elegant transition-colors"
              onClick={onClose}
            >
              Clothes
            </a>
            <a 
              href="/shoes" 
              className="block text-lg font-medium text-warm-dark hover:text-rose-elegant transition-colors"
              onClick={onClose}
            >
              Shoes
            </a>
            <a 
              href="/sale" 
              className="block text-lg font-medium text-rose-elegant hover:text-rose-deep transition-colors"
              onClick={onClose}
            >
              Sale
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="mt-12 space-y-4">
            <Button variant="ghost" className="w-full justify-start" onClick={onClose}>
              <Search className="h-5 w-5 mr-3" />
              Search
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={onClose}>
              <Heart className="h-5 w-5 mr-3" />
              Wishlist
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={onClose}>
              <User className="h-5 w-5 mr-3" />
              Account
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={onClose}>
              <ShoppingBag className="h-5 w-5 mr-3" />
              Shopping Bag
            </Button>
          </div>

          {/* Sign In Button */}
          <div className="mt-8">
            <Button variant="hero" className="w-full">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;