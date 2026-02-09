import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Expert guidance for F-1, H-1B & J-1 visa holders",
  "Maximize your tax refunds legally",
  "100% online process",
];

export const HeroSection = () => {
  return (
    <section className="relative bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 500+ International Taxpayers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              US Tax Filing Made{" "}
              <span className="text-accent">Simple</span> for
              International Taxpayers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Navigate the complexities of US tax laws with confidence. 
              Our expert team specializes in helping non-resident taxpayers 
              file accurate tax returns and maximize their refunds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Link to="/start-filing">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-emerald-dark text-accent-foreground shadow-emerald text-lg px-8 w-full sm:w-auto"
                >
                  Start Filing Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-foreground hover:text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 w-full sm:w-auto bg-white/90"
                >
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            <div className="flex items-center gap-3 text-primary-foreground/60">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Average 15-min filing</span>
            </div>
            <div className="h-8 w-px bg-primary-foreground/20 hidden sm:block" />
            <div className="flex items-center gap-3 text-primary-foreground/60">
              <Shield className="w-5 h-5" />
              <span className="text-sm">IRS Compliant</span>
            </div>
            <div className="h-8 w-px bg-primary-foreground/20 hidden sm:block" />
            <div className="flex items-center gap-3 text-primary-foreground/60">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm">Tax Professional Reviewed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
