import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Plus, Minus, X } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveFromCart = (id: number, name: string) => {
    removeFromCart(id);
    toast({
      title: "Removed from cart",
      description: `${name} has been removed from your cart.`,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "Redirecting to payment gateway...",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-luxury-gold/10 to-yellow-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <ShoppingBag className="h-16 w-16 text-luxury-gold mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-warm-dark mb-6">
                Shopping Cart
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Review your selected items before checkout
              </p>
            </div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6 opacity-50" />
                <h2 className="text-3xl font-bold text-warm-dark mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Add some products to get started</p>
                <Button variant="elegant" asChild>
                  <a href="/">Continue Shopping</a>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-warm-dark mb-8">
                    Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                  </h2>
                  
                  <div className="space-y-6">
                    {cart.map((item, index) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-product p-6 animate-scale-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex flex-col sm:flex-row gap-6">
                          {/* Product Image */}
                          <div className="w-full sm:w-32 h-32 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                          
                          {/* Product Info */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="font-semibold text-warm-dark text-lg">{item.name}</h3>
                                <p className="text-muted-foreground">Price: {item.price}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-warm-dark hover:text-rose-elegant"
                                onClick={() => handleRemoveFromCart(item.id, item.name)}
                              >
                                <X className="h-5 w-5" />
                              </Button>
                            </div>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-medium">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              
                              <div className="text-right">
                                <p className="font-bold text-warm-dark">
                                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-product p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-warm-dark mb-6">Order Summary</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">${cartTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="font-medium">Calculated at checkout</span>
                      </div>
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-rose-elegant">${cartTotal}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="elegant" 
                      className="w-full mb-4" 
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/">Continue Shopping</a>
                    </Button>
                  </div>
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

export default Cart;