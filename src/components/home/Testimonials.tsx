import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Graduate Student, MIT",
    country: "India",
    content:
      "MyTaxPlanners made my first US tax filing so easy! I was worried about making mistakes, but their team guided me through everything. Got a bigger refund than I expected!",
    rating: 5,
  },
  {
    name: "Wei Chen",
    role: "PhD Candidate, Stanford",
    country: "China",
    content:
      "As a J-1 scholar, I had a complex tax situation with stipends and treaty benefits. MyTaxPlanners handled everything perfectly and saved me hundreds of dollars.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "Undergraduate, UCLA",
    country: "Egypt",
    content:
      "The process was incredibly smooth. I uploaded my documents, and within a week, my taxes were filed. Their customer support answered all my questions patiently.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "MBA Student, NYU",
    country: "Mexico",
    content:
      "I've used MyTaxPlanners for two years now. They're reliable, professional, and their prices are very reasonable for students. Highly recommend!",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of international taxpayers who trust us with their taxes
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border"
            >
              <Quote className="w-12 h-12 text-accent/30 mb-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                  {testimonials[currentIndex].name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} • From {testimonials[currentIndex].country}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
