import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Star, Search as SearchIcon } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "@/hooks/use-toast";

// Combine all products from different categories
const allProducts = [
  // Cosmetics
  {
    id: 101,
    name: "Luxury Foundation",
    price: "$89",
    originalPrice: "$120",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Bestseller",
  },
  {
    id: 102,
    name: "Premium Lipstick Set",
    price: "$45",
    originalPrice: "$60",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "New",
  },
  {
    id: 103,
    name: "Eyeshadow Palette",
    price: "$75",
    originalPrice: "$95",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Popular",
  },
  // Clothes
  {
    id: 201,
    name: "Designer Silk Dress",
    price: "$299",
    originalPrice: "$450",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    category: "Clothes",
    badge: "New",
  },
  {
    id: 202,
    name: "Casual Summer Dress",
    price: "$89",
    originalPrice: "$120",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
    category: "Clothes",
    badge: "Popular",
  },
  {
    id: 203,
    name: "Elegant Blazer",
    price: "$189",
    originalPrice: "$250",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    category: "Clothes",
    badge: "Bestseller",
  },
  // Shoes
  {
    id: 301,
    name: "Premium Heels",
    price: "$189",
    originalPrice: "$250",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
    category: "Shoes",
    badge: "Sale",
  },
  {
    id: 302,
    name: "Designer Sneakers",
    price: "$159",
    originalPrice: "$200",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    category: "Shoes",
    badge: "New",
  },
  {
    id: 303,
    name: "Luxury Boots",
    price: "$299",
    originalPrice: "$400",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop",
    category: "Shoes",
    badge: "Bestseller",
  },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        break;
      case "price-high":
        filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = (product: typeof allProducts[0]) => {
    const isLiked = isInWishlist(product.id);
    if (isLiked) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      toast({
        title: "Added to wishlist!",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Search Header */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <SearchIcon className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-warm-dark mb-6">
                Search Products
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find your perfect items from our curated collection
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background"
              >
                <option value="All">All Categories</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Clothes">Clothes</option>
                <option value="Shoes">Shoes</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <SearchIcon className="h-24 w-24 text-muted-foreground mx-auto mb-6 opacity-50" />
                <h2 className="text-3xl font-bold text-warm-dark mb-4">No products found</h2>
                <p className="text-muted-foreground mb-8">Try adjusting your search or filters</p>
                <Button variant="elegant" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-product hover:shadow-luxury transition-all duration-500 overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-rose-elegant text-white px-3 py-1 rounded-full text-sm font-medium">
                          {product.badge}
                        </span>
                      </div>

                      {/* Wishlist Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`absolute top-4 right-4 bg-white/80 hover:bg-white ${
                          isInWishlist(product.id) 
                            ? 'text-rose-elegant hover:text-rose-elegant' 
                            : 'text-warm-dark hover:text-rose-elegant'
                        }`}
                        onClick={() => handleToggleWishlist(product)}
                      >
                        <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-luxury-gold fill-luxury-gold"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({product.rating})</span>
                      </div>

                      <h3 className="font-semibold text-warm-dark mb-2 group-hover:text-rose-elegant transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4">{product.category}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-warm-dark">{product.price}</span>
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>

                      <Button variant="elegant" className="w-full" onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;