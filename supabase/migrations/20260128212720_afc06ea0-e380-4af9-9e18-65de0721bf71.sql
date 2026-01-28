-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for tax filing form submissions
CREATE TABLE public.filing_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  visa_type TEXT NOT NULL,
  university TEXT,
  income_types TEXT[] NOT NULL,
  has_scholarship BOOLEAN DEFAULT false,
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.filing_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (public forms)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit filing form" 
ON public.filing_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admin can read (you can adjust this later)
CREATE POLICY "Admin can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

CREATE POLICY "Admin can view filing submissions" 
ON public.filing_submissions 
FOR SELECT 
USING (false);