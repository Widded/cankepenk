# SEO ve Yapısal Veri (JSON-LD) Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Can Kepenk web sitesine Google ve sosyal medya platformlarında en üst düzeyde sıralama, CTR ve zengin sonuç (Rich Snippets, S.S.S. akordiyonu, yıldız değerlendirmesi) kazandıracak tam teşekküllü SEO ve JSON-LD altyapısını kurmak.

**Architecture:** Teknik arama dosyaları (`robots.txt`, `sitemap.xml`), `index.html` başlık ve meta etiketleri, yerel coğrafi etiketler, Open Graph / Twitter Card etiketleri, Schema.org `@graph` (LocalBusiness + 39 İlçe + FAQPage + Service + AggregateRating) ve sayfa içi görsel `alt` optimizasyonu.

**Tech Stack:** HTML5 Semantic Markup, Schema.org JSON-LD, XML (Sitemap), Robots.txt, Open Graph Protocol.

## Global Constraints
- Hedef domain: `https://cankepenk.com`
- Telefon: `+90 505 447 13 56` / `0505 447 13 56`
- E-posta: `cankepenkk@gmail.com`
- Konum: Osmangazi Caddesi, Esenler / İstanbul (`41.0336, 28.8879`)
- Kod stili ve Türkçe karakter desteği korunmalı (UTF-8).

---

### Task 1: `robots.txt` ve `sitemap.xml` Dosyalarının Oluşturulması

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: `robots.txt` dosyasını oluştur**
- [ ] **Step 2: `sitemap.xml` dosyasını görsel uzantılarıyla birlikte oluştur**
- [ ] **Step 3: XML sözdizimini doğrula**
- [ ] **Step 4: Commit**
```bash
git add robots.txt sitemap.xml
git commit -m "feat(seo): add robots.txt and sitemap.xml with image extensions"
```

---

### Task 2: `index.html` Meta, Geo, Sosyal Paylaşım & Gelişmiş JSON-LD Şemasının Eklenmesi

**Files:**
- Modify: `index.html` (Head & Schema alanları)

- [ ] **Step 1: Meta title (60 char), description (158 char), canonical, robots ve geo etiketlerini ekle**
- [ ] **Step 2: Open Graph ve Twitter Card etiketlerini ekle**
- [ ] **Step 3: Schema.org `@graph` bloğunu ekle (LocalBusiness, 39 İlçe, 6 S.S.S., 4 Hizmet, 4.9 Yıldız)**
- [ ] **Step 4: JSON-LD sözdizimini test et (geçerli JSON)**
- [ ] **Step 5: Commit**
```bash
git add index.html
git commit -m "feat(seo): enhance index.html with advanced meta tags, geo-tags and rich JSON-LD schema"
```

---

### Task 3: `404.html` SEO Temizliği ve Canonical Yapılandırması

**Files:**
- Modify: `404.html`

- [ ] **Step 1: `<meta name="robots" content="noindex, follow">` ekle**
- [ ] **Step 2: `<link rel="canonical" href="https://cankepenk.com/404.html">` ekle**
- [ ] **Step 3: Commit**
```bash
git add 404.html
git commit -m "fix(seo): add noindex and canonical to 404 page"
```

---

### Task 4: `index.html` İçerisindeki Görsellerin `alt` Etiketlerinin Zenginleştirilmesi

**Files:**
- Modify: `index.html` (Görsel etiketleri)

- [ ] **Step 1: Kepenk referans ve model görsellerindeki `alt` etiketlerini yerel arama niyetine göre güncelle**
- [ ] **Step 2: Görsel yükleme performansını korumak için `loading="lazy"` ve `decoding="async"` etiketlerini kontrol et**
- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat(seo): optimize image alt tags with localized keywords"
```

---

### Task 5: Doğrulama ve GitHub'a Push

- [ ] **Step 1: Geliştirici sunucusu veya yerel dosya üzerinden HTTP başlıkları ve meta etiketlerini test et**
- [ ] **Step 2: `git status` ile tüm değişiklikleri doğrula**
- [ ] **Step 3: `git push origin main` ile GitHub'a pushla**
