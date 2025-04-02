
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Hive Business Analytics transformed our approach to data. Their insights helped us increase revenue by 30% in just six months.",
      name: "Sarah Johnson",
      title: "CEO, TechInnovate",
      rating: 5,
    },
    {
      quote:
        "The team at Hive provided clear, actionable insights that helped us streamline operations and better understand our customers.",
      name: "Michael Chen",
      title: "COO, RetailGrowth Inc",
      rating: 5,
    },
    {
      quote:
        "Working with Hive was a game-changer for our marketing strategy. Their analytics platform is powerful yet intuitive.",
      name: "Amanda Rodriguez",
      title: "CMO, DigitalWave",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-hive-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-hive-amber">Testimonials</span>
          </h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Don't just take our word for it. Here's what our clients have to say about
            working with Hive Business Analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-hive-amber mb-4 opacity-60" />
                <p className="mb-6 text-white/90">{testimonial.quote}</p>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-hive-gold text-hive-gold" />
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
