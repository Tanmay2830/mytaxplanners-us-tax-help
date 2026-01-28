import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  FileText, Calculator, Users, CheckCircle2, ArrowRight,
  FileCheck, Globe, DollarSign, Shield, Clock, Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "filing",
    icon: FileText,
    title: "Tax Return Filing",
    subtitle: "Complete federal & state tax preparation",
    description:
      "Our comprehensive tax return filing service handles everything from Form 1040-NR preparation to e-filing. We ensure your return is accurate, compliant, and optimized for the maximum refund.",
    features: [
      "Form 1040-NR preparation and filing",
      "Form 8843 for exempt individuals",
      "State tax return filing (all 50 states)",
      "W-2, 1099, and 1042-S processing",
      "Direct deposit refund setup",
      "Electronic filing with IRS",
    ],
    price: "Starting at $149",
  },
  {
    id: "planning",
    icon: Calculator,
    title: "Tax Planning",
    subtitle: "Strategic planning for future tax years",
    description:
      "Don't just file your taxes—plan for them. Our tax planning service helps you understand your tax obligations, take advantage of treaty benefits, and structure your finances for optimal tax outcomes.",
    features: [
      "Tax treaty benefit analysis",
      "Income timing strategies",
      "Scholarship & fellowship optimization",
      "OPT/CPT tax planning",
      "Multi-year tax projections",
      "Tax-efficient investment guidance",
    ],
    price: "Starting at $199",
  },
  {
    id: "consultancy",
    icon: Users,
    title: "Tax Consultancy",
    subtitle: "Expert guidance for complex situations",
    description:
      "For unique or complex tax situations, our consultancy service provides one-on-one access to experienced tax professionals who specialize in non-resident taxation.",
    features: [
      "One-on-one consultations",
      "Complex situation analysis",
      "IRS notice responses",
      "Audit representation",
      "Tax residency determination",
      "Year-round email support",
    ],
    price: "Starting at $99/hour",
  },
];

const additionalFeatures = [
  {
    icon: FileCheck,
    title: "Document Review",
    description: "We review all your tax documents for completeness and accuracy",
  },
  {
    icon: Globe,
    title: "Treaty Benefits",
    description: "We identify applicable tax treaty benefits for your country",
  },
  {
    icon: DollarSign,
    title: "Refund Tracking",
    description: "Track your refund status directly through our platform",
  },
  {
    icon: Shield,
    title: "Accuracy Guarantee",
    description: "We stand behind our work with accuracy and support guarantees",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Most returns are completed within 3-5 business days",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Get help via email, chat, or phone when you need it",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Comprehensive tax solutions designed specifically for non-resident 
              students and scholars in the United States
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {service.title}
                  </h2>
                  <p className="text-accent font-medium mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-2xl font-bold text-foreground mb-6">
                    {service.price}
                  </p>
                  <Link to="/start-filing">
                    <Button className="bg-accent hover:bg-emerald-dark text-accent-foreground shadow-emerald">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`bg-card rounded-2xl p-8 shadow-card border border-border ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <h3 className="font-semibold text-foreground mb-6">
                    What's Included:
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
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
              Included with Every Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No matter which service you choose, you get access to these features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact us for a free consultation and we'll help you determine 
              the best solution for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-emerald-dark text-accent-foreground shadow-emerald"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/start-filing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Start Filing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
