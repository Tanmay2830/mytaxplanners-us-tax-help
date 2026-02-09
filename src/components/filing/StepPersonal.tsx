import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { FilingFormData, maritalStatuses } from "./types";

interface Props {
  formData: FilingFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}

const StepPersonal = ({ formData, onInputChange, onSelectChange }: Props) => (
  <motion.div
    key="step1"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <h2 className="text-xl font-bold text-foreground mb-6">Personal Information</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name *</Label>
        <Input id="firstName" name="firstName" value={formData.firstName} onChange={onInputChange} placeholder="John" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="middleName">Middle Name</Label>
        <Input id="middleName" name="middleName" value={formData.middleName} onChange={onInputChange} placeholder="M." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name *</Label>
        <Input id="lastName" name="lastName" value={formData.lastName} onChange={onInputChange} placeholder="Doe" required />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={onInputChange} placeholder="john@university.edu" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Contact Number *</Label>
        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={onInputChange} placeholder="+1 (234) 567-8900" required />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
        <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={onInputChange} required />
      </div>
      <div className="space-y-2">
        <Label>Marital Status *</Label>
        <Select value={formData.maritalStatus} onValueChange={(v) => onSelectChange("maritalStatus", v)}>
          <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
          <SelectContent>
            {maritalStatuses.map((s) => (
              <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="ssnTin">SSN / TIN (Required — you may also share via email)</Label>
      <Input id="ssnTin" name="ssnTin" value={formData.ssnTin} onChange={onInputChange} placeholder="XXX-XX-XXXX" />
    </div>
  </motion.div>
);

export default StepPersonal;
