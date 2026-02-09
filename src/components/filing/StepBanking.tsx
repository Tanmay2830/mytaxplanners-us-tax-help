import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { FilingFormData, bankAccountTypes } from "./types";

interface Props {
  formData: FilingFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}

const StepBanking = ({ formData, onInputChange, onSelectChange }: Props) => (
  <motion.div
    key="step5"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <h2 className="text-xl font-bold text-foreground mb-6">Banking & Other Details</h2>

    <h3 className="text-md font-semibold text-foreground">Bank Account for Refund</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label>Account Type *</Label>
        <Select value={formData.bankAccountType} onValueChange={(v) => onSelectChange("bankAccountType", v)}>
          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
          <SelectContent>
            {bankAccountTypes.map((t) => (
              <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="bankRoutingNumber">Routing Number *</Label>
        <Input id="bankRoutingNumber" name="bankRoutingNumber" value={formData.bankRoutingNumber} onChange={onInputChange} placeholder="9 digits" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bankAccountNumber">Account Number *</Label>
        <Input id="bankAccountNumber" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={onInputChange} placeholder="Account number" required />
      </div>
    </div>

    <div className="border-t border-border pt-6 space-y-4">
      <div className="space-y-2">
        <Label>Do you have any dependants in USA?</Label>
        <Select value={formData.hasDependants} onValueChange={(v) => onSelectChange("hasDependants", v)}>
          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="yes">Yes</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {formData.hasDependants === "yes" && (
        <div className="space-y-2">
          <Label htmlFor="dependantDetails">Dependant Details</Label>
          <Textarea id="dependantDetails" name="dependantDetails" value={formData.dependantDetails} onChange={onInputChange} placeholder="Name, relationship, SSN..." />
        </div>
      )}

      <div className="space-y-2">
        <Label>Have you taken health insurance from Marketplace (1095-A) or any charity?</Label>
        <Select value={formData.hasHealthInsurance} onValueChange={(v) => onSelectChange("hasHealthInsurance", v)}>
          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="yes">Yes</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {formData.hasHealthInsurance === "yes" && (
        <div className="space-y-2">
          <Label htmlFor="healthInsuranceDetails">Health Insurance Details</Label>
          <Textarea id="healthInsuranceDetails" name="healthInsuranceDetails" value={formData.healthInsuranceDetails} onChange={onInputChange} placeholder="Provide details..." />
        </div>
      )}

      <div className="space-y-2">
        <Label>Have you repaid interest on education loan and received 1098-E?</Label>
        <Select value={formData.hasEducationLoanInterest} onValueChange={(v) => onSelectChange("hasEducationLoanInterest", v)}>
          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="yes">Yes</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {formData.hasEducationLoanInterest === "yes" && (
        <div className="space-y-2">
          <Label htmlFor="educationLoanDetails">Education Loan Details</Label>
          <Textarea id="educationLoanDetails" name="educationLoanDetails" value={formData.educationLoanDetails} onChange={onInputChange} placeholder="Amount, lender details..." />
        </div>
      )}
    </div>

    <div className="border-t border-border pt-6 space-y-4">
      <div className="space-y-2">
        <Label>Do you have a State Issued ID?</Label>
        <Select value={formData.hasStateId} onValueChange={(v) => onSelectChange("hasStateId", v)}>
          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="yes">Yes</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {formData.hasStateId === "yes" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="stateIdNumber">State ID Number</Label>
            <Input id="stateIdNumber" name="stateIdNumber" value={formData.stateIdNumber} onChange={onInputChange} placeholder="ID number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stateLicenseId">State License ID</Label>
            <Input id="stateLicenseId" name="stateLicenseId" value={formData.stateLicenseId} onChange={onInputChange} placeholder="License ID" />
          </div>
        </div>
      )}
      {formData.hasStateId === "yes" && (
        <p className="text-sm text-muted-foreground">Please attach a copy of your State ID via email.</p>
      )}
    </div>
  </motion.div>
);

export default StepBanking;
