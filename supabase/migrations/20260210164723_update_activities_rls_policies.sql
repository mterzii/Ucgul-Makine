/*
  # Update Activities RLS Policies for Admin Access

  1. Changes
    - Drop existing overly permissive policies
    - Add new policy: Anyone (anon + authenticated) can SELECT activities
    - Add new policies: Only admin users can INSERT/UPDATE/DELETE activities
    
  2. Security
    - Public read access for all activities
    - Write operations restricted to admin users only
    - Admin check: user email must be in allowed admin emails list
    
  3. Notes
    - Admin emails will be checked via auth.jwt() -> email claim
    - Frontend will need to verify admin status before showing admin UI
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can view all activities" ON activities;
DROP POLICY IF EXISTS "Authenticated users can insert activities" ON activities;
DROP POLICY IF EXISTS "Authenticated users can update activities" ON activities;
DROP POLICY IF EXISTS "Authenticated users can delete activities" ON activities;

-- Allow anyone (including anonymous) to view activities
CREATE POLICY "Anyone can view activities"
  ON activities
  FOR SELECT
  USING (true);

-- Helper function to check if user is admin
-- This will be used in RLS policies
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if authenticated user's email is ucgul3gul@gmail.com
  -- In production, you might want to use a separate admin_users table
  RETURN (
    auth.jwt() ->> 'email' = 'ucgul3gul@gmail.com'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Only admins can insert activities
CREATE POLICY "Admins can insert activities"
  ON activities
  FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

-- Only admins can update activities
CREATE POLICY "Admins can update activities"
  ON activities
  FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Only admins can delete activities
CREATE POLICY "Admins can delete activities"
  ON activities
  FOR DELETE
  TO authenticated
  USING (is_admin());
