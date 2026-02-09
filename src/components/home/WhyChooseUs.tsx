import { motion } from "framer-motion";
import { Award, Clock, Shield, HeartHandshake, Headphones, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Our team specializes exclusively in non-resident taxation with years of experience helping international taxpayers.",
  },
  {
    icon: Clock,
    title: "Fast & Efficient",
    description: "Complete your tax filing in as little as 15 minutes with our streamlined online process.",
  },
  {
    icon: Shield,
    title: "Accuracy Guaranteed",
    description: "Every return is reviewed by tax professionals to ensure accuracy and compliance.",
  },
  {
    icon: HeartHandshake,
    title: "Student-Friendly",
    description: "Affordable pricing designed for students with transparent fees and no hidden costs.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Get help when you need it with our responsive customer support team.",
  },
  {
    icon: DollarSign,
    title: "Maximum Refunds",
    description: "We identify all eligible deductions and treaty benefits to maximize your refund.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose MyTaxPlanners?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another tax service. We're your dedicated partners in 
            navigating US taxes as an international taxpayer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
