import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhoItsFor />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorksPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
