/*
  # Update is_admin Function for Multiple Admin Emails

  1. Changes
    - Update is_admin() function to support multiple admin emails
    - Use IN operator instead of single equality check
    - More flexible and maintainable admin management
    
  2. Security
    - Maintains same security level as before
    - Still uses auth.jwt() for email verification
    - SECURITY DEFINER ensures function runs with proper privileges
    
  3. Admin Management
    - To add new admins, simply update this function with new emails
    - Current admin: ucgul3gul@gmail.com
    - Easy to add more admins by adding to the IN clause
    
  4. Important Notes
    - This list MUST match VITE_ADMIN_EMAILS in .env file
    - When adding admins:
      a) Create user in Supabase Auth
      b) Update this function with their email
      c) Add email to VITE_ADMIN_EMAILS in .env
      d) Restart the application
*/

-- Create or replace function that supports multiple admin emails
-- Using CREATE OR REPLACE to avoid dropping dependencies
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if authenticated user's email is in the admin list
  -- Add or remove emails here to manage admin access
  RETURN (
    auth.jwt() ->> 'email' IN (
      'ucgul3gul@gmail.com'
      -- Add more admin emails here, comma-separated:
      -- 'admin2@example.com',
      -- 'admin3@example.com'
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
