import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FilingFormData, visaTypes, maritalStatuses, bankAccountTypes } from "./types";

interface Props {
  formData: FilingFormData;
  onAgreeChange: (checked: boolean) => void;
}

const ReviewBlock = ({ title, items }: { title: string; items: { label: string; value: string }[] }) => (
  <div className="p-4 bg-muted rounded-lg">
    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
    {items.map((item, i) => (
      <p key={i} className="text-sm text-muted-foreground">
        <span className="font-medium text-foreground/80">{item.label}:</span> {item.value || "Not provided"}
      </p>
    ))}
  </div>
);

const StepReview = ({ formData, onAgreeChange }: Props) => {
  const visaLabel = visaTypes.find((v) => v.value === formData.visaType)?.label || formData.visaType;
  const maritalLabel = maritalStatuses.find((s) => s.value === formData.maritalStatus)?.label || formData.maritalStatus;
  const bankLabel = bankAccountTypes.find((t) => t.value === formData.bankAccountType)?.label || formData.bankAccountType;

  return (
    <motion.div
      key="step6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h2 className="text-xl font-bold text-foreground mb-6">Review Your Information</h2>

      <ReviewBlock title="Personal Info" items={[
        { label: "Name", value: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim() },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Date of Birth", value: formData.dateOfBirth },
        { label: "Marital Status", value: maritalLabel },
        { label: "SSN/TIN", value: formData.ssnTin ? "••••••" + formData.ssnTin.slice(-4) : "Not provided" },
      ]} />

      <ReviewBlock title="Address & Passport" items={[
        { label: "Mailing Address", value: [formData.mailingStreet, formData.mailingApt, formData.mailingCity, formData.mailingState, formData.mailingZip].filter(Boolean).join(", ") },
        { label: "Passport", value: formData.passportNumber },
        { label: "Issuing Country", value: formData.passportIssuingCountry },
        { label: "Citizenship", value: formData.countryOfCitizenship },
      ]} />

      <ReviewBlock title="Visa & Immigration" items={[
        { label: "Visa Type", value: visaLabel },
        { label: "Visa Expiry", value: formData.visaExpiryDate },
        { label: "First Entry", value: formData.dateOfFirstEntry },
        { label: "Present Status", value: formData.presentStatus },
        { label: "Status Change", value: formData.visaStatusChange === "yes" ? `Yes — ${formData.visaStatusChangeDetails}` : "No" },
        { label: "Days of Stay", value: [formData.daysOfStayYear1, formData.daysOfStayYear2, formData.daysOfStayYear3].filter(Boolean).join(" / ") || "Not provided" },
        { label: "Institute", value: formData.instituteName },
      ]} />

      <ReviewBlock title="Income & Employment" items={[
        { label: "Employers", value: formData.numberOfEmployers },
        { label: "Estimated Income", value: formData.estimatedIncome },
        { label: "Scholarship", value: formData.scholarshipAmount },
        { label: "Crypto P/L", value: formData.cryptoProfitLoss },
        { label: "Other Income", value: formData.otherIncomeDetails },
        { label: "Other Investments", value: formData.otherInvestmentDetails },
        { label: "Other Loans", value: formData.otherLoanDetails },
      ]} />

      <ReviewBlock title="Banking & Other" items={[
        { label: "Bank", value: `${bankLabel} — ****${formData.bankAccountNumber.slice(-4)}` },
        { label: "Dependants", value: formData.hasDependants === "yes" ? `Yes — ${formData.dependantDetails}` : "No" },
        { label: "Health Insurance", value: formData.hasHealthInsurance === "yes" ? `Yes — ${formData.healthInsuranceDetails}` : "No" },
        { label: "Education Loan (1098-E)", value: formData.hasEducationLoanInterest === "yes" ? `Yes — ${formData.educationLoanDetails}` : "No" },
        { label: "State ID", value: formData.hasStateId === "yes" ? `${formData.stateIdNumber} / ${formData.stateLicenseId}` : "No" },
      ]} />

      <div className="flex items-start space-x-3 pt-4">
        <Checkbox
          id="terms"
          checked={formData.agreeTerms}
          onCheckedChange={(checked) => onAgreeChange(checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm leading-relaxed">
          I agree to the{" "}
          <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>{" "}
          and{" "}
          <a href="/disclaimer" className="text-accent hover:underline">Terms of Service</a>.
          I understand that my information will be used to prepare my tax return.
        </Label>
      </div>

      <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
        📎 Please email your documents (W-2, 1042-S, I-94 copy, 1099, State ID copy, etc.) to <strong>myetaxgo@gmail.com</strong> after submitting this form.
      </p>
    </motion.div>
  );
};

export default StepReview;
