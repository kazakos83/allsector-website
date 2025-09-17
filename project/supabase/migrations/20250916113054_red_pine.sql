/*
  # Fix RLS policy for contact submissions

  1. Security Changes
    - Add policy to allow anonymous users to insert contact submissions
    - This enables public contact forms to work properly
    - Maintains security by only allowing INSERT operations for anon users

  2. Policy Details
    - Allows INSERT operations for anonymous (anon) role
    - Does not affect existing SELECT policies for authenticated users
    - Ensures contact forms work for website visitors
*/

-- Allow anonymous users to insert contact submissions (for public contact forms)
CREATE POLICY "Allow anonymous contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);