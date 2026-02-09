export interface FilingFormData {
  // Personal Info
  email: string;
  phone: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  maritalStatus: string;
  ssnTin: string;

  // Address & Passport
  mailingStreet: string;
  mailingApt: string;
  mailingCity: string;
  mailingState: string;
  mailingZip: string;
  passportNumber: string;
  passportIssuingCountry: string;
  passportAddress: string;
  countryOfCitizenship: string;

  // Visa & Immigration
  dateOfFirstEntry: string;
  visaType: string;
  visaExpiryDate: string;
  visaStatusChange: string;
  visaStatusChangeDetails: string;
  presentStatus: string;
  daysOfStayYear1: string;
  daysOfStayYear2: string;
  daysOfStayYear3: string;
  instituteName: string;
  instituteAddress: string;
  directorName: string;
  directorContact: string;

  // Income & Employment
  numberOfEmployers: string;
  estimatedIncome: string;
  scholarshipAmount: string;
  cryptoProfitLoss: string;
  otherIncomeDetails: string;
  otherInvestmentDetails: string;
  otherLoanDetails: string;

  // Banking & Other
  bankAccountType: string;
  bankRoutingNumber: string;
  bankAccountNumber: string;
  hasDependants: string;
  dependantDetails: string;
  hasHealthInsurance: string;
  healthInsuranceDetails: string;
  hasEducationLoanInterest: string;
  educationLoanDetails: string;
  hasStateId: string;
  stateIdNumber: string;
  stateLicenseId: string;

  // Consent
  agreeTerms: boolean;
}

export const initialFormData: FilingFormData = {
  email: "",
  phone: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: "",
  maritalStatus: "",
  ssnTin: "",
  mailingStreet: "",
  mailingApt: "",
  mailingCity: "",
  mailingState: "",
  mailingZip: "",
  passportNumber: "",
  passportIssuingCountry: "",
  passportAddress: "",
  countryOfCitizenship: "",
  dateOfFirstEntry: "",
  visaType: "",
  visaExpiryDate: "",
  visaStatusChange: "",
  visaStatusChangeDetails: "",
  presentStatus: "",
  daysOfStayYear1: "",
  daysOfStayYear2: "",
  daysOfStayYear3: "",
  instituteName: "",
  instituteAddress: "",
  directorName: "",
  directorContact: "",
  numberOfEmployers: "",
  estimatedIncome: "",
  scholarshipAmount: "",
  cryptoProfitLoss: "",
  otherIncomeDetails: "",
  otherInvestmentDetails: "",
  otherLoanDetails: "",
  bankAccountType: "",
  bankRoutingNumber: "",
  bankAccountNumber: "",
  hasDependants: "",
  dependantDetails: "",
  hasHealthInsurance: "",
  healthInsuranceDetails: "",
  hasEducationLoanInterest: "",
  educationLoanDetails: "",
  hasStateId: "",
  stateIdNumber: "",
  stateLicenseId: "",
  agreeTerms: false,
};

export const visaTypes = [
  { value: "f1", label: "F-1 Student Visa" },
  { value: "j1", label: "J-1 Exchange Visitor" },
  { value: "m1", label: "M-1 Vocational Student" },
  { value: "h1b", label: "H-1B Work Visa" },
  { value: "h4", label: "H-4 Dependent Visa" },
  { value: "l1", label: "L-1 Intracompany Transfer" },
  { value: "opt", label: "OPT/CPT" },
  { value: "other", label: "Other" },
];

export const maritalStatuses = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "separated", label: "Separated" },
];

export const bankAccountTypes = [
  { value: "checking", label: "Checking" },
  { value: "savings", label: "Savings" },
];

export const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Address & Passport" },
  { id: 3, title: "Visa & Immigration" },
  { id: 4, title: "Income & Employment" },
  { id: 5, title: "Banking & Other" },
  { id: 6, title: "Review" },
];
