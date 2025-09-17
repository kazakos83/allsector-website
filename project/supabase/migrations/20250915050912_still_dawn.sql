/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `company` (text, optional)
      - `service` (text, required)
      - `location` (text, required)
      - `message` (text, required)
      - `urgency` (text, required)
      - `submitted_at` (timestamptz, default now)
      - `created_at` (timestamptz, default now)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert submissions
    - Add policy for authenticated users to read submissions (admin access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service text NOT NULL,
  location text NOT NULL,
  message text NOT NULL,
  urgency text NOT NULL CHECK (urgency IN ('emergency', 'urgent', 'standard')),
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert submissions
CREATE POLICY "Service role can insert submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Allow authenticated users to read submissions (for admin dashboard)
CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at 
  ON contact_submissions(submitted_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_urgency 
  ON contact_submissions(urgency);