import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FilingFormData, initialFormData, steps, visaTypes } from "@/components/filing/types";
import StepPersonal from "@/components/filing/StepPersonal";
import StepAddress from "@/components/filing/StepAddress";
import StepVisa from "@/components/filing/StepVisa";
import StepIncome from "@/components/filing/StepIncome";
import StepBanking from "@/components/filing/StepBanking";
import StepReview from "@/components/filing/StepReview";

const StartFiling = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FilingFormData>({ ...initialFormData });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Build additional data JSON
    const additionalData = {
      middleName: formData.middleName,
      dateOfBirth: formData.dateOfBirth,
      maritalStatus: formData.maritalStatus,
      ssnTin: formData.ssnTin,
      mailingAddress: `${formData.mailingStreet}, ${formData.mailingApt}, ${formData.mailingCity}, ${formData.mailingState} ${formData.mailingZip}`,
      passportNumber: formData.passportNumber,
      passportIssuingCountry: formData.passportIssuingCountry,
      passportAddress: formData.passportAddress,
      countryOfCitizenship: formData.countryOfCitizenship,
      dateOfFirstEntry: formData.dateOfFirstEntry,
      visaExpiryDate: formData.visaExpiryDate,
      visaStatusChange: formData.visaStatusChange,
      visaStatusChangeDetails: formData.visaStatusChangeDetails,
      presentStatus: formData.presentStatus,
      daysOfStay: `${formData.daysOfStayYear1} / ${formData.daysOfStayYear2} / ${formData.daysOfStayYear3}`,
      instituteName: formData.instituteName,
      instituteAddress: formData.instituteAddress,
      directorName: formData.directorName,
      directorContact: formData.directorContact,
      numberOfEmployers: formData.numberOfEmployers,
      estimatedIncome: formData.estimatedIncome,
      scholarshipAmount: formData.scholarshipAmount,
      cryptoProfitLoss: formData.cryptoProfitLoss,
      otherIncomeDetails: formData.otherIncomeDetails,
      otherInvestmentDetails: formData.otherInvestmentDetails,
      otherLoanDetails: formData.otherLoanDetails,
      bankAccountType: formData.bankAccountType,
      bankRoutingNumber: formData.bankRoutingNumber,
      bankAccountNumber: formData.bankAccountNumber,
      hasDependants: formData.hasDependants,
      dependantDetails: formData.dependantDetails,
      hasHealthInsurance: formData.hasHealthInsurance,
      healthInsuranceDetails: formData.healthInsuranceDetails,
      hasEducationLoanInterest: formData.hasEducationLoanInterest,
      educationLoanDetails: formData.educationLoanDetails,
      hasStateId: formData.hasStateId,
      stateIdNumber: formData.stateIdNumber,
      stateLicenseId: formData.stateLicenseId,
    };

    try {
      const { error: dbError } = await supabase
        .from("filing_submissions")
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          visa_type: formData.visaType,
          university: formData.instituteName || null,
          income_types: [
            formData.numberOfEmployers ? "W-2" : "",
            formData.scholarshipAmount ? "1042-S" : "",
            formData.otherIncomeDetails ? "1099" : "",
            formData.cryptoProfitLoss ? "Crypto" : "",
          ].filter(Boolean),
          has_scholarship: !!formData.scholarshipAmount,
          additional_notes: JSON.stringify(additionalData),
        });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save submission");
      }

      const { error: fnError } = await supabase.functions.invoke("send-notification", {
        body: {
          type: "filing",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          visaType: formData.visaType,
          university: formData.instituteName,
          incomeTypes: ["W-2", formData.scholarshipAmount ? "1042-S" : "", formData.otherIncomeDetails ? "1099" : ""].filter(Boolean),
          hasScholarship: !!formData.scholarshipAmount,
          additionalNotes: JSON.stringify(additionalData, null, 2),
        },
      });

      if (fnError) {
        console.error("Email notification error:", fnError);
      }

      toast({
        title: "Application Submitted!",
        description: "We'll review your information and contact you within 24 hours. Please email your documents to myetaxgo@gmail.com.",
      });

      setCurrentStep(1);
      setFormData({ ...initialFormData });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="bg-hero py-16 lg:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Tax Filing
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Complete this form to get started. It only takes a few minutes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-2xl">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-colors ${
                      currentStep > step.id
                        ? "bg-accent text-accent-foreground"
                        : currentStep === step.id
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-6 sm:w-12 md:w-16 h-1 mx-1 transition-colors ${
                        currentStep > step.id ? "bg-accent" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step) => (
                <span
                  key={step.id}
                  className={`text-[10px] sm:text-xs text-center ${
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                  style={{ width: `${100 / steps.length}%` }}
                >
                  {step.title}
                </span>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <StepPersonal formData={formData} onInputChange={handleInputChange} onSelectChange={handleSelectChange} />
              )}
              {currentStep === 2 && (
                <StepAddress formData={formData} onInputChange={handleInputChange} />
              )}
              {currentStep === 3 && (
                <StepVisa formData={formData} onInputChange={handleInputChange} onSelectChange={handleSelectChange} />
              )}
              {currentStep === 4 && (
                <StepIncome formData={formData} onInputChange={handleInputChange} />
              )}
              {currentStep === 5 && (
                <StepBanking formData={formData} onInputChange={handleInputChange} onSelectChange={handleSelectChange} />
              )}
              {currentStep === 6 && (
                <StepReview formData={formData} onAgreeChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: checked }))} />
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                <ArrowLeft className="mr-2 w-4 h-4" /> Back
              </Button>

              {currentStep < steps.length ? (
                <Button onClick={nextStep} className="bg-accent hover:bg-emerald-dark text-accent-foreground">
                  Next <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.agreeTerms || isSubmitting}
                  className="bg-accent hover:bg-emerald-dark text-accent-foreground shadow-emerald"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartFiling;
