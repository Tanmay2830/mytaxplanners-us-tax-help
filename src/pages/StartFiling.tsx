import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, ArrowRight, Check, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Visa Status" },
  { id: 3, title: "Income Details" },
  { id: 4, title: "Review" },
];

const visaTypes = [
  { value: "f1", label: "F-1 Student Visa" },
  { value: "j1", label: "J-1 Exchange Visitor" },
  { value: "m1", label: "M-1 Vocational Student" },
  { value: "h1b", label: "H-1B Work Visa" },
  { value: "other", label: "Other" },
];

const incomeTypes = [
  { id: "wages", label: "Wages/Salary (W-2)" },
  { id: "scholarship", label: "Scholarship/Fellowship (1042-S)" },
  { id: "freelance", label: "Freelance/Self-Employment (1099)" },
  { id: "stipend", label: "Stipend/Assistantship" },
  { id: "interest", label: "Bank Interest" },
  { id: "other", label: "Other Income" },
];

const StartFiling = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visaType: "",
    arrivalDate: "",
    university: "",
    selectedIncome: [] as string[],
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIncomeToggle = (incomeId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedIncome: prev.selectedIncome.includes(incomeId)
        ? prev.selectedIncome.filter((id) => id !== incomeId)
        : [...prev.selectedIncome, incomeId],
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll review your information and contact you within 24 hours.",
    });

    setIsSubmitting(false);
    setCurrentStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      visaType: "",
      arrivalDate: "",
      university: "",
      selectedIncome: [],
      agreeTerms: false,
    });
  };

  return (
    <Layout>
      {/* Hero */}
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

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-2xl">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      currentStep > step.id
                        ? "bg-accent text-accent-foreground"
                        : currentStep === step.id
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 sm:w-24 h-1 mx-2 transition-colors ${
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
                  className={`text-xs sm:text-sm ${
                    currentStep >= step.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border">
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@university.edu"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Visa Status */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Visa Status
                  </h2>
                  <div className="space-y-2">
                    <Label>Visa Type</Label>
                    <Select
                      value={formData.visaType}
                      onValueChange={(value) =>
                        handleSelectChange("visaType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your visa type" />
                      </SelectTrigger>
                      <SelectContent>
                        {visaTypes.map((visa) => (
                          <SelectItem key={visa.value} value={visa.value}>
                            {visa.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="arrivalDate">Date of Arrival in US</Label>
                    <Input
                      id="arrivalDate"
                      name="arrivalDate"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">University/Institution</Label>
                    <Input
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      placeholder="e.g., Massachusetts Institute of Technology"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Income Details */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Income Types
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Select all types of income you received in the tax year:
                  </p>
                  <div className="space-y-4">
                    {incomeTypes.map((income) => (
                      <div
                        key={income.id}
                        className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() => handleIncomeToggle(income.id)}
                      >
                        <Checkbox
                          checked={formData.selectedIncome.includes(income.id)}
                          onCheckedChange={() => handleIncomeToggle(income.id)}
                        />
                        <Label className="cursor-pointer flex-1">
                          {income.label}
                        </Label>
                      </div>
                    ))}
                  </div>

                  {/* Document Upload Placeholder */}
                  <div className="mt-8 p-6 border-2 border-dashed border-border rounded-xl text-center">
                    <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                    <p className="font-medium text-foreground mb-1">
                      Upload Documents (Optional)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      You can upload your W-2, 1099, or 1042-S forms now or later
                    </p>
                    <Button variant="outline" className="mt-4">
                      Choose Files
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Review Your Information
                  </h2>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">
                        Personal Info
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {formData.firstName} {formData.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formData.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formData.phone || "No phone provided"}
                      </p>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">
                        Visa Status
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {visaTypes.find((v) => v.value === formData.visaType)
                          ?.label || "Not specified"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Arrival: {formData.arrivalDate || "Not specified"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formData.university || "No university specified"}
                      </p>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">
                        Income Types
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {formData.selectedIncome.length > 0
                          ? incomeTypes
                              .filter((i) =>
                                formData.selectedIncome.includes(i.id)
                              )
                              .map((i) => i.label)
                              .join(", ")
                          : "None selected"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-4">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          agreeTerms: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-accent hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/disclaimer" className="text-accent hover:underline">
                        Terms of Service
                      </a>
                      . I understand that my information will be used to prepare my tax return.
                    </Label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back
              </Button>

              {currentStep < steps.length ? (
                <Button
                  onClick={nextStep}
                  className="bg-accent hover:bg-emerald-dark text-accent-foreground"
                >
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
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
