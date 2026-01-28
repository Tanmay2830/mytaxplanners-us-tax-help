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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: NotificationRequest = await req.json();
    // Using Resend account email - verify a domain to send to other addresses
    const adminEmail = "ta2830@columbia.edu";

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
      emailHtml = `
        <h1>New Tax Filing Submission</h1>
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        
        <h2>Tax Information</h2>
        <p><strong>Visa Type:</strong> ${data.visaType}</p>
        <p><strong>University:</strong> ${data.university || "N/A"}</p>
        <p><strong>Income Types:</strong> ${data.incomeTypes.join(", ")}</p>
        <p><strong>Has Scholarship:</strong> ${data.hasScholarship ? "Yes" : "No"}</p>
        
        ${data.additionalNotes ? `<h2>Additional Notes</h2><p>${data.additionalNotes.replace(/\n/g, "<br>")}</p>` : ""}
        
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
