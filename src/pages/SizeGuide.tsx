import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ruler } from "lucide-react";

const SizeGuide = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Ruler className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-warm-dark mb-6">
                Size Guide
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find your perfect fit with our comprehensive sizing charts
              </p>
            </div>
          </div>
        </section>

        {/* Size Guide Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="clothes" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="clothes">Clothing</TabsTrigger>
                  <TabsTrigger value="shoes">Shoes</TabsTrigger>
                  <TabsTrigger value="accessories">Accessories</TabsTrigger>
                </TabsList>

                {/* Clothing Sizes */}
                <TabsContent value="clothes" className="mt-8">
                  <div className="bg-white rounded-2xl shadow-product p-8">
                    <h2 className="text-2xl font-bold text-warm-dark mb-6">Women's Clothing Sizes</h2>
                    
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-warm-dark">Size</th>
                            <th className="text-left py-3 px-4 font-semibold text-warm-dark">Bust (inches)</th>
                            <th className="text-left py-3 px-4 font-semibold text-warm-dark">Waist (inches)</th>
                            <th className="text-left py-3 px-4 font-semibold text-warm-dark">Hips (inches)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">XS</td>
                            <td className="py-3 px-4">32-33</td>
                            <td className="py-3 px-4">24-25</td>
                            <td className="py-3 px-4">34-35</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">S</td>
                            <td className="py-3 px-4">34-35</td>
                            <td className="py-3 px-4">26-27</td>
                            <td className="py-3 px-4">36-37</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">M</td>
                            <td className="py-3 px-4">36-37</td>
                            <td className="py-3 px-4">28-29</td>
                            <td className="py-3 px-4">38-39</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">L</td>
                            <td className="py-3 px-4">38-40</td>
                            <td className="py-3 px-4">30-32</td>
                            <td className="py-3 px-4">40-42</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">XL</td>
                            <td className="py-3 px-4">42-44</td>
                            <td className="py-3 px-4">34-36</td>
                            <td className="py-3 px-4">44-46</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-rose-elegant/5 rounded-lg p-6">
                      <h3 className="font-semibold text-warm-dark mb-3">How to Measure</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Bust:</strong> Measure around the fullest part of your chest</li>
                        <li><strong>Waist:</strong> Measure around your natural waistline</li>
                        <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                {/* Shoe Sizes */}
                <TabsContent value="shoes" className="mt-8">
                  <div className="bg-white rounded-2xl shadow-product p-8">
                    <h2 className="text-2xl font-bold text-warm-dark mb-6">Women's Shoe Sizes</h2>
                    
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-warm-dark">US Size</th>
                            <th className="text-left py-3 px-4 font-semibold text-warm-dark">EU Size</th>
                            <th className="text-left py-3 px-4 font-semibold text-warm-dark">UK Size</th>
                            <th className="text-left py-3 px-4 font-semibold text-warm-dark">Foot Length (cm)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">5</td>
                            <td className="py-3 px-4">35</td>
                            <td className="py-3 px-4">2.5</td>
                            <td className="py-3 px-4">21.6</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">6</td>
                            <td className="py-3 px-4">36</td>
                            <td className="py-3 px-4">3.5</td>
                            <td className="py-3 px-4">22.2</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">7</td>
                            <td className="py-3 px-4">37</td>
                            <td className="py-3 px-4">4.5</td>
                            <td className="py-3 px-4">22.9</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">8</td>
                            <td className="py-3 px-4">38</td>
                            <td className="py-3 px-4">5.5</td>
                            <td className="py-3 px-4">23.5</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">9</td>
                            <td className="py-3 px-4">39</td>
                            <td className="py-3 px-4">6.5</td>
                            <td className="py-3 px-4">24.1</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-4">10</td>
                            <td className="py-3 px-4">40</td>
                            <td className="py-3 px-4">7.5</td>
                            <td className="py-3 px-4">24.8</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-rose-elegant/5 rounded-lg p-6">
                      <h3 className="font-semibold text-warm-dark mb-3">How to Measure Your Feet</h3>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Stand on a piece of paper with your heel against a wall</li>
                        <li>Mark the longest toe on the paper</li>
                        <li>Measure the distance from the wall to the mark</li>
                        <li>Repeat for both feet and use the larger measurement</li>
                      </ol>
                    </div>
                  </div>
                </TabsContent>

                {/* Accessories */}
                <TabsContent value="accessories" className="mt-8">
                  <div className="bg-white rounded-2xl shadow-product p-8">
                    <h2 className="text-2xl font-bold text-warm-dark mb-6">Accessories Sizing</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Ring Sizes */}
                      <div>
                        <h3 className="text-xl font-semibold text-warm-dark mb-4">Ring Sizes</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-warm-dark">US Size</th>
                                <th className="text-left py-3 px-4 font-semibold text-warm-dark">Diameter (mm)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border/50">
                                <td className="py-3 px-4">5</td>
                                <td className="py-3 px-4">15.7</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-3 px-4">6</td>
                                <td className="py-3 px-4">16.5</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-3 px-4">7</td>
                                <td className="py-3 px-4">17.3</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-3 px-4">8</td>
                                <td className="py-3 px-4">18.1</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Bracelet Sizes */}
                      <div>
                        <h3 className="text-xl font-semibold text-warm-dark mb-4">Bracelet Sizes</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-warm-dark">Size</th>
                                <th className="text-left py-3 px-4 font-semibold text-warm-dark">Wrist (inches)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border/50">
                                <td className="py-3 px-4">XS</td>
                                <td className="py-3 px-4">5.5-6</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-3 px-4">S</td>
                                <td className="py-3 px-4">6-6.5</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-3 px-4">M</td>
                                <td className="py-3 px-4">6.5-7</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-3 px-4">L</td>
                                <td className="py-3 px-4">7-7.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SizeGuide;