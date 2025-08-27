import { ShoppingBag, Search, Menu, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-elegant to-fashion-accent bg-clip-text text-transparent">
              Aura
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cosmetics" className="text-foreground hover:text-rose-elegant transition-colors font-medium">
              Cosmetics
            </a>
            <a href="#clothes" className="text-foreground hover:text-rose-elegant transition-colors font-medium">
              Clothes
            </a>
            <a href="#shoes" className="text-foreground hover:text-rose-elegant transition-colors font-medium">
              Shoes
            </a>
            <a href="#sale" className="text-rose-elegant hover:text-rose-deep transition-colors font-medium">
              Sale
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-elegant text-white text-xs flex items-center justify-center font-medium">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;