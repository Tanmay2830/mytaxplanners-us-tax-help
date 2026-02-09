import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Upload, FileCheck, Send, CheckCircle2, ArrowRight,
  ClipboardList, UserCheck, Mail, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mainSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up in less than 2 minutes. We'll ask for basic information about your visa status and tax situation to personalize your experience.",
  },
  {
    icon: Upload,
    step: "02",
    title: "Upload Your Documents",
    description:
      "Securely upload your tax documents including W-2, 1099, 1042-S, and any other relevant forms. Our system accepts photos, PDFs, and scanned documents.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Answer Simple Questions",
    description:
      "Complete our easy-to-follow questionnaire about your income, deductions, and any special circumstances. We'll guide you every step of the way.",
  },
  {
    icon: UserCheck,
    step: "04",
    title: "Expert Review",
    description:
      "A tax professional reviews your information, applies applicable treaty benefits, and prepares your return for maximum refund and accuracy.",
  },
  {
    icon: Mail,
    step: "05",
    title: "Review & Approve",
    description:
      "We'll send you your completed tax return for review. Ask questions, request changes, or approve when you're satisfied.",
  },
  {
    icon: Send,
    step: "06",
    title: "E-File & Get Refund",
    description:
      "Once approved, we e-file your return directly with the IRS. Set up direct deposit for the fastest refund, typically within 21 days.",
  },
];

const documents = [
  {
    title: "Form W-2",
    description: "Wage and Tax Statement from your employer",
  },
  {
    title: "Form 1099",
    description: "For freelance income, interest, dividends, etc.",
  },
  {
    title: "Form 1042-S",
    description: "For scholarship, fellowship, or treaty income",
  },
  {
    title: "Passport",
    description: "For identity verification and visa status",
  },
  {
    title: "I-20 or DS-2019",
    description: "Your student or exchange visitor document",
  },
  {
    title: "SSN or ITIN",
    description: "Social Security Number or Individual Tax ID",
  },
  {
    title: "I-94 Travel Document",
    description: "Arrival/departure record for travel history",
  },
  {
    title: "Visa",
    description: "Your current US visa document",
  },
  {
    title: "Previous Year Returns",
    description: "Tax return files from previous years, if applicable",
  },
];

const HowItWorks = () => {
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
              How It Works
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Filing your US taxes has never been easier. Follow our simple 
              6-step process and get your refund fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {mainSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex gap-6 mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < mainSteps.length - 1 && (
                  <div className="absolute left-7 top-20 w-0.5 h-full bg-border" />
                )}

                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center z-10">
                  <step.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-accent">
                      Step {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Needed */}
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
              Documents You'll Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gather these documents before you start. Don't worry if you're 
              missing something—we'll help you figure it out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card card-hover flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {doc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to file my taxes?",
                  a: "Most clients complete the process in 15-30 minutes. After submission, our team reviews and prepares your return within 3-5 business days.",
                },
                {
                  q: "When will I receive my refund?",
                  a: "Once we e-file your return, the IRS typically processes refunds within 21 days if you choose direct deposit.",
                },
                {
                  q: "Do I need an SSN to file taxes?",
                  a: "You can file with either an SSN or ITIN. If you don't have either, we can help you apply for an ITIN as part of the filing process.",
                },
                {
                  q: "What if I made a mistake on my previous return?",
                  a: "No problem! We can help you file an amended return to correct any errors from previous years.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of international taxpayers who trust MyTaxPlanners 
              with their US taxes.
            </p>
            <Link to="/start-filing">
              <Button
                size="lg"
                className="bg-accent hover:bg-emerald-dark text-accent-foreground shadow-emerald"
              >
                Start Filing Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
