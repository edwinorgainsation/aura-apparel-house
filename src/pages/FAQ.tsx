import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. Free shipping is available on orders over $50."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by location."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can use this to track your package on our website or the carrier's website."
  },
  {
    question: "Are your products authentic?",
    answer: "Yes, all our products are 100% authentic. We work directly with brands and authorized distributors to ensure authenticity."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay."
  },
  {
    question: "Can I change or cancel my order?",
    answer: "You can change or cancel your order within 1 hour of placing it. After that, we begin processing and cannot make changes."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes, we offer complimentary gift wrapping for all orders. You can select this option during checkout."
  },
  {
    question: "How do I create an account?",
    answer: "Click the 'Sign Up' button in the top right corner of our website and follow the prompts to create your account."
  },
  {
    question: "What if I receive a damaged item?",
    answer: "If you receive a damaged item, please contact us immediately with photos of the damage. We'll send a replacement or provide a full refund."
  },
  {
    question: "Do you offer student discounts?",
    answer: "Yes, we offer a 10% student discount. Verify your student status through our partner platform to receive your discount code."
  },
  {
    question: "How do I use a promo code?",
    answer: "Enter your promo code in the 'Discount Code' field during checkout and click 'Apply' to see the discount reflected in your total."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-warm-dark mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our products, shipping, and policies
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-2xl shadow-product px-6 border-0"
                  >
                    <AccordionTrigger className="text-left text-warm-dark hover:text-rose-elegant hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Contact Section */}
              <div className="mt-16 text-center bg-white rounded-2xl shadow-product p-8">
                <h2 className="text-2xl font-bold text-warm-dark mb-4">
                  Still have questions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our customer support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-rose-elegant text-white hover:bg-rose-deep h-10 px-4 py-2"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="mailto:hello@aura.com"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Send Email
                  </a>
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

export default FAQ;