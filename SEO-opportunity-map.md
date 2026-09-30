# SEO Opportunity Map — Veda Junior

**Created:** 30 September 2026

**Purpose:** Evidence-led opportunity database for post-migration recovery. Entries are not instructions to publish automatically. No visual changes, doorway pages, synthetic reviews or unverified claims are approved by this file.

## Research basis

- Current site and migration documents: canonical sitemap, current pages and 42 verified legacy redirects.
- Independent historical sources: BNT, BNR, ArtSofia, Sofia Municipality / Visit Sofia, Berkovitsa Municipality, 24 Chasa, Jazz FM and archival/public business listings.
- Public SERP samples only; they are not Search Console ranking data.

## Opportunities

| ID | Category | Opportunity | Evidence | Target URL | Expected value | Risk | Effort | Status | Next action |
|---|---|---|---|---|---|---|---|---|---|
| ENT-01 | ENTITY | Keep founding year and add founders to Organization schema. | BNT/BNR and ArtSofia identify Яна Никова and Оливера Спасова as leaders; current site names them. | `/` | Medium | Low | Done | Implemented in commit d60e751. |
| ENT-02 | ENTITY | Maintain official Facebook and Instagram in sameAs. | Official links are present in navigation and schema. | `/` | Medium | Low | Done | Recheck only if social URLs change. |
| HIS-01 | CONTENT | Preserve the 2001 founding story as historical context. | BNT 2026 and BNR 2026 refer to 25 years; legacy page states March 2001. | `/detska-shkola.html` | High | Low | Done | Keep wording historical, not a current offer claim. |
| HIS-02 | CONTENT | Preserve externally corroborated festival achievements. | 24 Chasa (2015, 2018); Berkovitsa Municipality (2017). | `/detska-shkola.html` | High | Low | Done | Cite only aggregate historical achievements; do not add unverified totals. |
| HIS-03 | CONTENT | Preserve documented televised/professional participation. | BNT multiple programmes; current professional archive. | `/profesionalen-balet.html` | High | Low | Done | Keep as historical participation. |
| HIS-04 | CONTENT | Add a compact, sourced 2025–2026 history item only if a natural existing historical list supports it. | BNT 25-year coverage; ArtSofia 2025; BNT 2025–26 programming. | `/profesionalen-balet.html` | Medium | Medium | Proposed | Review exact factual sentence before publication. |
| INT-01 | INTERNAL LINK | Homepage → Детска школа remains the primary path for child-enrolment intent. | Primary query cluster and current structure. | `/` → `/detska-shkola.html` | High | Low | Done | Keep descriptive link text. |
| INT-02 | INTERNAL LINK | Детска школа → kids gallery contextual evidence link. | Existing relevant gallery tab. | `/detska-shkola.html` | Medium | Low | Done | Retain. |
| INT-03 | INTERNAL LINK | Professional page → professional gallery contextual evidence link. | Existing relevant gallery tab. | `/profesionalen-balet.html` | Medium | Low | Done | Retain. |
| SERP-01 | SERP | Request recrawl of four canonical URLs after latest content/schema work. | Current Google results retain cached legacy/www pages. | all canonical pages | High | Low | Manual | Use Search Console URL Inspection once per canonical URL. |
| SERP-02 | SERP | Track stale legacy/indexed www results until canonical pages replace them. | Public search still surfaces old legacy titles/snippets. | legacy → current mapping | High | Low | Monitor | Do not change verified redirects. |
| SC-01 | SEARCH CONSOLE | Find queries with impressions, position 5–30 and weak CTR. | Requires authenticated Performance data. | primary URL map | High | Low | Blocked | Export last 28 vs previous 28 days. |
| SC-02 | SEARCH CONSOLE | Find position 1–5 queries with low CTR for snippet testing. | Requires authenticated Performance data. | page/query pairs | Medium | Low | Blocked | Change title only when data supports it. |
| LOC-01 | LOCAL | Keep seven current halls, neighbourhood labels and Maps links as the source of truth. | Current homepage is authoritative; historic listings conflict. | `/` | High | Low | Done | Do not migrate old locations into current copy. |
| LOC-02 | LOCAL | Strengthen one primary Google Business Profile with accurate category, service list, photos, review flow and website URL. | Local competitors expose current age, level, schedule and location data. | Google Business Profile | High | Low | Manual | See 90-day roadmap. |
| LOC-03 | LOCAL | Test neighbourhood query demand before making any new location content. | Seven halls can create local relevance but separate pages risk doorway content. | none | Medium | Medium | Research | Use Search Console / Keyword Planner; no auto pages. |
| BL-01 | BACKLINK | Correct KartaSofia business listing to canonical website + verified phone/address. | Existing brand listing carries historic copy. | third party → `/` | Medium | Low | Manual | Contact listing owner only with confirmed business details. |
| BL-02 | BACKLINK | Correct Business.bg listing to canonical website + verified phone. | Existing relevant listing. | third party → `/` | Medium | Low | Manual | Check whether listing is claimable. |
| BL-03 | BACKLINK | Correct Golden Pages historic address only after official correspondence address is confirmed. | Listing appears to show an old address. | third party → `/` | Medium | Medium | Manual | Do not overwrite with a hall address unless it is the official public address. |
| BL-04 | BACKLINK | Check stale external links to www or legacy URLs, then request a direct canonical link from editable high-quality pages. | Cached legacy footprint and old site URLs. | legacy → target page | High | Low | Research | Prioritise cultural/media domains first. |
| BL-05 | BACKLINK | Ask ArtSofia / event partners to link future Veda Junior mentions to canonical site. | ArtSofia 2025 event credits Veda Junior and leaders. | `/profesionalen-balet.html` or `/` | High | Low | Manual | Use factual, non-promotional request for future listings. |
| BL-06 | BACKLINK | Keep a watchlist for BNT/BNR/Jazz FM/Rumyana Kotseva pages. | High-relevance historical mentions; may be unlinked. | `/profesionalen-balet.html` | High | Low | Research | Identify whether each page already links; request only appropriate editorial correction. |
| PR-01 | PR | Use verified 25-year anniversary / 2001 origin as a cultural-story angle. | BNT and BNR 2026 coverage. | `/` | High | Low | Ready | Pitch only when tied to a genuine event or anniversary activity. |
| PR-02 | PR | Current youth cultural performance angle. | ArtSofia 2025 and BNT 2025–26 programme mentions. | `/profesionalen-balet.html` | Medium | Medium | Ready | Use only confirmed upcoming activity. |
| PR-03 | PR | Sofia halls + long-standing child dance education angle. | Current seven-hall setup + historic school. | `/detska-shkola.html` | Medium | Medium | Proposed | Requires current factual availability. |
| IMG-01 | IMAGE | Audit actual image dimensions/filesize and gallery asset load in a browser before width/height or responsive-image changes. | Source indicates gallery uses JS and past asset issues existed. | all | Medium | Medium | Blocked | Use PageSpeed + browser Network; do not guess dimensions. |
| IMG-02 | IMAGE | Maintain descriptive alt text on representative static images. | Current page images use descriptive alts. | all | Medium | Low | Done | Validate on future uploads. |
| PERF-01 | TECHNICAL | Use field CWV/PSI to identify actual LCP before performance code changes. | Hero preload already exists; source review cannot prove field metrics. | `/` | Medium | Low | Blocked | Run mobile + desktop PSI. |
| CONTENT-01 | CONTENT | Add current, factual availability/season information only when confirmed. | Competitors win on fresh age/level/schedule detail; Veda must not publish stale info. | `/detska-shkola.html` | High | Medium | Manual | Collect current group/age facts from owner first. |
| CONTENT-02 | CONTENT | Cover beginner and age long-tails naturally through one factual paragraph, not pages. | Competitor SERPs emphasise age band, beginner level, process. | `/detska-shkola.html` | High | Medium | Proposed | Needs confirmed current teaching policy. |
| NEW-01 | CONTENT | No new SEO landing page approved. | Current canonical pages cover brand, child school, professional history and gallery; close variants risk cannibalisation. | n/a | High | Low | Decision | Reassess only with Search Console evidence of distinct unmet intent. |

## Search-intent clusters

| Cluster | Primary URL | Secondary URL | Cannibalisation risk | Current decision |
|---|---|---|---|---|
| Brand: Veda Junior / Веда Джуниър / Veda Junior Ballet | `/` | professional page | Low | Homepage is the entity hub. |
| Child school: модерен балет, модерни/съвременни танци, танци за деца, балет за деца + София | `/detska-shkola.html` | `/` | Medium if homepage is expanded too far | Keep detailed service intent on child page; homepage summarises. |
| Professional history, concerts, TV, productions | `/profesionalen-balet.html` | gallery | Low | Keep historical/professional intent separate. |
| Photo evidence | `/gallery.html` | relevant topic page | Low | One canonical gallery; tab URLs are UX, not SEO targets. |

## SERP cleanup watchlist

- Canonical homepage appears in public results with current title/description.
- Cached `www` homepage and legacy children/portfolio URLs can still appear temporarily.
- Watch specifically: `/Детска школа/d1`, `/Професионален Балет/b1`, `/portfolio.php`, `/portfolio.child.php` and `www` host results.
- Action is recrawl/index monitoring, not more redirects.

## Evidence URLs

- https://bnt.bg/news/25-godini-balet-veda-juniar-346650news.html
- https://bnrnews.bg/main/post/429269/25-godini-balet-veda-dzhuniar-tantsuvay-sas-sartse
- https://artsofia.bg/bg/events/2025/06/21/ljatna-programa-koncert-bylgarskite-evyrgrijni
- https://www.24chasa.bg/index.php/ozhivlenie/article/4683960
- https://www.24chasa.bg/ozhivlenie/article/6792715
- https://www.berkovitsa.bg/%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D0%B8-%D0%B2-%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB-%E2%80%9E%D1%82%D0%B0%D0%BD%D1%86%D0%B8%E2%80%9C/
- https://mail.visitsofia.bg/en/item/2776-september-17-day-of-sofia
- https://jazzfm.bg/novini/mladi-vokalni-talanti-v-koncerta-balgarskite-evargrijni-i-naj-novite-balgarski-pesni-tazi-nedelja-na-lyatnata-estrada.html