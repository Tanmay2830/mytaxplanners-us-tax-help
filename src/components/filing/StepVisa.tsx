import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { FilingFormData, visaTypes } from "./types";

interface Props {
  formData: FilingFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (name: string, value: string) => void;
}

const StepVisa = ({ formData, onInputChange, onSelectChange }: Props) => (
  <motion.div
    key="step3"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <h2 className="text-xl font-bold text-foreground mb-6">Visa & Immigration Details</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Visa Type *</Label>
        <Select value={formData.visaType} onValueChange={(v) => onSelectChange("visaType", v)}>
          <SelectTrigger><SelectValue placeholder="Select visa type" /></SelectTrigger>
          <SelectContent>
            {visaTypes.map((v) => (
              <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="visaExpiryDate">Visa Expiry Date *</Label>
        <Input id="visaExpiryDate" name="visaExpiryDate" type="date" value={formData.visaExpiryDate} onChange={onInputChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateOfFirstEntry">Date of First Entry in USA *</Label>
        <Input id="dateOfFirstEntry" name="dateOfFirstEntry" type="date" value={formData.dateOfFirstEntry} onChange={onInputChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="presentStatus">Present Status *</Label>
        <Input id="presentStatus" name="presentStatus" value={formData.presentStatus} onChange={onInputChange} placeholder="e.g., F-1 Active" required />
      </div>
    </div>

    <div className="space-y-2">
      <Label>Has there been a change in visa status?</Label>
      <Select value={formData.visaStatusChange} onValueChange={(v) => onSelectChange("visaStatusChange", v)}>
        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="no">No</SelectItem>
          <SelectItem value="yes">Yes</SelectItem>
        </SelectContent>
      </Select>
    </div>
    {formData.visaStatusChange === "yes" && (
      <div className="space-y-2">
        <Label htmlFor="visaStatusChangeDetails">Provide details of visa status change</Label>
        <Textarea id="visaStatusChangeDetails" name="visaStatusChangeDetails" value={formData.visaStatusChangeDetails} onChange={onInputChange} placeholder="Describe the change..." />
      </div>
    )}

    <div className="border-t border-border pt-6">
      <h3 className="text-md font-semibold text-foreground mb-4">Number of Days of Stay in Last 3 Years (Attach copy of I-94)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="daysOfStayYear1">Current Year</Label>
          <Input id="daysOfStayYear1" name="daysOfStayYear1" type="number" value={formData.daysOfStayYear1} onChange={onInputChange} placeholder="e.g., 200" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="daysOfStayYear2">Previous Year</Label>
          <Input id="daysOfStayYear2" name="daysOfStayYear2" type="number" value={formData.daysOfStayYear2} onChange={onInputChange} placeholder="e.g., 365" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="daysOfStayYear3">Year Before</Label>
          <Input id="daysOfStayYear3" name="daysOfStayYear3" type="number" value={formData.daysOfStayYear3} onChange={onInputChange} placeholder="e.g., 365" />
        </div>
      </div>
    </div>

    <div className="border-t border-border pt-6">
      <h3 className="text-md font-semibold text-foreground mb-4">I-20 Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="instituteName">Name of Institute (as per I-20)</Label>
          <Input id="instituteName" name="instituteName" value={formData.instituteName} onChange={onInputChange} placeholder="e.g., MIT" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="instituteAddress">Address of Institute</Label>
          <Input id="instituteAddress" name="instituteAddress" value={formData.instituteAddress} onChange={onInputChange} placeholder="Full address" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="directorName">Name of Director (as per I-20)</Label>
          <Input id="directorName" name="directorName" value={formData.directorName} onChange={onInputChange} placeholder="Director name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="directorContact">Director Contact Number</Label>
          <Input id="directorContact" name="directorContact" value={formData.directorContact} onChange={onInputChange} placeholder="+1 (234) 567-8900" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default StepVisa;
