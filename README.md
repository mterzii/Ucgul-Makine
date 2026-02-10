# Makine İmalat Web Sitesi

Modern, profesyonel makine imalat firması web sitesi. React + TypeScript + Vite + Supabase ile geliştirilmiştir.

## Özellikler

- Responsive tasarım (mobil, tablet, desktop)
- Dinamik faaliyet yönetimi (Admin paneli)
- Supabase Auth ile güvenli admin girişi
- Row Level Security (RLS) ile veri güvenliği
- EmailJS entegrasyonu ile iletişim formu
- Modern animasyonlar (Framer Motion)
- SEO dostu yapı

## Teknolojiler

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase (Database + Auth)
- React Router
- Framer Motion
- Lucide React (Icons)
- EmailJS

## Kurulum

### 1. Projeyi İndirin

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Ortam Değişkenlerini Ayarlayın

`.env.example` dosyasını `.env` olarak kopyalayın:

```bash
cp .env.example .env
```

`.env` dosyasını düzenleyin:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Admin Configuration
VITE_ADMIN_EMAILS=admin@example.com
```

#### Supabase Bilgilerini Alma:

1. [Supabase Dashboard](https://app.supabase.com) üzerinden projenize girin
2. Settings > API menüsüne gidin
3. `Project URL` ve `anon public` key değerlerini kopyalayın
4. `.env` dosyasına yapıştırın

### 4. Veritabanını Hazırlayın

Supabase SQL Editor'de migrations klasöründeki dosyaları sırayla çalıştırın:

1. `supabase/migrations/20260210161236_create_activities_table.sql`
2. `supabase/migrations/20260210164723_update_activities_rls_policies.sql`

### 5. Admin Kullanıcı Oluşturun

1. Supabase Dashboard > Authentication > Users
2. "Add User" butonuna tıklayın
3. Email ve şifre girin (örn: `admin@example.com`)
4. `.env` dosyasındaki `VITE_ADMIN_EMAILS` değişkenine bu email'i ekleyin
5. **ÖNEMLİ:** Aynı email'i Supabase SQL Editor'de güncelleyin:

```sql
-- is_admin fonksiyonunu güncelle (email adresinizi yazın)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    auth.jwt() ->> 'email' IN ('admin@example.com', 'admin2@example.com')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 6. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

### 7. Production Build

```bash
npm run build
npm run preview
```

## Admin Panel

Admin paneline erişim için:

1. `http://localhost:5173/admin/login` adresine gidin
2. Supabase'de oluşturduğunuz admin email ve şifreyi girin
3. Başarılı giriş sonrası admin paneline yönlendirileceksiniz

### Admin Panel Özellikleri:

- Faaliyet ekleme, düzenleme, silme
- Durum değiştirme (devam eden / tamamlanmış)
- Kategori yönetimi
- Görsel yükleme
- Gerçek zamanlı önizleme

## Güvenlik

### RLS (Row Level Security)

Veritabanı seviyesinde güvenlik katmanları:

- **SELECT:** Herkes okuyabilir (public erişim)
- **INSERT/UPDATE/DELETE:** Sadece admin kullanıcılar

### Admin Kontrolü

İki katmanlı admin kontrolü:

1. **Frontend:** `VITE_ADMIN_EMAILS` ile UI kontrolü
2. **Backend:** `is_admin()` fonksiyonu ile RLS kontrolü

### Önemli Güvenlik Notları:

- `.env` dosyası asla Git'e eklenmemelidir (gitignore'da)
- `SUPABASE_SERVICE_ROLE_KEY` kullanılmamaktadır (güvenli)
- Sadece `VITE_SUPABASE_ANON_KEY` kullanılır (public-safe)
- Admin email listesi hem `.env` hem `is_admin()` fonksiyonunda güncel olmalıdır

### Yeni Admin Ekleme:

1. Supabase Dashboard'da yeni kullanıcı oluşturun
2. `.env` dosyasına email ekleyin: `VITE_ADMIN_EMAILS=admin1@example.com,admin2@example.com`
3. `is_admin()` fonksiyonunu SQL Editor'de güncelleyin (yukarıdaki örneğe bakın)
4. Uygulamayı yeniden başlatın

## Production Deployment

### Netlify / Vercel

1. Repository'yi GitHub'a pushlayın
2. Netlify/Vercel'de "Import Project" yapın
3. Environment Variables bölümüne `.env` içeriğini ekleyin
4. Deploy edin

### Environment Variables (Production):

```
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_anon_key
VITE_ADMIN_EMAILS=admin@yourcompany.com
```

## Klasör Yapısı

```
project/
├── src/
│   ├── components/         # React bileşenleri
│   │   ├── admin/         # Admin panel bileşenleri
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── admin/         # Admin sayfaları
│   │   ├── Home.tsx
│   │   └── ...
│   ├── context/           # React Context (Auth)
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utility fonksiyonlar
│   │   ├── supabase.ts   # Supabase client
│   │   └── activities.ts  # Activity CRUD
│   ├── App.tsx
│   └── main.tsx
├── supabase/
│   └── migrations/        # Database migrations
├── .env                   # Ortam değişkenleri (Git'e eklenmez)
├── .env.example          # Örnek env dosyası
└── README.md
```

## Sorun Giderme

### Admin paneline giriş yapamıyorum

- Email Supabase'de kayıtlı mı kontrol edin
- `.env` dosyasında `VITE_ADMIN_EMAILS` doğru mu?
- `is_admin()` fonksiyonu güncel mi?
- Tarayıcı console'unda hata var mı kontrol edin

### Faaliyetler görünmüyor

- Supabase migrations çalıştırıldı mı?
- RLS policies aktif mi?
- Network sekmesinde API hatası var mı?

### Build hatası alıyorum

```bash
npm run typecheck  # TypeScript hatalarını kontrol et
npm run lint       # ESLint hatalarını kontrol et
```

## Lisans

Bu proje özel kullanım içindir.

## İletişim

Sorularınız için: [İletişim formu](/)
