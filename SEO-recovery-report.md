# SEO Recovery Report — Veda Junior

**Дата:** 28 септември 2026  
**Scope:** Phase 2 реконструкция на legacy URL inventory.  
**Принцип:** Minimum change → maximum SEO recovery.

## Backup point

Преди всяка редакция е създаден Git branch `backup/pre-seo-inventory-2026-09-28` от `main` at `2bd57002e8ac3836bfc53765ec79c660e09a51c8`.

## Източници и метод

1. Текущият `.htaccess` (точните legacy правила).
2. Текущите indexable страници и `sitemap.xml`.
3. Публично откриваеми стари резултати за Veda Junior.
4. Live HTTP проверка на всеки точен legacy маршрут през HTTPS canonical host.

Не са добавяни URL-и на предположение. В inventory-то „confirmed“ означава, че маршрутът е изрично наличен в текущото redirect правило и е успешно проверен live.

## Резултат

- **42 confirmed legacy URL-а:** всички са live проверени като **301 → 200** към тематично правилна крайна страница.
- **0 redirect промени:** не е открита липсваща или грешна дестинация.
- **1 потвърден asset pattern:** `/ImagesDB/Participations_[0-9]+/<local-image>` се пренасочва само когато локалният файл съществува; това е защитно правило, не е списък с отделни URL-и.
- **0 unverified candidates, добавени като redirect-и:** търсенето не даде уникален допълнителен публичен HTML URL извън inventory-то.
- **Недостигащи категории спрямо историческите 189 адреса:** най-вероятно архивни image/media адреси и евентуални стари записи с query string; те не могат да се реконструират фактически без оригинален crawl/export и не са изкуствено добавени.

## SEO съдържание

Не е добавян нов текст: текущите `detska-shkola.html` и `profesionalen-balet.html` вече запазват полезното историческо съдържание естествено — София, възрастови групи, модерен балет, съвременни танци, фестивали, отличия, Детска/Българска Евровизия, телевизионни и професионални участия. Това покрива целевата тематична релевантност без keyword stuffing и без визуални промени.

## Regression check

- 42/42 exact legacy URL-а: 301 → 200.
- Критични откриваеми legacy URL-и `/portfolio.php`, `/portfolio.child.php`, `/Детска школа/d1`, `/Професионален Балет/b1`: проверени и коректни.
- Не са редактирани `.htaccess`, HTML/CSS/JS, изображения, Hero, галерии или responsive поведение.
- Единствените source additions от този commit са настоящият отчет и `old-to-new-inventory.html`.

## Пълен confirmed inventory

| # | Категория | OLD URL | NEW URL | Live status | Relevance | Промяна |
|---:|---|---|---|---|---|---|
| 1 | Детска школа | `/Детска школа/d1` | `/detska-shkola.html` | 301 → 200 | Детска школа | не |
| 2 | Детска школа | `/dance_school.php` | `/detska-shkola.html` | 301 → 200 | Детска школа | не |
| 3 | Детска школа | `/about_junior.html` | `/detska-shkola.html` | 301 → 200 | Детска школа | не |
| 4 | Детска школа | `/about_junior.php` | `/detska-shkola.html` | 301 → 200 | Детска школа | не |
| 5 | Детска школа | `/For-school/` | `/detska-shkola.html` | 301 → 200 | Детска школа | не |
| 6 | Детска школа | `/Children-dance-school-Veda-Junior/` | `/detska-shkola.html` | 301 → 200 | Детска школа | не |
| 7 | Детска школа | `/za-shkolata/` | `/detska-shkola.html` | 301 → 200 | Детска школа | не |
| 8 | Професионален балет | `/Професионален Балет/b1` | `/profesionalen-balet.html` | 301 → 200 | Професионален балет | не |
| 9 | Професионален балет | `/professional_ballet.php` | `/profesionalen-balet.html` | 301 → 200 | Професионален балет | не |
| 10 | Професионален балет | `/about_prof.html` | `/profesionalen-balet.html` | 301 → 200 | Професионален балет | не |
| 11 | Професионален балет | `/about_prof.php` | `/profesionalen-balet.html` | 301 → 200 | Професионален балет | не |
| 12 | Професионален балет | `/For-ballet/` | `/profesionalen-balet.html` | 301 → 200 | Професионален балет | не |
| 13 | Професионален балет | `/za-nas/` | `/profesionalen-balet.html` | 301 → 200 | Професионален балет | не |
| 14 | Записване | `/Booking/` | `/detska-shkola.html#contact` | 301 → 200 | Записване в детска школа | не |
| 15 | Записване | `/part_junior.html` | `/detska-shkola.html#contact` | 301 → 200 | Записване в детска школа | не |
| 16 | Записване | `/part_junior.php` | `/detska-shkola.html#contact` | 301 → 200 | Записване в детска школа | не |
| 17 | Записване | `/part_prof.html` | `/profesionalen-balet.html#contact` | 301 → 200 | Запитвания за професионален балет | не |
| 18 | Записване | `/part_prof.php` | `/profesionalen-balet.html#contact` | 301 → 200 | Запитвания за професионален балет | не |
| 19 | Галерия – детска школа | `/portfolio.child.php` | `/gallery.html?tab=kids` | 301 → 200 | Детска галерия | не |
| 20 | Галерия – детска школа | `/Галерия Детска школа/h1` | `/gallery.html?tab=kids` | 301 → 200 | Детска галерия | не |
| 21 | Галерия – детска школа | `/Gallery-Junior/` | `/gallery.html?tab=kids` | 301 → 200 | Детска галерия | не |
| 22 | Галерия – детска школа | `/gallery_junior.html` | `/gallery.html?tab=kids` | 301 → 200 | Детска галерия | не |
| 23 | Галерия – детска школа | `/gallery_junior.php` | `/gallery.html?tab=kids` | 301 → 200 | Детска галерия | не |
| 24 | Галерия – детска школа | `/galeria-detska-shkola/` | `/gallery.html?tab=kids` | 301 → 200 | Детска галерия | не |
| 25 | Галерия – професионален балет | `/portfolio.php` | `/gallery.html?tab=professional` | 301 → 200 | Професионална галерия | не |
| 26 | Галерия – професионален балет | `/Портфолио/p1` | `/gallery.html?tab=professional` | 301 → 200 | Професионална галерия | не |
| 27 | Галерия – професионален балет | `/Галерия Професионален Балет/p1` | `/gallery.html?tab=professional` | 301 → 200 | Професионална галерия | не |
| 28 | Галерия – професионален балет | `/Gallery/` | `/gallery.html?tab=professional` | 301 → 200 | Професионална галерия | не |
| 29 | Галерия – професионален балет | `/gallery_prof.html` | `/gallery.html?tab=professional` | 301 → 200 | Професионална галерия | не |
| 30 | Галерия – професионален балет | `/gallery_prof.php` | `/gallery.html?tab=professional` | 301 → 200 | Професионална галерия | не |
| 31 | Галерия – професионален балет | `/galeria-profesionalen-balet/` | `/gallery.html?tab=professional` | 301 → 200 | Професионална галерия | не |
| 32 | Контакти | `/contacts.php` | `/#contact` | 301 → 200 | Контакти | не |
| 33 | Контакти | `/contacts.html` | `/#contact` | 301 → 200 | Контакти | не |
| 34 | Контакти | `/Contacts/` | `/#contact` | 301 → 200 | Контакти | не |
| 35 | Контакти | `/Контакти/c1` | `/#contact` | 301 → 200 | Контакти | не |
| 36 | Контакти | `/kontakti/` | `/#contact` | 301 → 200 | Контакти | не |
| 37 | За нас | `/about-us.html` | `/#about` | 301 → 200 | За нас | не |
| 38 | Начало | `/index.html` | `/` | 301 → 200 | Начална страница | не |
| 39 | Карта на сайта | `/Sitemap/` | `/sitemap.xml` | 301 → 200 | Sitemap | не |
| 40 | Карта на сайта | `/sitemap.html` | `/sitemap.xml` | 301 → 200 | Sitemap | не |
| 41 | Карта на сайта | `/sitemap.php` | `/sitemap.xml` | 301 → 200 | Sitemap | не |
| 42 | Начало | `/index.php` | `/` | 301 → 200 | Начална страница (без query string) | не |


## Content & Search Relevance Recovery — 28 септември 2026

### Анализ и минимални промени

| Current content | Missing value | Implemented minimal change |
|---|---|---|
| `detska-shkola.html` съдържаше „модерен балет“ и „съвременни танци“, но не назоваваше естествено „модерни танци за деца“ и „балет за деца“. | Ясен сигнал за основната детска тематика без нов блок. | Обновени са съществуващият intro абзац, един исторически текст и meta/OG/Schema description. |
| Homepage покриваше „танци и балет за деца в София“, но не и модерен балет/модерни танци. | По-точна summary релевантност на canonical homepage. | Обновени са само title, meta/OG description и съществуващите Schema name/description. |
| `profesionalen-balet.html` и `gallery.html` вече съдържат потвърдената историческа информация за фестивали, награди, Евровизия, телевизионни и професионални участия. | Няма доказана липса. | Без промяна. |

### Запазени ограничения

Не са променяни Hero, H1 в Hero, navigation, изображения, галерии, CSS, spacing, анимации, mobile/desktop layout, `.htaccess`, canonical URL-и или redirect-и. Не са добавяни нови страници или непотвърдени факти.

### Проверка

Промените са само текстови metadata/съществуващи copy елементи и не добавят нов компонент или визуална секция. Те дават ясни, но не повтарящи се тематични сигнали за „модерен балет“, „модерни танци“, „съвременни танци“ и „танци за деца“ в София.
---

## Live Technical, Search & Authority Audit — 30 септември 2026

### Scope and safe-change decision

Reviewed the current `main` state after commits `dad86147` (deeper children-school legacy recovery) and `fd06f23e` (deeper professional-ballet legacy recovery), plus the public canonical homepage, sitemap, robots directives, redirect rules, metadata, headings, JSON-LD, internal navigation and public search.

A restore point was created before this audit: `backup/pre-live-tech-audit-2026-09-30` → current `main`.

**Implementation decision:** no visitor-facing HTML, CSS, JavaScript, images, navigation, schema or redirects were changed in this audit. The signals reviewed are correct; adding near-duplicate copy, keyword pages, redirects or unsupported schema would create more risk than SEO value.

### Technical audit

| Check | Result | Action |
|---|---|---|
| Canonical URLs | `/`, `/detska-shkola.html`, `/profesionalen-balet.html`, `/gallery.html` are in `sitemap.xml`; each has a self-referencing canonical. | Kept. |
| Crawl directives | `robots.txt` allows crawling and names the canonical sitemap. | Kept. |
| Host/protocol and legacy routes | `.htaccess` specifies HTTPS + non-`www`; exact legacy rules run first. The existing report confirms 42 exact routes as 301 → relevant 200. | Kept; do not alter. |
| Temporary redirects / parameter duplicates | No 302 rule is present. Gallery tabs preserve UX but canonicalize to the single gallery URL. | Kept. |
| Page structure | All canonical pages have unique title, description, one H1, relevant H2 hierarchy, `lang=bg` and JSON-LD. | Kept. |
| Internal links and orphan risk | Global navigation and contextual links connect all four sitemap pages; no sitemap page is orphaned. | Kept. |
| Recent regressions | Source review found no new broken reference or undefined-symbol regression in shared navigation/gallery handling. | Monitor after future gallery changes. |
| Image performance | Previous hero preload is present. Width/height was not guessed: use measured asset dimensions before adding it. | No speculative change. |
| Lighthouse/CWV | Requires real browser and field data; source inspection is insufficient. | Check PageSpeed Insights + Search Console first. |

### Current vs historical information

- **Current:** Veda Junior, Sofia, the halls displayed on the site and current phone contact.
- **Historical:** founding story, festivals, awards, Eurovision, TV, concerts, productions and collaborations. No old address, timetable or price has been restored as current information.

### Primary URL map

| Query family | Primary URL | Intent |
|---|---|---|
| Veda Junior; Веда Джуниър; школа по танци София | `/` | Brand and local discovery. |
| модерен балет София; модерни/съвременни танци София | `/detska-shkola.html` | Children-school service research. |
| модерен балет за деца; танци за деца София; балет за деца София; детска школа по танци | `/detska-shkola.html` | Enrolment/service detail. |
| професионален балет Veda Junior; участия; концерти; продукции | `/profesionalen-balet.html` | Professional-history and bookings. |
| снимки Veda Junior; детска/професионална галерия | `/gallery.html` | Visual proof; tab state is UX only. |

### Public search and competitor findings

Public search already returns the current canonical homepage with the improved title and description. It also returns cached historic `www` and legacy pages. That is expected during canonical consolidation; a browser SERP is not a Search Console position report.

Competitors for broad child-dance queries make age range, locality, style, outcome and enrolment path explicit. The child-school page now covers the evidenced Veda Junior differentiators—history, age groups, modern/contemporary dance, festivals and Sofia halls—without inventing curriculum, schedule or pricing. The highest-value future content is fresh, factual school activity, not repeated keywords.

### Backlink reclamation opportunities

1. Existing listings on Kartasofia, Business.bg and Golden Pages: ask only for correction of official site URL, phone and any verified address.
2. Public Eurovision history corroborates a Veda Junior guest appearance in Bulgaria 2007; preserve it as historical context only.
3. Contact past event/media/artist partners only if they have a factual editable page; do not pursue bulk directories or paid links.

### Search Console actions

1. Inspect and request indexing after the 30 September commits for `/`, `/detska-shkola.html`, `/profesionalen-balet.html` and `/gallery.html`.
2. Compare the latest 28 days with the previous 28 in Performance. Filter queries with meaningful impressions, average position 5–30 and weak CTR; those are the next evidence-based quick wins.
3. Monitor old `www`/legacy URLs declining while canonical URLs gain impressions.
4. Run mobile and desktop PageSpeed Insights before changing image/loading strategy.

### Monitoring

- **7 days:** sitemap processing, canonical URL inspection and coverage errors.
- **14 days:** impressions, newly crawled snippets and legacy consolidation.
- **28 days:** clicks, CTR and average position by primary URL; compare with previous 28 days before one next targeted improvement.

### Intentionally not changed

Hero, images, galleries, buttons, animation, navigation, mobile/desktop layout, responsive behaviour, verified redirects, canonical host rules, schema facts and link strategy remain unchanged. No keyword pages, keyword stuffing, fake review/award schema or fabricated local data was added.