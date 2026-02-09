import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactNotification {
  type: "contact";
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface FilingNotification {
  type: "filing";
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  visaType: string;
  university?: string;
  incomeTypes: string[];
  hasScholarship: boolean;
  additionalNotes?: string;
}

type NotificationRequest = ContactNotification | FilingNotification;

function formatAdditionalData(jsonStr: string | undefined): string {
  if (!jsonStr) return "";
  try {
    const data = JSON.parse(jsonStr);
    const fields: { label: string; key: string }[] = [
      { label: "Middle Name", key: "middleName" },
      { label: "Date of Birth", key: "dateOfBirth" },
      { label: "Marital Status", key: "maritalStatus" },
      { label: "SSN/TIN", key: "ssnTin" },
      { label: "Mailing Address", key: "mailingAddress" },
      { label: "Passport Number", key: "passportNumber" },
      { label: "Passport Issuing Country", key: "passportIssuingCountry" },
      { label: "Address on Passport", key: "passportAddress" },
      { label: "Country of Citizenship", key: "countryOfCitizenship" },
      { label: "Date of First Entry", key: "dateOfFirstEntry" },
      { label: "Visa Expiry Date", key: "visaExpiryDate" },
      { label: "Visa Status Change", key: "visaStatusChange" },
      { label: "Visa Status Change Details", key: "visaStatusChangeDetails" },
      { label: "Present Status", key: "presentStatus" },
      { label: "Days of Stay (3 years)", key: "daysOfStay" },
      { label: "Institute Name", key: "instituteName" },
      { label: "Institute Address", key: "instituteAddress" },
      { label: "Director Name", key: "directorName" },
      { label: "Director Contact", key: "directorContact" },
      { label: "Number of Employers", key: "numberOfEmployers" },
      { label: "Estimated Income", key: "estimatedIncome" },
      { label: "Scholarship", key: "scholarshipAmount" },
      { label: "Crypto Profit/Loss", key: "cryptoProfitLoss" },
      { label: "Other Income Details", key: "otherIncomeDetails" },
      { label: "Other Investment Details", key: "otherInvestmentDetails" },
      { label: "Other Loan Details", key: "otherLoanDetails" },
      { label: "Bank Account Type", key: "bankAccountType" },
      { label: "Bank Routing Number", key: "bankRoutingNumber" },
      { label: "Bank Account Number", key: "bankAccountNumber" },
      { label: "Has Dependants", key: "hasDependants" },
      { label: "Dependant Details", key: "dependantDetails" },
      { label: "Health Insurance", key: "hasHealthInsurance" },
      { label: "Health Insurance Details", key: "healthInsuranceDetails" },
      { label: "Education Loan Interest (1098-E)", key: "hasEducationLoanInterest" },
      { label: "Education Loan Details", key: "educationLoanDetails" },
      { label: "Has State ID", key: "hasStateId" },
      { label: "State ID Number", key: "stateIdNumber" },
      { label: "State License ID", key: "stateLicenseId" },
    ];

    return fields
      .filter((f) => data[f.key])
      .map((f) => `<p><strong>${f.label}:</strong> ${String(data[f.key]).replace(/\n/g, "<br>")}</p>`)
      .join("\n");
  } catch {
    return `<pre>${jsonStr}</pre>`;
  }
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: NotificationRequest = await req.json();
    const adminEmail = "myetaxgo@gmail.com";

    let emailHtml: string;
    let emailSubject: string;

    if (data.type === "contact") {
      emailSubject = `New Contact Form: ${data.subject || "General Inquiry"}`;
      emailHtml = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject || "N/A"}</p>
        <h2>Message:</h2>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted via MyTaxPlanners Contact Form</p>
      `;
    } else {
      emailSubject = `New Tax Filing Request: ${data.firstName} ${data.lastName}`;
      const additionalHtml = formatAdditionalData(data.additionalNotes);
      emailHtml = `
        <h1>New Tax Filing Submission</h1>
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        
        <h2>Tax Information</h2>
        <p><strong>Visa Type:</strong> ${data.visaType}</p>
        <p><strong>University/Institute:</strong> ${data.university || "N/A"}</p>
        <p><strong>Income Types:</strong> ${data.incomeTypes.join(", ")}</p>
        <p><strong>Has Scholarship:</strong> ${data.hasScholarship ? "Yes" : "No"}</p>
        
        ${additionalHtml ? `<h2>Complete Details</h2>${additionalHtml}` : ""}
        
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted via MyTaxPlanners Filing Form</p>
      `;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MyTaxPlanners <onboarding@resend.dev>",
        to: [adminEmail],
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Resend API error: ${error}`);
    }

    const emailResponse = await res.json();
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
