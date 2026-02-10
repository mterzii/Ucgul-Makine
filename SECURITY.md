# Güvenlik Dokümantasyonu

Bu dokümanda projenin güvenlik mimarisi, en iyi uygulamalar ve olası riskler açıklanmaktadır.

## Güvenlik Mimarisi

### 1. Çok Katmanlı Güvenlik (Defense in Depth)

Proje 3 katmanlı güvenlik yaklaşımı kullanır:

```
┌─────────────────────────────────────────┐
│  Katman 1: Frontend UI Kontrolü        │
│  - ProtectedRoute component             │
│  - isAdmin(email) kontrolü              │
│  - Login sayfası email doğrulama        │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  Katman 2: Supabase Auth                │
│  - Session yönetimi                     │
│  - JWT token doğrulama                  │
│  - Email/password authentication        │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  Katman 3: Database RLS                 │
│  - Row Level Security policies          │
│  - is_admin() fonksiyonu                │
│  - SQL seviyesinde yetki kontrolü       │
└─────────────────────────────────────────┘
```

### 2. Row Level Security (RLS) Policies

#### Activities Tablosu Policies:

**SELECT (Okuma)**
```sql
CREATE POLICY "Anyone can view activities"
  ON activities
  FOR SELECT
  USING (true);
```
- Herkes (anonim dahil) okuyabilir
- Public içerik için uygundur
- SEO ve paylaşım için gereklidir

**INSERT (Ekleme)**
```sql
CREATE POLICY "Admins can insert activities"
  ON activities
  FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());
```
- Sadece authenticated kullanıcılar
- is_admin() fonksiyonu true dönmeli
- Admin olmayan kullanıcılar ekleme yapamaz

**UPDATE (Güncelleme)**
```sql
CREATE POLICY "Admins can update activities"
  ON activities
  FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());
```
- USING: Hangi kayıtları güncelleyebilir
- WITH CHECK: Güncelleme sonrası policy hala geçerli mi
- Her iki kontrolde de admin olmalı

**DELETE (Silme)**
```sql
CREATE POLICY "Admins can delete activities"
  ON activities
  FOR DELETE
  TO authenticated
  USING (is_admin());
```
- Sadece admin kullanıcılar silebilir
- Kalıcı veri kaybı riski nedeniyle kritik

### 3. Admin Kontrolü

#### is_admin() Fonksiyonu

```sql
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    auth.jwt() ->> 'email' IN (
      'ucgul3gul@gmail.com'
      -- Daha fazla admin eklenebilir
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

**Özellikler:**
- `auth.jwt()`: Supabase'in güvenli JWT token'ından email alır
- `SECURITY DEFINER`: Fonksiyon yüksek yetkilerle çalışır
- Email whitelist yaklaşımı: Sadece listedeki emailler admin
- Değişiklik için migration gerekir (güvenli)

#### Frontend Admin Kontrolü

```typescript
export function isAdmin(userEmail: string | undefined): boolean {
  if (!userEmail) return false;

  const adminEmails = import.meta.env.VITE_ADMIN_EMAILS
    ?.split(',')
    .map((email: string) => email.trim()) || [];

  return adminEmails.includes(userEmail);
}
```

**Not:** Bu kontrol SADECE UI içindir. Asıl güvenlik RLS tarafından sağlanır.

## Ortam Değişkenleri Güvenliği

### Güvenli Değişkenler (Public)

```env
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
VITE_ADMIN_EMAILS=admin@example.com
```

**Bu değişkenler client-side'da görünür olabilir:**
- `VITE_` prefix'i Vite tarafından client'a expose edilir
- ANON_KEY sadece RLS policies uygular (güvenli)
- Admin email listesi sadece UI kontrolü için (güvenli)

### Güvenli Olmayan Değişkenler (ASLA KULLANMAYIN)

```env
# ❌ ASLA KULLANMAYIN - BÜYÜK GÜVENLİK RİSKİ
SUPABASE_SERVICE_ROLE_KEY=xxx
```

**Neden tehlikeli:**
- RLS policies'ı bypass eder
- Tüm veritabanına sınırsız erişim sağlar
- Client-side'da kullanılmamalı
- Bu projede KULLANILMAMAKTADIR ✅

## Git Güvenliği

### .gitignore Kontrolü

```gitignore
# Hassas dosyalar
.env
*.local

# Build outputs
dist/
node_modules/
```

**Önemli:**
- `.env` dosyası ASLA commit edilmemelidir
- `.env.example` commit edilebilir (değerler içermez)
- `dist/` klasörü build output içerir, commit edilmez

### Pre-commit Kontrolü

Repository'ye push etmeden önce:

```bash
# .env dosyasının git'te olmadığını kontrol et
git status | grep .env
# Çıktı: nothing to commit (olmalı)

# Build çalışıyor mu test et
npm run build

# Type hatası var mı kontrol et
npm run typecheck
```

## Deployment Güvenliği

### Production Checklist

- [ ] `.env` dosyası commit edilmemiş
- [ ] Production Supabase projesi oluşturulmuş
- [ ] RLS policies production'da aktif
- [ ] Admin kullanıcı Supabase Auth'da oluşturulmuş
- [ ] `is_admin()` fonksiyonu production email'lerle güncellenmiş
- [ ] Environment variables hosting platformunda ayarlanmış
- [ ] HTTPS aktif (SSL certificate)
- [ ] CORS ayarları doğru yapılandırılmış

### Netlify/Vercel Deployment

**Environment Variables:**
```
VITE_SUPABASE_URL=production_url
VITE_SUPABASE_ANON_KEY=production_anon_key
VITE_ADMIN_EMAILS=production_admin_emails
```

**Build Settings:**
```
Build command: npm run build
Publish directory: dist
Node version: 18 or higher
```

## Yeni Admin Ekleme Prosedürü

### Güvenli Admin Ekleme (Önerilen)

1. **Supabase Dashboard'da kullanıcı oluştur:**
   - Authentication > Users > Add User
   - Email: `newadmin@example.com`
   - Password: Güçlü şifre oluştur
   - Auto Confirm: Aktif

2. **is_admin() fonksiyonunu güncelle:**
   ```sql
   CREATE OR REPLACE FUNCTION is_admin()
   RETURNS BOOLEAN AS $$
   BEGIN
     RETURN (
       auth.jwt() ->> 'email' IN (
         'ucgul3gul@gmail.com',
         'newadmin@example.com'  -- Yeni admin
       )
     );
   END;
   $$ LANGUAGE plpgsql SECURITY DEFINER;
   ```

3. **.env dosyasını güncelle:**
   ```env
   VITE_ADMIN_EMAILS=ucgul3gul@gmail.com,newadmin@example.com
   ```

4. **Uygulamayı yeniden başlat:**
   ```bash
   # Development
   npm run dev

   # Production (hosting platformunda redeploy)
   ```

### Senkronizasyon Önemli!

**Frontend ve Backend senkron olmalı:**

| Konum | Değer |
|-------|-------|
| `.env` → `VITE_ADMIN_EMAILS` | `admin1@x.com,admin2@x.com` |
| SQL → `is_admin()` fonksiyonu | `'admin1@x.com', 'admin2@x.com'` |

**Eğer senkron değilse:**
- Frontend "admin" olarak görüntüler ama...
- Backend (RLS) işlem yapmaya izin vermez
- 403 Forbidden hatası alırsınız

## Güvenlik Test Senaryoları

### Test 1: Anonim Kullanıcı

```javascript
// Login yapmadan
const { data, error } = await supabase
  .from('activities')
  .select('*');
// ✅ Başarılı (SELECT public)

const { error } = await supabase
  .from('activities')
  .insert({ title: 'Test' });
// ❌ Başarısız (RLS engeller)
```

### Test 2: Authenticated Ama Admin Değil

```javascript
// Normal kullanıcı olarak login
await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
});

const { data, error } = await supabase
  .from('activities')
  .insert({ title: 'Test' });
// ❌ Başarısız (is_admin() false döner)
```

### Test 3: Admin Kullanıcı

```javascript
// Admin olarak login
await supabase.auth.signInWithPassword({
  email: 'ucgul3gul@gmail.com',
  password: 'password'
});

const { data, error } = await supabase
  .from('activities')
  .insert({ title: 'Test' });
// ✅ Başarılı (is_admin() true döner)
```

## Olası Güvenlik Riskleri ve Çözümleri

### Risk 1: XSS (Cross-Site Scripting)

**Risk:**
- Kullanıcı input'u direkt render edilirse script çalışabilir

**Çözüm:**
- React otomatik olarak escape eder
- `dangerouslySetInnerHTML` kullanılmamıştır ✅
- Input validation uygulanmıştır

### Risk 2: SQL Injection

**Risk:**
- Ham SQL query'ler güvensizdir

**Çözüm:**
- Supabase client parametrize query kullanır ✅
- RLS policies ek koruma sağlar ✅
- Ham SQL çalıştırılmamaktadır ✅

### Risk 3: CSRF (Cross-Site Request Forgery)

**Risk:**
- Başka siteden auth endpoint'lere istek

**Çözüm:**
- Supabase JWT token tabanlı auth kullanır ✅
- SameSite cookie politikası ✅
- CORS ayarları aktif ✅

### Risk 4: Brute Force Attacks

**Risk:**
- Login denemesi ile şifre kırma

**Çözüm:**
- Supabase rate limiting uygular
- Email confirmation kullanılabilir
- Güçlü şifre politikası önerilir

## İletişim ve Raporlama

Güvenlik açığı tespit ederseniz:
- Hemen .env dosyasını kontrol edin
- Supabase Dashboard'da logs kontrol edin
- RLS policies'ı gözden geçirin
- Gerekirse admin şifrelerini değiştirin

## Güvenlik Kontrol Listesi

### Development

- [ ] .env dosyası gitignore'da
- [ ] ANON_KEY kullanılıyor (SERVICE_ROLE_KEY değil)
- [ ] RLS policies aktif
- [ ] Type safety (TypeScript) aktif
- [ ] ESLint kuralları uygulanıyor

### Production

- [ ] HTTPS aktif
- [ ] Environment variables güvenli
- [ ] Supabase project production mode
- [ ] Admin passwords güçlü
- [ ] Backup stratejisi var
- [ ] Monitoring aktif
- [ ] Error logging ayarlanmış

## Güncellemeler

Bu dokümantasyon düzenli olarak güncellenmeli:
- Yeni güvenlik tehditlerinde
- Supabase update'lerinde
- Yeni özellik eklendiğinde
- Güvenlik açığı tespit edildiğinde

**Son güncelleme:** 2024-02-10
