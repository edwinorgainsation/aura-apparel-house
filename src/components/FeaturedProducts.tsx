import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "Luxury Lipstick Set",
    price: "$89",
    originalPrice: "$120",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Designer Silk Dress",
    price: "$299",
    originalPrice: "$450",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    category: "Fashion",
    badge: "New",
  },
  {
    id: 3,
    name: "Premium Heels",
    price: "$189",
    originalPrice: "$250",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
    category: "Shoes",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Skincare Essential Kit",
    price: "$129",
    originalPrice: "$180",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556229010-aa4e03ce4315?w=400&h=400&fit=crop",
    category: "Cosmetics",
    badge: "Popular",
  },
];

const FeaturedProducts = () => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();

  const handleAddToCart = (product: typeof products[0]) => {
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

  const handleToggleWishlist = (product: typeof products[0]) => {
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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-warm-dark">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                <Button variant="elegant" className="w-full mt-4" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;