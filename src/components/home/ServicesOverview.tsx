import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Calculator, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "Tax Return Filing",
    description:
      "Complete 1040-NR preparation and filing for non-resident students. We handle all the paperwork so you don't have to.",
    features: ["Form 1040-NR", "Form 8843", "State Tax Returns", "E-filing"],
    link: "/services#filing",
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description:
      "Strategic tax planning to minimize your tax liability and maximize refunds while staying fully compliant.",
    features: ["Tax Optimization", "Treaty Benefits", "Refund Maximization", "Future Planning"],
    link: "/services#planning",
  },
  {
    icon: Users,
    title: "Tax Consultancy",
    description:
      "One-on-one consultations with tax professionals who understand international taxpayer tax situations.",
    features: ["Expert Advice", "Complex Situations", "Audit Support", "Year-round Help"],
    link: "/services#consultancy",
  },
];

export const ServicesOverview = () => {
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
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tax solutions tailored specifically for non-resident 
            students in the United States
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card card-hover border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={service.link}>
                <Button variant="ghost" className="text-accent hover:text-emerald-dark hover:bg-accent/10 p-0">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button size="lg" className="bg-accent hover:bg-emerald-dark text-accent-foreground shadow-emerald">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
