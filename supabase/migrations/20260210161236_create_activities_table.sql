/*
  # Create Activities Table

  1. New Tables
    - `activities`
      - `id` (bigserial, primary key) - Unique identifier for each activity
      - `title` (text, not null) - Activity title
      - `category` (text, not null) - Activity category (e.g., Makine İmalatı, Otomasyon)
      - `status` (text, not null) - Activity status: 'ongoing' or 'completed'
      - `description` (text, not null) - Detailed description of the activity
      - `start_date` (date, not null) - Activity start date
      - `end_date` (date, nullable) - Activity end date (null for ongoing activities)
      - `image_url` (text, not null) - URL to activity image
      - `created_at` (timestamptz) - Timestamp when record was created
      - `updated_at` (timestamptz) - Timestamp when record was last updated

  2. Security
    - Enable Row Level Security (RLS) on `activities` table
    - Add policy for authenticated users to read all activities
    - Add policy for authenticated users to insert activities
    - Add policy for authenticated users to update activities
    - Add policy for authenticated users to delete activities

  3. Notes
    - The status field is constrained to only allow 'ongoing' or 'completed' values
    - All dates use proper date types for better querying and filtering
    - Timestamps are automatically managed with triggers
*/

-- Create activities table
CREATE TABLE IF NOT EXISTS activities (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  category text NOT NULL,
  status text NOT NULL CHECK (status IN ('ongoing', 'completed')),
  description text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_activities_updated_at ON activities;
CREATE TRIGGER update_activities_updated_at
  BEFORE UPDATE ON activities
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Authenticated users can view all activities"
  ON activities
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert activities"
  ON activities
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update activities"
  ON activities
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete activities"
  ON activities
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO activities (title, category, status, description, start_date, end_date, image_url)
VALUES
  (
    'CNC Torna Modernizasyonu',
    'Makine İmalatı',
    'ongoing',
    'Endüstriyel CNC torna makinesi yenileme ve modernizasyon projesi. Hassas işleme kabiliyeti ile üretim kalitesi artırılmaktadır.',
    '2024-01-15',
    NULL,
    'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Hidrolik Press İmalatı',
    'Makine İmalatı',
    'ongoing',
    'Özel tasarım 200 ton kapasiteli hidrolik press üretimi devam etmektedir.',
    '2024-02-01',
    NULL,
    'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Konveyör Sistem Kurulumu',
    'Otomasyon',
    'ongoing',
    'Otomasyon konveyör hattı tasarım ve montaj çalışması yapılmaktadır.',
    '2024-02-10',
    NULL,
    'https://images.pexels.com/photos/3860003/pexels-photo-3860003.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Metal İşleme Tezgahı',
    'Makine İmalatı',
    'ongoing',
    'Hassas metal işleme tezgahı imalatı ve entegrasyonu devam etmektedir.',
    '2024-02-20',
    NULL,
    'https://images.pexels.com/photos/3932645/pexels-photo-3932645.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Otomotiv Yedek Parça Üretimi',
    'Parça İmalatı',
    'completed',
    'Otomotiv sektörü için yedek parça imalatı tamamlandı. Yüksek kaliteli parça üretimi ile müşteri memnuniyeti sağlandı.',
    '2023-10-01',
    '2023-12-15',
    'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Fabrika Bakım ve Onarım',
    'Bakım-Onarım',
    'completed',
    'Tekstil fabrikası makine parkı genel bakım hizmeti. Tüm makineler revize edildi ve üretim verimliliği artırıldı.',
    '2023-11-01',
    '2023-12-20',
    'https://images.pexels.com/photos/3860003/pexels-photo-3860003.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Özel Kalıp İmalatı',
    'Kalıp İmalatı',
    'completed',
    'Plastik enjeksiyon kalıpları tasarım ve üretim projesi başarıyla tamamlandı. Hassas toleranslarla üretilen kalıplar müşteriye teslim edildi.',
    '2023-09-01',
    '2023-11-30',
    'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Endüstriyel Kazan Revizyonu',
    'Bakım-Onarım',
    'completed',
    'Buhar kazanı revizyonu ve güvenlik testleri tamamlandı. Tüm güvenlik standartları karşılandı.',
    '2023-08-15',
    '2023-10-10',
    'https://images.pexels.com/photos/13869099/pexels-photo-13869099.jpeg?auto=compress&cs=tinysrgb&w=400'
  );