import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-warm-dark mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-warm-dark mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-elegant/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-rose-elegant" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-warm-dark mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        123 Fashion Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-rose-elegant/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-rose-elegant" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-warm-dark mb-2">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-rose-elegant/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-rose-elegant" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-warm-dark mb-2">Email</h3>
                      <p className="text-muted-foreground">hello@aura.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-rose-elegant/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-rose-elegant" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-warm-dark mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-product p-8">
                  <h2 className="text-3xl font-bold text-warm-dark mb-8">Send Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-warm-dark mb-2">
                          First Name
                        </label>
                        <Input type="text" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-warm-dark mb-2">
                          Last Name
                        </label>
                        <Input type="text" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-warm-dark mb-2">
                        Email
                      </label>
                      <Input type="email" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-warm-dark mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-warm-dark mb-2">
                        Subject
                      </label>
                      <Input type="text" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-warm-dark mb-2">
                        Message
                      </label>
                      <Textarea 
                        rows={5} 
                        placeholder="Tell us how we can help you..."
                        required 
                      />
                    </div>

                    <Button type="submit" variant="elegant" className="w-full">
                      Send Message
                    </Button>
                  </form>
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

export default Contact;