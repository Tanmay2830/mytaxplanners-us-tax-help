import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description: "Every tax return is meticulously reviewed for accuracy and compliance with IRS regulations.",
  },
  {
    icon: Heart,
    title: "Student-First",
    description: "We understand the unique challenges international students face and tailor our services accordingly.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden fees, no surprises. Clear pricing and honest communication throughout the process.",
  },
  {
    icon: Users,
    title: "Support",
    description: "Our team is here to help you every step of the way, from questions to completion.",
  },
];

const stats = [
  { value: "500+", label: "Students Served" },
  { value: "50+", label: "Countries Represented" },
  { value: "$2M+", label: "Refunds Secured" },
  { value: "99%", label: "Accuracy Rate" },
];

const team = [
  {
    name: "Mahima Agarwal",
    role: "Founder",
    bio: "Passionate about making US tax filing simple and accessible for international students.",
  },
  {
    name: "Tax Expert",
    role: "Senior Tax Advisor",
    bio: "Specializes in treaty benefits and complex tax situations for F-1 and J-1 visa holders.",
  },
];

const About = () => {
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
              About MyTaxPlanners
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              We're on a mission to make US tax filing simple, affordable, and 
              stress-free for international students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    MyTaxPlanners was founded by tax professionals who saw firsthand 
                    how confusing and overwhelming US tax filing can be for 
                    international students.
                  </p>
                  <p>
                    Many students struggle with questions like: "Do I need to file 
                    taxes?", "What forms do I need?", "Am I eligible for any 
                    refunds?" We started MyTaxPlanners to answer these questions 
                    and provide expert guidance at student-friendly prices.
                  </p>
                  <p>
                    Today, we've helped thousands of students from over 50 countries 
                    successfully file their US taxes and receive refunds they didn't 
                    even know they were entitled to.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <p className="text-3xl font-bold text-accent mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these core principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card card-hover text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent text-2xl font-bold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-accent mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let us take the stress out of your US tax filing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start-filing">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-emerald-dark text-accent-foreground shadow-emerald"
                >
                  Start Filing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
