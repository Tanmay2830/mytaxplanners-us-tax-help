import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, FileCheck, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Submit Your Info",
    description:
      "Fill out our simple online form and upload your tax documents (W-2, 1099, 1042-S).",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "We Prepare Your Return",
    description:
      "Our tax professionals review your information and prepare your return for maximum refund.",
  },
  {
    icon: Send,
    step: "03",
    title: "Review & File",
    description:
      "Review your completed return, approve it, and we'll e-file directly with the IRS.",
  },
];

export const HowItWorksPreview = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Filing your taxes is as easy as 1-2-3
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary-foreground/20" />
              )}
              
              <div className="relative bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-primary-foreground/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/how-it-works">
            <Button
              size="lg"
              className="bg-accent hover:bg-emerald-dark text-accent-foreground shadow-emerald"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
