import { Button } from "@/components/ui/button";
import cosmeticsImage from "@/assets/cosmetics-hero.jpg";
import clothesImage from "@/assets/clothes-hero.jpg";
import shoesImage from "@/assets/shoes-hero.jpg";

const categories = [
  {
    id: "cosmetics",
    title: "Cosmetics",
    description: "Premium beauty products for every occasion",
    image: cosmeticsImage,
    gradient: "from-rose-elegant/10 to-rose-soft",
  },
  {
    id: "clothes",
    title: "Fashion",
    description: "Trendy clothes that define your style",
    image: clothesImage,
    gradient: "from-fashion-accent/10 to-purple-100",
  },
  {
    id: "shoes",
    title: "Shoes",
    description: "Designer footwear for every step",
    image: shoesImage,
    gradient: "from-luxury-gold/10 to-yellow-50",
  },
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-warm-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed to elevate your style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-product hover:shadow-luxury transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50`} />
              
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-warm-dark mb-3 group-hover:text-rose-elegant transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                <Button 
                  variant="elegant" 
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                >
                  Explore {category.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;