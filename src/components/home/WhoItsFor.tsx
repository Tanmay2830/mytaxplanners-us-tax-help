import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, BookOpen } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "F-1 Students",
    description: "Full-time students on F-1 visa studying at US universities and colleges",
  },
  {
    icon: Briefcase,
    title: "OPT/CPT Workers",
    description: "Students working under Optional or Curricular Practical Training",
  },
  {
    icon: Globe,
    title: "J-1 Scholars",
    description: "Exchange visitors and researchers on J-1 visa programs",
  },
  {
    icon: BookOpen,
    title: "First-Time Filers",
    description: "International taxpayers filing US taxes for the first time",
  },
];

export const WhoItsFor = () => {
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
            Built for International Taxpayers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the unique tax situations of non-resident taxpayers and 
            scholars in the United States
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card card-hover text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <audience.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
