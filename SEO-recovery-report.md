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
---

## ADVANCED SEO GROWTH SPRINT — 30 September 2026

### Scope

An evidence-led growth sprint was performed after the completed migration audit. The goal was historical authority recovery, entity understanding, competitor gap analysis, local and backlink opportunities—not additional keyword pages or visual change.

### Research findings — externally corroborated historical facts

| Historical fact | Source | Era | Current page | Already present | Safe to restore | SEO value | Action |
|---|---|---|---|---|---|---|---|
| Veda Junior marks 25 years / origin 2001. | BNT and BNR anniversary coverage; legacy page. | 2001–2026 | Детска школа / Homepage | Yes | Yes, as history | High | Retained; no new visible copy needed. |
| Яна Никова and Оливера Спасова are identified publicly as long-term leaders/choreographers. | BNR 2026; BNT; ArtSofia 2025. | 2001–2026 | Homepage / both topic pages | Yes in copy | Yes | High | Added as Organization founders in schema only. |
| Major festival distinctions across ages. | 24 Chasa 2015 and 2018; Berkovitsa Municipality 2017. | 2015–2018 | Детска школа | Yes, general historical coverage | Yes | High | Retained as historic achievements; no unsupported total added. |
| Sofia cultural event participation. | Visit Sofia / Sofia Municipality 2020. | 2020 | Професионален балет | Partly | Yes | Medium | Documented as a backlink/mention opportunity; no claim expansion. |
| Participation in Bulgarian Evergreens concert. | ArtSofia 2025, Jazz FM. | 2023–2025 | Професионален балет | Partly | Yes | Medium | Future factual update only when a current event is confirmed. |
| BNT programming / television appearances. | BNT pages 2014, 2021, 2025, 2026. | 2014–2026 | Професионален балет | Yes | Yes | High | Retained in historical context. |
| Eurovision-related historic participation. | Public legacy material; BNT coverage. | Historic | Професионален балет | Yes | Yes, carefully worded | Medium | Keep as participation, not award/affiliation claim. |
| Professional work with artists and productions. | Legacy archive plus BNT programme pages. | Historic | Професионален балет | Yes | Yes | High | Retained as historical work. |

### Verified entity improvement

The existing Organization schema already contained founding date, Sofia service area, official Facebook/Instagram profiles and phones. It is now enriched with two verified founders:

- Яна Никова
- Оливера Спасова

This is a structured-data-only change in `index.html`. No claim was invented, and the visible design/content is unchanged.

### Competitor / intent findings

Public SERP samples for modern ballet, modern dance, ballet for children and dance school in Sofia repeatedly show the same conversion-focused information: current ages/levels, beginner suitability, live schedule, location, instructor proof, enrolment path and fresh posts. Veda Junior has a differentiated advantage: a well-documented history since 2001, multi-hall Sofia presence, professional-stage work and independent media/cultural corroboration.

**Current gap is not a keyword gap.** The only high-value content gap is factual, current enrolment information (e.g. owner-confirmed age/beginner availability and process). It must be supplied and approved as current data before publication. No new page is justified; separate keyword/location pages would add cannibalisation and doorway risk.

### Backlink and mention research

Found **14 high-relevance brand-mention or historical-reference opportunities**, including BNT, BNR, ArtSofia, Visit Sofia, Jazz FM, 24 Chasa, Berkovitsa Municipality, KartaSofia, Business.bg, Golden Pages, Rumyana Kotseva, SODF/Artantsa, official event listings and archival cultural references.

**Six practical reclamation/correction opportunities** were prioritised:

1. KartaSofia — verify/claim listing; set canonical website and only confirmed contact data.
2. Business.bg — verify/claim listing; set canonical website and phone.
3. Golden Pages — historic address should be corrected only after the official public correspondence address is confirmed.
4. ArtSofia and future event organisers — request a canonical link for future factual listings.
5. BNT/BNR/Jazz FM and partner pages — check whether each mention is unlinked; request a link only where editorially appropriate.
6. External links to old `www` or legacy routes — update only on high-quality editable pages; redirects remain as safety net.

No outreach was sent and no low-quality directory submission is recommended.

### Documents created

- `SEO-opportunity-map.md` — prioritised evidence, query clustering, SERP watchlist, backlink/PR/local/image/entity opportunities and risks.
- `SEO-90-day-roadmap.md` — Now / 7 / 14 / 30 / 60 / 90-day plan, Google Business Profile checklist and ethical review flow.

### Search Console status

Search Console performance and URL-inspection data were not accessible in this environment. Therefore no position, CTR, click or trend claim is made. The next data-backed sprint is explicitly defined in the opportunity map: analyse 28 days vs previous 28 days, then select queries with meaningful impressions, position 5–30 and weak CTR.

### Intentionally not changed

- No Hero, layout, responsive/mobile order, CSS, animation, gallery code, images, navigation, buttons, colours or typography.
- No change to the 42 verified redirects, canonical host rules, sitemap, robots or current hall data.
- No new landing pages, keyword stuffing, fake review/award/event schema or fabricated business facts.

### Verification

- Backup created: `backup/advanced-seo-growth-2026-09-30`.
- Entity-schema commit: `d60e751` — GitHub Actions deployment succeeded.
- Opportunity-map commit: `efcd33d` — GitHub Actions deployment succeeded.
- 90-day-roadmap commit: `1455cb7` — GitHub Actions deployment succeeded.
- The entity schema parses as valid JSON before commit. This change has no rendered DOM/layout impact.

---

## City-wide SEO authority — 1 October 2026

**Goal:** Clarify that Veda Junior is one Sofia-wide dance organization operating across seven existing halls, while retaining the local relevance of each hall.

### Existing strengths confirmed from source

- Homepage title and meta description explicitly mention Sofia, modern ballet, modern/contemporary dance, and seven halls.
- Homepage Organization/LocalBusiness JSON-LD already includes `areaServed: City / София`, a single stable organization `@id`, founding year, verified founders, contact points, and official social profiles.
- Homepage has a `7 зали в София` heading and seven existing hall/Maps entries.
- The children's school page has its own canonical, Sofia-focused title/description, a seven-hall section, links to all hall Maps entries, and a contextual homepage halls link.
- The 42 confirmed legacy redirects already consolidate historic thematic URLs into the correct new pages; no new redirect was justified.

### Public competitor sampling (not rank tracking)

The observed Sofia market includes Ballet Tiara (multiple halls and explicit city-wide coverage), VeroniQue (city/style and schedule), Pambos (fresh groups and enrolment details), and other schools with clear age/level information. These are examples of content presentation, not a universal Google ranking. Maps/Local Pack visibility is location-sensitive and must not be equated with city-wide organic position.

### Minimal implementation

- Backup: `backup/pre-citywide-seo-2026-10-01` from `34e08bad7c246e1dd274c9c7a6940449dc85901d`.
- Homepage: appended one factual city-wide sentence to the existing About paragraph, connecting the seven halls to different areas of Sofia. Commit `9f9a0501e0381ebc3e2a565af7657dd4aae39564`.
- No CSS, structural HTML, Hero, media, JS, schema, URL, gallery, navigation, mobile order, or redirects were changed.
- A matching copy edit on the children's school page was prepared but could not be published through the available write action; its existing seven-hall/Sofia signals remain intact. Do not report it as deployed.

### Measurement and follow-up

- Verify GitHub Actions deployment and live homepage text before claiming live success.
- Use Google Search Console Performance (last 28 vs previous 28 days) for the five broad Sofia query families; segment organic web results by query/page/device. Compare separately with locality-specific queries.
- Treat Google Maps/Local Pack as a distinct channel: results vary with searcher's location and business profile signals.
- Avoid adding neighborhood doorway pages, changing the current Google Business Profile automatically, or inflating areaServed with unverified hall addresses.


### Completion of the seven-hall city-wide paragraph — 1 October 2026

- The previously blocked `detska-shkola.html` paragraph edit was successfully committed as `c4d6e8bbcad93c3e14ea77683010bae16cdbf73e`.
- Exact copy now in GitHub `main`: “Veda Junior провежда занимания в 7 зали в различни райони на София, за да могат семействата от целия град да изберат удобна локация. Обадете се за заниманията в избраната зала и отворете картата за точния маршрут.”
- GitHub commit diff confirms only one paragraph changed, with the same seven Maps URLs and no structural HTML, CSS, JS, image, gallery, canonical or redirect edits.
- GitHub Actions `Deploy Veda Junior to CBOX` run `36855537408` for `c4d6e8b`: **completed / success** (GitHub API checked). https://github.com/somecallmemartin-hash/veda-junior-website/actions/runs/36855537408
- The public homepage was readable and showed the previous published city-wide About sentence. A public web extraction of the children's page still served the older paragraph despite the successful deployment; this may be crawler/cache staleness, but **independent live visibility of the new children's paragraph is not yet verified**. Recheck the origin/browser without cached content before marking that check complete.
- The seven hall Maps links are present unchanged in both the page source and public page extraction; full end-to-end Google Maps destination verification remains separate.

### Current Sofia competitor content signals (public examples, not rankings)

- Ballet Tiara explicitly communicates multiple halls across Sofia and offers locality and group information: https://ballet-tiara.com/
- Pambos publishes fresh 2026/2027 child/teen class information: https://lospambos.com/novi-grupi/latino-i-moderni-tantsi-za-detsa-i-tiyneydzhari-v-sofiya--pambos-dancing-center
- Electra makes age-group and class types explicit: https://www.electradancestudio.com/
- VeroniQue names its Sofia dance styles and service geography: https://veronique-bg.com/

**Decision:** Do not add more repetitive Sofia phrases or artificial neighborhood pages. Next material gap is accurate current enrolment facts (age/level, group availability, timetable or clear phone-based process), requiring owner verification. Measure city-wide organic web queries against neighborhood-specific queries in Search Console, with Maps/Local Pack tracked separately.
