# Can Kepenk SEO ve Yapısal Veri (JSON-LD) Spesifikasyonu

- **Tarih:** 2026-09-10
- **Proje:** Can Kepenk Kurumsal Web Sitesi SEO Altyapısı
- **Hedef Domain:** `https://cankepenk.com`
- **Konum:** Esenler / İstanbul, Türkiye
- **Telefon:** `+90 505 447 13 56`
- **E-posta:** `cankepenkk@gmail.com`

---

## 1. Amaç ve Kapsam

Bu doküman, Can Kepenk (`https://cankepenk.com`) web sitesinin Google, Yandex, Bing ve sosyal medya platformlarında en üst düzeyde görünürlük, tıklanma oranı (CTR) ve zengin sonuç (rich snippets / SERP akordiyonu & yıldız değerlendirmesi) elde etmesi için gereken SEO mimarisini tanımlar.

---

## 2. Meta Etiketleri ve Sosyal Paylaşım Mimarisi (`index.html`)

### 2.1 Temel Meta ve Coğrafi Hedefleme
- **Title Tag (Tam 60 Karakter, Yüksek Arama Niyeti):**  
  `Can Kepenk | İstanbul Otomatik Kepenk İmalatı & 7/24 Servis`
- **Meta Description (158 Karakter, Doğrudan İletişim ve Çağrı):**  
  `İstanbul genelinde galvaniz çelik ve alüminyum otomatik kepenk imalatı, montajı ve 7/24 acil mobil tamir servisi. Yerinde ücretsiz keşif için: 0505 447 13 56`
- **Keywords:**  
  `can kepenk, otomatik kepenk istanbul, kepenk tamiri, dükkan kepengi, motorlu kepenk, garaj kapısı, esenler kepenk, acil kepenk servisi, kepenk motoru tamiri, galvaniz kepenk, alüminyum kepenk`
- **Canonical URL:**  
  `<link rel="canonical" href="https://cankepenk.com/">`
- **Robots Direktifi:**  
  `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **Yerel & Coğrafi Meta Etiketleri:**
  - `geo.region`: `TR-34`
  - `geo.placename`: `İstanbul, Esenler`
  - `geo.position`: `41.0336;28.8879` (Esenler Osmangazi Caddesi koordinatları)
  - `ICBM`: `41.0336, 28.8879`

### 2.2 Open Graph & Twitter Cards
- `og:locale`: `tr_TR`
- `og:type`: `website`
- `og:site_name`: `Can Kepenk Sistemleri`
- `og:title`: `Can Kepenk | İstanbul Otomatik Kepenk İmalatı & 7/24 Acil Servis`
- `og:description`: `İstanbul'un her noktasına 30 dakikada acil servis, galvaniz çelik ve alüminyum otomatik kepenk imalatı. 2 yıl parça garantisi.`
- `og:url`: `https://cankepenk.com/`
- `og:image`: `https://cankepenk.com/assets/images/kepenk-ref-9.jpg` (1200x630 veya yüksek çözünürlük)
- `twitter:card`: `summary_large_image`
- `twitter:title`: `Can Kepenk | İstanbul Otomatik Kepenk İmalatı & 7/24 Acil Servis`
- `twitter:description`: `İstanbul'un her noktasına 30 dakikada acil servis, otomatik kepenk imalatı ve montajı.`
- `twitter:image`: `https://cankepenk.com/assets/images/kepenk-ref-9.jpg`

---

## 3. Yapısal Veri (Schema.org / JSON-LD) `@graph` Mimarisi

`index.html` içerisindeki tek bir `<script type="application/ld+json">` bloğunda birbiriyle ilişkili 4 şema nesnesi birleştirilir:

### 3.1 `HomeAndConstructionBusiness` / `LocalBusiness`
- `@id`: `https://cankepenk.com/#organization`
- `name`: `Can Kepenk Sistemleri`
- `legalName`: `Can Kepenk İmalat ve Montaj Sistemleri`
- `url`: `https://cankepenk.com`
- `logo`: `https://cankepenk.com/assets/logo.svg`
- `image`: `https://cankepenk.com/assets/images/kepenk-ref-9.jpg`
- `telephone`: `+905054471356`
- `email`: `cankepenkk@gmail.com`
- `priceRange`: `₺₺`
- `currenciesAccepted`: `TRY`
- `paymentAccepted`: `Nakit, Havale/EFT, Kredi Kartı`
- `address`:
  - `streetAddress`: `Osmangazi Caddesi`
  - `addressLocality`: `Esenler`
  - `addressRegion`: `İstanbul`
  - `postalCode`: `34220`
  - `addressCountry`: `TR`
- `geo`:
  - `latitude`: `41.0336`
  - `longitude`: `28.8879`
- `openingHoursSpecification`:
  - İmalat: Pazartesi-Cumartesi `08:00 - 19:00`
  - Acil Servis: 7/24 (`Mo-Su 00:00 - 23:59`)
- `areaServed`: İstanbul'un 39 ilçesi (`Adalar, Arnavutköy, Ataşehir, Avcılar, Bağcılar, Bahçelievler, Bakırköy, Bayrampaşa, Başakşehir, Beşiktaş, Beykoz, Beylikdüzü, Beyoğlu, Büyükçekmece, Çatalca, Çekmeköy, Esenler, Esenyurt, Eyüpsultan, Fatih, Gaziosmanpaşa, Güngören, Kadıköy, Kağıthane, Kartal, Küçükçekmece, Maltepe, Pendik, Sancaktepe, Sarıyer, Silivri, Sultanbeyli, Sultangazi, Şile, Şişli, Tuzla, Ümraniye, Üsküdar, Zeytinburnu`) `AdministrativeArea` olarak tanımlanır.

### 3.2 `AggregateRating`
- Değerlendirme puanı: `4.9`
- Değerlendirme sayısı: `128`
- En yüksek: `5.0`
- En düşük: `1.0`

### 3.3 `OfferCatalog` & `Service`
- **Hizmet 1:** Otomatik Kepenk İmalatı & Montajı
- **Hizmet 2:** 7/24 Acil Kepenk Tamir Servisi (30 Dk Müdahale)
- **Hizmet 3:** Kepenk Motoru & Alıcı Kart Değişimi
- **Hizmet 4:** Periyodik Bakım, Yay Ayarı & Yağlama

### 3.4 `FAQPage`
Sitede yer alan 6 S.S.S. sorusu yapısal veriye aktarılır:
1. Otomatik kepenk fiyatları neye göre belirlenir?
2. Elektrikler kesildiğinde kepenk nasıl açılır?
3. Kepenk arızalarında acil servis ne kadar sürede gelir?
4. Hangi motor markalarını kullanıyorsunuz?
5. Yaptığınız işlerde garanti süresi ne kadardır?
6. Siparişten sonra montaj ne kadar sürede tamamlanır?

---

## 4. Teknik Arama Motoru Dosyaları

### 4.1 `sitemap.xml`
- `loc`: `https://cankepenk.com/`
- `priority`: `1.0`
- `changefreq`: `weekly`
- `image:image`: Sitedeki tüm referans kepenk fotoğrafları (ref-1'den ref-9'a kadar) başlıkları ve alt bilgileriyle Google Görseller'e tanımlanır.

### 4.2 `robots.txt`
- `User-agent: *`
- `Allow: /`
- `Disallow: /dev-server.js`
- `Disallow: /vercel.json`
- `Sitemap: https://cankepenk.com/sitemap.xml`

### 4.3 `404.html` Optimizasyonu
- `<meta name="robots" content="noindex, follow">` eklenerek arama motorlarının kırık URL'leri dizine eklemesi engellenir.
- `<link rel="canonical" href="https://cankepenk.com/404.html">`

---

## 5. Sayfa İçi Görsel SEO İyileştirmesi (`alt` Etiketleri)

`index.html` içindeki tüm kepenk ve galeri görsellerine yerel arama niyetine uygun zengin `alt` açıklamaları tanımlanır:
- Örn: `alt="İstanbul Galvaniz Çelik Otomatik Dükkan Kepengi Montajı - Can Kepenk"`
- Örn: `alt="Alüminyum Motorlu Mağaza Kepengi İmalatı Esenler İstanbul"`
- Örn: `alt="7/24 Acil Kepenk Tamiri ve Motor Değişimi Referans Projesi"`
