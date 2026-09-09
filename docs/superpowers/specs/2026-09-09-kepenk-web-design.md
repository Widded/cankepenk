# Can Kepenk Resmi Web Sitesi - Tasarım ve Sistem Spesifikasyonu

- **Tarih:** 2026-09-09
- **Proje:** Can Kepenk Resmi Kurumsal One-Page Web Sitesi
- **Firma:** Can Kepenk Sistemleri (İstanbul / 7-24 Mobil Servis & İmalat)
- **Hedef Kitle:** İstanbul genelinde dükkan, mağaza, fabrika, depo ve garajı için güvenilir, kaliteli otomatik kepenk arayan esnaflar, iş yeri sahipleri ve acil tamir ihtiyacı olanlar.

---

## 1. Proje Amacı ve Vizyon

"Can Kepenk" için hazırlanan bu web sitesi; sıradan bir esnaf sitesi yerine, **kurumsal, ağır sanayi kalitesini yansıtan, güven veren ve doğrudan müşteri araması / WhatsApp mesajı getiren** modern ve zengin (dopdolu) bir One-Page web uygulamasıdır.

Kullanıcı geri bildirimi doğrultusunda:
- Otomatik fiyat hesaplayıcı bulunmaz; kepenk fiyatı motor markası, sac kalınlığı ve montaj koşullarına göre değişken olduğu için müşteri doğrudan **usta ile iletişime (WhatsApp'tan ölçü/fotoğraf atma veya 7/24 arama)** yönlendirilir.
- Sayfada etkileyiciliği katlayan ve güven hissini pekiştiren **İnteraktif Kumandalı Kepenk Simülatörü** yer alır.
- Tek sayfada (One-Page) hiçbir boşluk bırakmayan, baştan sona dolu dolu ve prestijli bir akış sunulur.

---

## 2. Görsel Kimlik ve Tasarım Sistemi (Design System)

### 2.1 Renk Paleti
- **Primary Dark (Arka Plan & Derinlik):** `#0B0F17` (Koyu Endüstriyel Siyah) & `#111827` (Derin Gece Mavisi / Antrasit)
- **Card Background & Surfaces:** `#1F2937` & `#242E3D` (Yarı saydam cam/glassmorphism efektli çelik yüzeyler)
- **Primary Accent (Endüstriyel Güvenlik Sarısı / Altın):** `#F59E0B` ve `#EAB308` (Dikkat çekici, sağlamlık ve güvenlik simgesi)
- **Call-To-Action (Acil Durum & WhatsApp):**
  - Acil Arama: `#EF4444` (Canlı Kırmızı, nabız/pulse animasyonlu)
  - WhatsApp: `#22C55E` / `#16A34A` (WhatsApp Resmi Yeşili)
- **Typography:**
  - Font Ailesi: Google Fonts `Outfit` veya `Inter` (Modern, okunaklı, geometrik ve kurumsal)
  - Metin Renkleri: `#F9FAFB` (Başlıklar), `#9CA3AF` (Açıklama ve teknik detaylar)

### 2.2 Mikro Animasyonlar & Dokunuşlar
- Kumanda tuşlarına basıldığında kepengin lamel lamel yukarı kıvrılması veya aşağı inmesi.
- Kartların üzerine gelindiğinde (hover) yumuşak 3D yükselme ve çelik parlaması.
- Sabit arama butonunda dikkat çekici hafif nabız (pulse) efekti.

---

## 3. Sayfa Yapısı ve Modüller (Section Architecture)

### 3.1 Üst Bar & Sabit Gezinti (Sticky Navigation Header)
- **Logo:** Sol tarafta çelik kepenk motifli rozet ve "CAN KEPENK" kurumsal tipografisi.
- **Konum Rozeti:** "📍 İstanbul Geneli 7/24 Mobil Servis & İmalat".
- **Menü Linkleri:**
  - Modellerimiz (`#modeller`)
  - Canlı Simülatör (`#simulator`)
  - Hizmetlerimiz (`#hizmetler`)
  - Hızlı Keşif (`#kesif`)
  - Referanslar (`#referanslar`)
  - SSS (`#sss`)
  - İletişim (`#iletisim`)
- **Aksiyon Butonları:**
  - 🔴 **7/24 Acil Çağrı:** `0532 XXX XX XX`
  - 🟢 **WhatsApp'tan Yaz:** Hızlı sohbet başlatıcı.

### 3.2 Hero Alanı (Karşılama & Dönüşüm Vitrini)
- **Manşet:** "İş Yeriniz ve Dükkanınız İçin Çelik Güvencesi: İstanbul'un Resmi Otomatik Kepenk İmalatçısı"
- **Alt Metin:** "Galvaniz çelik ve ekstrüzyon alüminyum motorlu kepenk sistemlerinde yerinde ücretsiz keşif, 2 yıl parça garantisi ve İstanbul geneli 30 dakikada 7/24 acil mobil teknik servis."
- **Öne Çıkan Aksiyonlar:**
  - [📋 Ücretsiz Keşif & Teklif İste] (Hızlı Keşif formuna yumuşak kaydırır)
  - [💬 WhatsApp'tan Ölçü/Fotoğraf Gönder]
- **4'lü Güven ve Prestij Sayacı:**
  - 🛡️ **2 Yıl Birebir Garanti** (Motor ve mekanik aksam)
  - ⏱️ **30 Dakika** (İstanbul içi acil arıza servisi)
  - 🏭 **2.500+** (Tamamlanan mağaza & dükkan montajı)
  - 📐 **Ücretsiz Yerinde Keşif** (İstanbul'un tüm 39 ilçesi)

### 3.3 İnteraktif Kepenk Simülatörü (Interactive Virtual Shutter)
Ziyaretçiye ürünün nasıl çalıştığını gösteren, güven hissini zirveye taşıyan interaktif modül:
- **Görsel Vitrin:** Gerçekçi modern bir mağaza cephesi.
- **Sanal Uzaktan Kumanda (Remote Controller):**
  - 🔼 **YUKARI (AÇ):** Kepenk lamelleri yukarı toplanır, vitrin aydınlanır, dükkan içi görünür.
  - 🔽 **AŞAĞI (KAPAT):** Kepenk lamelleri tıkır tıkır kapanır, tam kilitli duruma geçer.
  - ⏸️ **DURDUR:** Kepenk istenen aralıkta (yarı açık) sabitlenir.
- **Özelleştirme Seçenekleri:**
  - *Renk Seçimi:* Antrasit Gri (RAL 7016), Metalik Gümüş, Gece Siyahı, Saf Beyaz.
  - *Lamel Tipi:* Dolu Galvaniz Çelik (Ağır Güvenlik) veya Mikro Delikli Perfore (Gece vitrini aydınlık gösteren lüks model).
- **Aksiyon Butonu:** *"Bu Kombinasyon İçin Ustayla Görüş & Fiyat Al"* -> Seçilen renk ve modeli hazır mesaj olarak WhatsApp'a iletir.

### 3.4 Ürün Modellerimiz (Teknik Kartlar & Standartlar)
- **1. Otomatik Dükkan & Mağaza Kepenkleri:** Galvaniz çelik, elektrostatik fırın boyalı, paslanmaz, hırsızlığa karşı kilitli tırnak sistemi.
- **2. Otomatik Garaj & Otopark Kapıları:** Emniyet fotoselli (araç/insan algılayınca otomatik duran), sessiz yaylı sarmal tambur, çift uzaktan kumanda.
- **3. Poliüretan Dolgulu Alüminyum Yalıtımlı Kepenkler:** Isı kaybını %45 önleyen, fırtına ve darbelere dayanıklı, sessiz çalışan lüks kepenk sistemi.
- **4. Ağır Hizmet Endüstriyel Kepenkler:** Fabrika, lojistik depo ve antrepolar için zincirli sanayi tipi tüp motorlu ve harici panolu sistemler.

### 3.5 Uzmanlık Hizmetlerimiz & 7/24 Acil Arıza Masası
- 🚨 **7/24 Acil Kepenk Servisi:** Askıda kalan, motoru yanan, lamelleri raydan çıkan kepenklere İstanbul'un her ilçesine 30-45 dakikada hızlı servis.
- ⚡ **Motor & Alıcı Kart Değişimi:** Güçlü, termik korumalı orijinal tüp motorlar (Mosel, Somfy vb. kalitesinde) ve garantili montaj.
- 🔋 **Kepenk UPS (Kesintisiz Güç Kaynağı):** Elektrik kesintilerinde kepengi 3-4 gün aküden çalıştırma imkanı sunan sistem kurulumu.
- 📻 **Yedek Kumanda Kopyalama:** Yüksek güvenlikli rolling kodlu kumanda çoğaltma ve alıcı hafızasına tanımlama.
- 📐 **Ücretsiz Yerinde Keşif:** Aynı gün adrese gelinerek lazer metre ile sıfır hata ölçüm yapılması.

### 3.6 Hızlı Keşif & Ustayla Doğrudan İletişim Modülü
Otomatik hesaplama yerine, müşterinin usta ile en hızlı şekilde temas kurmasını sağlayan dinamik modül:
- **Seçimler:**
  - İhtiyaç Türü (Yeni Kepenk Yaptırmak İstiyorum / Arıza & Tamir Servisi Lazım / Kumanda-Motor Değişimi)
  - Bulunulan İlçe (İstanbul Avrupa / Anadolu dropdown listesi)
  - İletişim Notu (Ölçü veya arıza durumu)
- **Tek Tuşla WhatsApp'a Aktarım:** Girilen bilgileri tek tuşla formatlayıp WhatsApp sohbetine aktarır (Örn: *"Merhaba Can Kepenk, Kadıköy ilçesinden dükkan kepengi için keşif ve fiyat bilgisi almak istiyorum."*)
- **Doğrudan Arama Butonu:** 7/24 ustanın cebini arama seçeneği.

### 3.7 Tamamlanan Projeler & Referans Galerisi
- **Filtreler:** Tümü | Dükkan & Mağaza | Garaj Kapısı | Endüstriyel | Tamir Öncesi & Sonrası
- **Görseller:** Gerçekçi montaj fotoğrafları (Kuyumcu kepengi, AVM mağaza kepengi, oto galeri garaj kapısı vb.).
- **Öncesi / Sonrası İnteraktif Kart:** Eski arızalı paslı kepenk ile Can Kepenk tarafından yenilenen pırıl pırıl modern kepengin karşılaştırması.

### 3.8 4 Adımda Hizmet Süreci & Neden Can Kepenk?
1. **Adım 1 - Hızlı Keşif:** Aynı gün adreste lazer ölçüm & katalog sunumu.
2. **Adım 2 - Atölye İmalatı:** Kendi atölyemizde milimetrik kesim ve kaliteli profil montajı.
3. **Adım 3 - Temiz Montaj:** 24-48 saat içinde dükkana zarar vermeden anahtar teslim kurulum.
4. **Adım 4 - 2 Yıl Garanti & 7/24 Destek:** Sürekli yanınızda olan mobil servis desteği.

### 3.9 Sıkça Sorulan Sorular (Akordiyon Menü)
- Elektrik kesildiğinde dükkanda mahsur kalır mıyım?
- Montaj süresi kaç gündür?
- Fiyatlandırma nasıl yapılır?
- Garanti neleri kapsar?
- Acil servisi aradığımda ne kadar sürede gelirsiniz?

### 3.10 Alt Bilgi (Footer) & İstanbul İlçe Rozetleri
- **Atölye & Merkez Bilgileri:** Adres, İletişim Telefonları, E-posta, Çalışma Saatleri.
- **Hizmet Verilen Bölgeler:** İstanbul'un 39 ilçesi (Kadıköy, Şişli, Beşiktaş, Ümraniye, Bakırköy, Beylikdüzü vb. SEO etiketleri).
- **Telif ve Yasal:** Can Kepenk Sistemleri © 2026. Tüm hakları saklıdır.

### 3.11 Mobilde Sabit Alt Aksiyon Barı (Mobile Sticky CTA Bar)
Mobil cihazlardan bağlanan müşteriler için sayfanın en altında ekranı kapatmayan şık bir bar:
- [ 📞 7/24 Hemen Ara ] (Kırmızı buton)
- [ 💬 WhatsApp Fiyat Al ] (Yeşil buton)

---

## 4. Teknik Mimari & Dosya Düzeni

```
kepenk/
├── index.html          # Semantik HTML5, SEO meta etiketleri, OpenGraph, JSON-LD LocalBusiness şeması
├── css/
│   └── style.css       # Tasarım tokenları, responsive grid/flex, modern kartlar, animasyonlar
├── js/
│   └── app.js          # Kumandalı kepenk simülatörü mantığı, filtreleme, SSS akordiyonu, WhatsApp link üretici
├── assets/             # SVG ikonlar, profil çizimleri, optimize edilmiş kepenk görselleri
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-09-09-kepenk-web-design.md
```

---

## 5. Doğrulama ve Test Kriterleri

- [ ] **Simülatör Testi:** Aç, Kapat ve Durdur tuşlarının kepenk animasyonunu doğru tetiklemesi, renk ve lamel değişiminin anında yansıması.
- [ ] **İletişim & WhatsApp Testi:** Butonlara tıklandığında doğru telefon numarasını ve hazır WhatsApp mesaj metnini eksiksiz açması.
- [ ] **Mobil Uyumluluk:** 360px mobil ekranlardan 4K masaüstü ekranlara kadar kusursuz responsive dizilim.
- [ ] **Performans:** Harici ağır kütüphane olmaksızın 1 saniyenin altında sayfa yükleme hızı.
- [ ] **SEO Uyumluluğu:** Schema.org `HomeAndConstructionBusiness` / `LocalBusiness` yapılandırılmış verisi, doğru H1-H2-H3 başlık hiyerarşisi.
