import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, X } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "@/hooks/use-toast";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  const handleAddToCart = (item: typeof wishlist[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleRemoveFromWishlist = (id: number, name: string) => {
    removeFromWishlist(id);
    toast({
      title: "Removed from wishlist",
      description: `${name} has been removed from your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-rose-elegant/10 to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heart className="h-16 w-16 text-rose-elegant mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-warm-dark mb-6">
                Your Wishlist
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Keep track of your favorite items and add them to cart when ready
              </p>
            </div>
          </div>
        </section>

        {/* Wishlist Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {wishlist.length === 0 ? (
              <div className="text-center py-20">
                <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-6 opacity-50" />
                <h2 className="text-3xl font-bold text-warm-dark mb-4">Your wishlist is empty</h2>
                <p className="text-muted-foreground mb-8">Start adding products you love to your wishlist</p>
                <Button variant="elegant" asChild>
                  <a href="/">Continue Shopping</a>
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-warm-dark">
                    {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'} in Wishlist
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {wishlist.map((item, index) => (
                    <div
                      key={item.id}
                      className="group bg-white rounded-2xl shadow-product hover:shadow-luxury transition-all duration-500 overflow-hidden animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-warm-dark hover:text-rose-elegant"
                          onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <h3 className="font-semibold text-warm-dark mb-2 group-hover:text-rose-elegant transition-colors">
                          {item.name}
                        </h3>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl font-bold text-warm-dark">{item.price}</span>
                        </div>

                        <div className="space-y-2">
                          <Button 
                            variant="elegant" 
                            className="w-full" 
                            onClick={() => handleAddToCart(item)}
                          >
                            <ShoppingBag className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                          >
                            Remove from Wishlist
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;