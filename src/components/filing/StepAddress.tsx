import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FilingFormData } from "./types";

interface Props {
  formData: FilingFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const StepAddress = ({ formData, onInputChange }: Props) => (
  <motion.div
    key="step2"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <h2 className="text-xl font-bold text-foreground mb-6">Address & Passport Details</h2>

    <h3 className="text-md font-semibold text-foreground">Mailing Address (Full US Address)</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="mailingStreet">Street Address *</Label>
        <Input id="mailingStreet" name="mailingStreet" value={formData.mailingStreet} onChange={onInputChange} placeholder="123 Main Street" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mailingApt">Apt / Suite / Unit</Label>
        <Input id="mailingApt" name="mailingApt" value={formData.mailingApt} onChange={onInputChange} placeholder="Apt 4B" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mailingCity">City *</Label>
        <Input id="mailingCity" name="mailingCity" value={formData.mailingCity} onChange={onInputChange} placeholder="New York" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mailingState">State *</Label>
        <Input id="mailingState" name="mailingState" value={formData.mailingState} onChange={onInputChange} placeholder="NY" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mailingZip">ZIP Code *</Label>
        <Input id="mailingZip" name="mailingZip" value={formData.mailingZip} onChange={onInputChange} placeholder="10001" required />
      </div>
    </div>

    <div className="border-t border-border pt-6">
      <h3 className="text-md font-semibold text-foreground mb-4">Passport Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="passportNumber">Passport Number *</Label>
          <Input id="passportNumber" name="passportNumber" value={formData.passportNumber} onChange={onInputChange} placeholder="A12345678" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="passportIssuingCountry">Passport Issuing Country *</Label>
          <Input id="passportIssuingCountry" name="passportIssuingCountry" value={formData.passportIssuingCountry} onChange={onInputChange} placeholder="India" required />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="passportAddress">Address on Passport</Label>
          <Textarea id="passportAddress" name="passportAddress" value={formData.passportAddress} onChange={onInputChange} placeholder="Address as shown on passport" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="countryOfCitizenship">Country of Citizenship *</Label>
          <Input id="countryOfCitizenship" name="countryOfCitizenship" value={formData.countryOfCitizenship} onChange={onInputChange} placeholder="India" required />
        </div>
      </div>
    </div>
  </motion.div>
);

export default StepAddress;
