import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FilingFormData } from "./types";

interface Props {
  formData: FilingFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const StepIncome = ({ formData, onInputChange }: Props) => (
  <motion.div
    key="step4"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <h2 className="text-xl font-bold text-foreground mb-6">Income & Employment</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="numberOfEmployers">Number of Employers (Attach all W-2) *</Label>
        <Input id="numberOfEmployers" name="numberOfEmployers" type="number" value={formData.numberOfEmployers} onChange={onInputChange} placeholder="e.g., 2" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="estimatedIncome">Estimated Income During Year *</Label>
        <Input id="estimatedIncome" name="estimatedIncome" value={formData.estimatedIncome} onChange={onInputChange} placeholder="e.g., $45,000" required />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="scholarshipAmount">Scholarship (if any) — Attach Form 1042-S</Label>
      <Input id="scholarshipAmount" name="scholarshipAmount" value={formData.scholarshipAmount} onChange={onInputChange} placeholder="Scholarship amount or details" />
    </div>

    <div className="space-y-2">
      <Label htmlFor="cryptoProfitLoss">Crypto Currency Profit or Loss</Label>
      <Input id="cryptoProfitLoss" name="cryptoProfitLoss" value={formData.cryptoProfitLoss} onChange={onInputChange} placeholder="e.g., +$500 or -$200" />
    </div>

    <div className="space-y-2">
      <Label htmlFor="otherIncomeDetails">Other Income (Interest, Dividend, Shares — Attach Form 1099 if any)</Label>
      <Textarea id="otherIncomeDetails" name="otherIncomeDetails" value={formData.otherIncomeDetails} onChange={onInputChange} placeholder="Provide details of interest, dividends, shares, etc." />
    </div>

    <div className="space-y-2">
      <Label htmlFor="otherInvestmentDetails">Other Investment Details (if any)</Label>
      <Textarea id="otherInvestmentDetails" name="otherInvestmentDetails" value={formData.otherInvestmentDetails} onChange={onInputChange} placeholder="Details about other investments" />
    </div>

    <div className="space-y-2">
      <Label htmlFor="otherLoanDetails">Other Loan Details (if any)</Label>
      <Textarea id="otherLoanDetails" name="otherLoanDetails" value={formData.otherLoanDetails} onChange={onInputChange} placeholder="Details about other loans" />
    </div>
  </motion.div>
);

export default StepIncome;
