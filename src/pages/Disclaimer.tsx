import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
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
              Disclaimer
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-10"
          >
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-foreground mb-2">Important Notice</h2>
                <p className="text-muted-foreground">
                  The information provided on this website and through our services 
                  is for general informational purposes only. It should not be 
                  considered as professional tax advice for your specific situation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. No Tax Advice
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                MyTaxPlanners provides tax preparation services. While our team 
                includes experienced tax professionals, the information and 
                services we provide should not be construed as professional tax, 
                legal, or financial advice. For specific advice regarding your 
                individual tax situation, please consult with a qualified tax 
                professional, CPA, or tax attorney.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Accuracy of Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The accuracy of your tax return depends on the accuracy and 
                completeness of the information you provide. You are responsible 
                for reviewing your completed tax return before it is filed. 
                MyTaxPlanners is not responsible for errors resulting from 
                incorrect or incomplete information provided by you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Tax Law Changes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Tax laws are complex and change frequently. While we make every 
                effort to stay current with tax law changes, we cannot guarantee 
                that all information on our website reflects the most recent 
                changes to tax law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. No Guarantee of Results
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not guarantee any specific tax outcome, refund amount, or 
                tax liability reduction. Tax results depend on your individual 
                circumstances and are subject to IRS review and acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. IRS Actions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                MyTaxPlanners is not responsible for any actions taken by the 
                IRS or state tax authorities regarding your tax return, including 
                but not limited to audits, assessments, penalties, or interest 
                charges.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Third-Party Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not 
                responsible for the content, privacy practices, or accuracy of 
                information on these external sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, MyTaxPlanners shall not 
                be liable for any direct, indirect, incidental, special, 
                consequential, or punitive damages arising from your use of our 
                services or reliance on information provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Professional Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our tax preparation services are performed by trained 
                professionals who follow IRS guidelines and professional 
                standards. However, we are not a CPA firm, and our services 
                should not be considered as a substitute for advice from a 
                licensed CPA or tax attorney for complex tax matters.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this disclaimer or our services, 
                please contact us at{" "}
                <a
                  href="mailto:legal@mytaxplanners.com"
                  className="text-accent hover:underline"
                >
                  legal@mytaxplanners.com
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
