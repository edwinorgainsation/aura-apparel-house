import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Clock, Shield, Globe } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Truck className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-warm-dark mb-6">
                Shipping Information
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fast, reliable shipping options to get your order to you quickly and safely
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Shipping Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white rounded-2xl shadow-product p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-warm-dark">Standard Shipping</h2>
                      <p className="text-muted-foreground">3-5 Business Days</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Free on orders over $50
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      $5.99 for orders under $50
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Tracking included
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-primary">FREE*</div>
                </div>

                <div className="bg-white rounded-2xl shadow-product p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-rose-elegant/10 p-3 rounded-lg">
                      <Clock className="h-8 w-8 text-rose-elegant" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-warm-dark">Express Shipping</h2>
                      <p className="text-muted-foreground">1-2 Business Days</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-elegant rounded-full"></div>
                      Guaranteed fast delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-elegant rounded-full"></div>
                      Real-time tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-elegant rounded-full"></div>
                      Signature required
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-rose-elegant">$12.99</div>
                </div>
              </div>

              {/* Processing Time */}
              <div className="bg-white rounded-2xl shadow-product p-8 mb-16">
                <h2 className="text-2xl font-bold text-warm-dark mb-6">Processing Time</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-warm-dark mb-2">Order Placed</h3>
                    <p className="text-muted-foreground text-sm">Your order is confirmed and payment processed</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-warm-dark mb-2">Processing</h3>
                    <p className="text-muted-foreground text-sm">Items are picked, packed, and prepared for shipping</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-warm-dark mb-2">Shipped</h3>
                    <p className="text-muted-foreground text-sm">Package is shipped and tracking information is sent</p>
                  </div>
                </div>
                <div className="mt-8 bg-primary/5 rounded-lg p-6">
                  <p className="text-muted-foreground text-center">
                    <strong>Processing time:</strong> 1-2 business days for most items. Custom or personalized items may take 3-5 business days.
                  </p>
                </div>
              </div>

              {/* International Shipping */}
              <div className="bg-white rounded-2xl shadow-product p-8 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-warm-dark">International Shipping</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-warm-dark">Region</th>
                        <th className="text-left py-3 px-4 font-semibold text-warm-dark">Delivery Time</th>
                        <th className="text-left py-3 px-4 font-semibold text-warm-dark">Shipping Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Canada</td>
                        <td className="py-3 px-4">5-7 business days</td>
                        <td className="py-3 px-4">$15.99</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Europe</td>
                        <td className="py-3 px-4">7-14 business days</td>
                        <td className="py-3 px-4">$25.99</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Asia</td>
                        <td className="py-3 px-4">10-21 business days</td>
                        <td className="py-3 px-4">$29.99</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Australia</td>
                        <td className="py-3 px-4">7-14 business days</td>
                        <td className="py-3 px-4">$35.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> International customers are responsible for any customs duties, taxes, or fees imposed by their country.
                  </p>
                </div>
              </div>

              {/* Shipping Protection */}
              <div className="bg-white rounded-2xl shadow-product p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-warm-dark">Shipping Protection</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-warm-dark mb-3">Package Protection</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Lost package replacement
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Damage protection
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Theft coverage
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-dark mb-3">Tracking & Updates</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Real-time tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        SMS & email notifications
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Delivery confirmation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;