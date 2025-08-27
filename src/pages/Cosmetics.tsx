import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "@/hooks/use-toast";

const cosmeticsProducts = [
  {
    id: 101,
    name: "Luxury Lipstick Set",
    price: "$89",
    originalPrice: "$120",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Bestseller",
  },
  {
    id: 102,
    name: "Premium Foundation",
    price: "$65",
    originalPrice: "$85",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "New",
  },
  {
    id: 103,
    name: "Skincare Essential Kit",
    price: "$129",
    originalPrice: "$180",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556229010-aa4e03ce4315?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Popular",
  },
  {
    id: 104,
    name: "Eyeshadow Palette",
    price: "$45",
    originalPrice: "$60",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1583334733449-b01e6d6a6330?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Sale",
  },
  {
    id: 105,
    name: "Luxury Perfume",
    price: "$150",
    originalPrice: "$200",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Limited",
  },
  {
    id: 106,
    name: "Moisturizer Cream",
    price: "$75",
    originalPrice: "$95",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Trending",
  },
];

const Cosmetics = () => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();

  const handleAddToCart = (product: typeof cosmeticsProducts[0]) => {
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

  const handleToggleWishlist = (product: typeof cosmeticsProducts[0]) => {
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
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-rose-soft to-warm-neutral">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-warm-dark mb-6">
                Premium Cosmetics
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover luxury beauty products that enhance your natural radiance
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cosmeticsProducts.map((product, index) => (
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
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
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

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="hero" className="transform scale-95 group-hover:scale-100 transition-transform duration-300">
                        Quick View
                      </Button>
                    </div>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cosmetics;